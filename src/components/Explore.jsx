import ExploreSection from "./ExploreSection";

const HAYAT_CARDS = [
  {
    tag: "Beachfront",
    title: "Hayat Island Beach",
    desc: "Clear coastal water and soft sand within easy reach of the apartment.",
    image: "/beach_hayat.jpeg",
    alt: "Bay Residences pool and sea view on Hayat Island",
  },
  {
    tag: "Resort Living",
    title: "Poolside Leisure",
    desc: "A bright pool setting that helps guests settle into a relaxed coastal rhythm.",
    image: "/image-7.webp",
    alt: "Bay Residences pool and apartment towers",
    delay: 1,
  },
  {
    tag: "Amenities",
    title: "Sea-View Fitness",
    desc: "On-site fitness facilities support longer, more comfortable guest stays.",
    image: "/image-5.webp",
    alt: "Bay Residences balcony with sea view",
    delay: 2,
  },
  {
    tag: "Apartment Comfort",
    title: "Bright Living Spaces",
    desc: "Light interiors, sea views, and practical layouts designed for repeatable guest satisfaction.",
    image: "/image-12.webp",
    alt: "Bay Residences apartment living room and dining area",
    delay: 3,
  },
];

export default function Explore() {
  return (
    <ExploreSection
      id="explore"
      label="Explore"
      title="The Hayat Island Advantage"
      subtitle="Real coastal amenities, beach access, and apartment comfort give every HHH stay a stronger guest story."
      cards={HAYAT_CARDS}
    />
  );
}
