from __future__ import annotations

import re
import shutil
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ARCHIVE = ROOT / "assets" / "original-public-images" / (
    "latest-upload-" + datetime.now().strftime("%Y%m%d-%H%M%S")
)
SHEET_PATH = Path(r"C:\tmp\hhh-public-webp-contact-sheet.jpg")

IMAGE_EXTS = {".jpg", ".jpeg", ".png"}


def output_name(source: Path) -> str:
    name = source.name.lower()
    stem = source.stem.lower()

    pacific = re.search(r"pacific\s*apt[-\s]*(\d+)", name)
    if pacific:
        return f"pacific-apt-{int(pacific.group(1))}.webp"

    if stem.isdigit():
        return f"image-{int(stem)}.webp"

    clean = re.sub(r"[^a-z0-9]+", "-", stem).strip("-")
    clean = clean.replace("jpg-", "").replace("jpeg-", "")
    return f"{clean}.webp"


def save_webp(source: Path, destination: Path) -> None:
    image = Image.open(source)
    image = ImageOps.exif_transpose(image)

    if image.mode not in {"RGB", "RGBA"}:
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")

    max_edge = 2200
    width, height = image.size
    scale = min(1.0, max_edge / max(width, height))
    if scale < 1:
        image = image.resize((round(width * scale), round(height * scale)), Image.LANCZOS)

    image.save(destination, "WEBP", quality=82, method=6)


def make_transparent_logo() -> None:
    logo_path = PUBLIC / "hhh-black.webp"
    if not logo_path.exists():
        return

    image = Image.open(logo_path).convert("RGBA")
    pixels = []
    for red, green, blue, alpha in image.getdata():
        white_distance = max(255 - red, 255 - green, 255 - blue)
        if red > 242 and green > 242 and blue > 242:
            pixels.append((red, green, blue, 0))
        elif red > 220 and green > 220 and blue > 220:
            fade = max(0, min(255, white_distance * 6))
            pixels.append((red, green, blue, fade))
        else:
            pixels.append((red, green, blue, alpha))

    image.putdata(pixels)
    image.save(logo_path, "WEBP", lossless=True, method=6)


def make_contact_sheet() -> None:
    files = sorted(PUBLIC.glob("*.webp"), key=lambda p: p.name.lower())
    if not files:
        return

    thumb_w, thumb_h = 220, 160
    label_h = 34
    gap = 14
    columns = 4
    rows = (len(files) + columns - 1) // columns

    sheet_w = columns * thumb_w + (columns + 1) * gap
    sheet_h = rows * (thumb_h + label_h) + (rows + 1) * gap
    sheet = Image.new("RGB", (sheet_w, sheet_h), "white")
    draw = ImageDraw.Draw(sheet)

    for index, file in enumerate(files):
        col = index % columns
        row = index // columns
        x = gap + col * (thumb_w + gap)
        y = gap + row * (thumb_h + label_h + gap)

        image = Image.open(file).convert("RGB")
        image.thumbnail((thumb_w, thumb_h), Image.LANCZOS)
        tile = Image.new("RGB", (thumb_w, thumb_h), (248, 244, 236))
        px = x + (thumb_w - image.width) // 2
        py = y + (thumb_h - image.height) // 2
        tile.paste(image, ((thumb_w - image.width) // 2, (thumb_h - image.height) // 2))
        sheet.paste(tile, (x, y))
        draw.text((x, y + thumb_h + 6), file.name[:30], fill=(28, 50, 64))

    SHEET_PATH.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(SHEET_PATH, "JPEG", quality=88)


def main() -> None:
    sources = [file for file in sorted(PUBLIC.iterdir()) if file.suffix.lower() in IMAGE_EXTS]
    ARCHIVE.mkdir(parents=True, exist_ok=True)

    converted = []
    for source in sources:
        destination = PUBLIC / output_name(source)
        save_webp(source, destination)
        shutil.move(str(source), str(ARCHIVE / source.name))
        converted.append((source.name, destination.name, destination.stat().st_size))

    make_transparent_logo()
    make_contact_sheet()

    print(f"converted={len(converted)}")
    for src, dst, size in converted:
        print(f"{src} -> {dst} ({size} bytes)")
    print(f"archive={ARCHIVE}")
    print(f"contact_sheet={SHEET_PATH}")


if __name__ == "__main__":
    main()
