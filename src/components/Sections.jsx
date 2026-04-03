import Marquee from './Marquee';
import Trust from './Trust';
import Property from './Property';
import Experience from './Experience';
import Amenities from './Amenities';
import Gallery from './Gallery';
import Explore from './Explore';
import Reviews from './Reviews';
import OwnerCta from './OwnerCta';
import Contact from './Contact';
import LodgifySearchBar from './LodgifySearchBar';
import LodgifyBookingBox from './LodgifyBookingBox';

/*
  Page flow (per client brief: "Booking should be first"):

  Hero                   ← App.jsx
  ↓
  LodgifySearchBar       ← TOP PRIORITY — find dates instantly
  ↓
  LodgifyBookingBox      ← Instant booking widget
  ↓
  Marquee strip
  ↓
  Trust signals
  ↓
  … rest of content
*/

export default function Sections() {
  return (
    <>
      {/* ── BOOKING FIRST (client requirement) ── */}
      <LodgifySearchBar />
      <LodgifyBookingBox />

      {/* ── REST OF HOME PAGE ── */}
      <Marquee />
      <Trust />
      <Property />
      <Experience />
      <Amenities />
      <Gallery />
      <Explore />
      <Reviews />
      <OwnerCta />
      <Contact />
    </>
  );
}
