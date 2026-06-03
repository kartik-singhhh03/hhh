"""Recompress existing public WebP assets without changing visible quality."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

# Gallery / property detail max display ~800px; 1600px covers 2x retina.
MAX_EDGE = 1600
QUALITY = 80
MIN_BYTES = 120 * 1024


def optimize(path: Path) -> tuple[int, int, int, int]:
    before = path.stat().st_size
    image = Image.open(path)
    image = ImageOps.exif_transpose(image)

    width, height = image.size
    scale = min(1.0, MAX_EDGE / max(width, height))
    if scale < 1:
        image = image.resize(
            (round(width * scale), round(height * scale)),
            Image.LANCZOS,
        )

    image.save(path, "WEBP", quality=QUALITY, method=6)
    after = path.stat().st_size
    return before, after, image.size[0], image.size[1]


def main() -> None:
    targets = sorted(PUBLIC.glob("*.webp"))
    total_before = 0
    total_after = 0

    for path in targets:
        size = path.stat().st_size
        if size < MIN_BYTES:
            continue

        before, after, width, height = optimize(path)
        total_before += before
        total_after += after
        saved = (before - after) / before * 100
        print(
            f"{path.name}: {before // 1024}KB -> {after // 1024}KB "
            f"({saved:.0f}% saved) {width}x{height}"
        )

    if total_before:
        print(
            f"total: {total_before // 1024}KB -> {total_after // 1024}KB "
            f"({(total_before - total_after) // 1024}KB saved)"
        )


if __name__ == "__main__":
    main()
