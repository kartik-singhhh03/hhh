import ExploreSection from "./ExploreSection";

const MARJAN_CARDS = [
  {
    tag: "Beachfront Living",
    title: "Private Beach Access",
    desc: "Direct access to the beach and waterfront spaces for relaxed mornings and sunset experiences.",
    image: "/pacific-apt-10.webp",
    alt: "Al Marjan Island beachfront and waterfront view",
  },
  {
    tag: "Resort Amenities",
    title: "Poolside Escape",
    desc: "Shared swimming pools and leisure facilities designed for relaxation and resort-style comfort.",
    image: "/pacific-apt-9.webp",
    alt: "Pacific tower swimming pool at Al Marjan Island",
    delay: 1,
  },
  {
    tag: "Fitness & Wellness",
    title: "Sea-View Fitness",
    desc: "Fitness facilities with calming views that help guests stay active while enjoying the surroundings.",
    image: "/pacific-apt-11.webp",
    alt: "Gym with sea view at Pacific, Al Marjan Island",
    delay: 2,
  },
  {
    tag: "Modern Comfort",
    title: "Bright Coastal Interiors",
    desc: "Comfortable living spaces with practical layouts and natural light for a better guest experience.",
    image: "/pacific-apt-13.webp",
    alt: "Bright modern interior of Pacific apartment",
    delay: 3,
  },
  {
    tag: "Location Benefits",
    title: "Prime Island Location",
    desc: "Minutes from Al Hamra Mall, Golf Club, and easy access to RAK Airport and Dubai.",
    image: "/pacific-apt-16.webp",
    alt: "Al Marjan Island aerial view and surroundings",
    delay: 4,
  },
];

export default function MarjanIslandAdvantage() {
  return (
    <ExploreSection
      id="marjan-explore"
      label="Explore"
      title="The Marjan Island Advantage"
      subtitle="Beachfront experiences, premium amenities, and coastal living designed for unforgettable stays."
      cards={MARJAN_CARDS}
    />
  );
}
