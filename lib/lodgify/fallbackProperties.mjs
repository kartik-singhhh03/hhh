import { mergeLodgifyProperties } from "./mergeProperties.mjs";

/** Static fallback payload shaped like verified Lodgify API items */
const FALLBACK_LODGIFY_ITEMS = [
  {
    id: 761286,
    name: "HHH – 1 Bedroom in Hayat Island – MINA – Sea View",
    internal_name: "T2-FLAT 202",
    description:
      "Luxury 1BR apartment in the newly completed Bay Residences (2026) on Hayat Island, Mina Al Arab. Prime beachfront location with private beach access, infinity pools, and a sea-view balcony offering a five-star resort atmosphere.",
    latitude: 25.7243682624185,
    longitude: 55.844211631226,
    address: "Bay residence, Hayat Island, Mina Al Arab, RAK",
    city: "Al Riffa",
    state: "Ras al Khaimah",
    country: "United Arab Emirates",
    image_url: "/image-3.webp",
    rating: 5,
    min_price: 650,
    max_price: 650,
    currency_code: "AED",
    rooms: [{ id: 828417, name: "HHH - 1 Bedroom in Hayat Island - MINA - Sea View" }],
    is_active: true,
  },
  {
    id: 796112,
    name: "HHH – 2 BR in Pacific – Marjan Island – Sea View",
    internal_name: "Pacific E-308",
    description:
      "Luxury 2-bedroom apartment in Pacific, Al Marjan Island with direct beach access, swimming pools, and private balcony overlooking serene sea views. Ideal for families and groups seeking a premium coastal stay.",
    address: "Pacific Residence Marjan",
    city: "Ras Al-Khaimah",
    country: "United Arab Emirates",
    image_url: "/pacific-apt-16.webp",
    rating: 0,
    min_price: 850,
    max_price: 850,
    currency_code: "AED",
    rooms: [{ id: 0, name: "HHH - 2 BR in Pacific - Marjan Island - Sea View" }],
    is_active: true,
  },
];

export function getFallbackProperties() {
  return mergeLodgifyProperties(FALLBACK_LODGIFY_ITEMS);
}
