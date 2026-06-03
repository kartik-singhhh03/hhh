/**
 * Curated local assets keyed by Lodgify property ID.
 * Images and static page sections stay local; metadata comes from the API.
 */

export const LODGIFY_PROPERTY_IDS = {
  HAYAT: 761286,
  MARJAN: 796112,
};

/** @type {Record<number, import('./mergeProperties.mjs').StaticPropertyAssets>} */
export const staticPropertyAssetsByLodgifyId = {
  [LODGIFY_PROPERTY_IDS.HAYAT]: {
    badge: "Sea View · Hayat Island",
    badgeDisplay: "SEA VIEW • HAYAT ISLAND",
    displayArea: "Hayat",
    displayResidence: "Bay Residences",
    displayTitleLine1: "1 Bedroom Apartment",
    displayTitleLine2: "Bay Residences, Hayat Island",
    image: "/image-3.webp",
    guests: "3",
    bedrooms: "1",
    beds: "2",
    bathrooms: "1",
    area: "850 ft²",
    slug: "hayat-island-sea-view",
    fullData: {
      images: [
        "/image-1.webp",
        "/image-2.webp",
        "/image-5.webp",
        "/image-7.webp",
        "/image-3.webp",
        "/image-4.webp",
        "/image-6.webp",
      ],
      amenities: {
        poolSpa: ["Swimming Pool"],
        locationFeatures: ["Beachfront", "Waterfront"],
        bathroom: [
          "Bed Linen",
          "Bidet",
          "Blow Dryer",
          "Essentials",
          "Iron",
          "Shower",
          "Towels",
          "Washing Machine",
        ],
        heatingCooling: ["Air Conditioning"],
        entertainment: ["TV"],
        internet: ["Wireless Broadband Internet"],
        kitchen: [
          "Coffee Machine",
          "Cooking Utensils",
          "Dishwasher",
          "Kitchen Stove",
          "Kitchenette",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Toaster",
        ],
        safety: [
          "Carbon Monoxide Detector",
          "Fire Extinguisher",
          "First Aid Kit",
          "Safe",
          "Smoke Detector",
        ],
        policies: ["Elevator", "Smoking Not Allowed"],
        parking: ["Parking", "Parking Included"],
      },
      guestAccess:
        "Guests can access the entire apartment including the bedroom, bathroom, kitchen, living area, and private balcony. The building provides secure parking, a fitness centre, swimming pool, and 24/7 security for all guests.",
      houseRules: {
        checkIn: "3:00 PM",
        checkOut: "11:00 AM",
        noPets: true,
        noSmoking: true,
        smokingNote:
          "Smoking is permitted on the balcony only. Smoking inside the apartment will incur a violation fee of AED 1,500.",
        additionalRules: [
          "No parties or events",
          "Quiet hours between 10 PM – 8 AM",
          "Maximum 3 guests at any time",
          "Lost access card will incur a fee of AED 1,000",
          "Baby cot available at AED 100/night (request in advance)",
          "Extra bed available at AED 150/night (request in advance)",
          "Please keep the property clean and tidy",
          "Report any damages before checkout",
        ],
      },
      policyNotes: {
        payment:
          "50% of the total amount is due at reservation. The remaining 50% is due 7 days before arrival.",
        cancellation:
          "This reservation is non-refundable. Cancellations will not be eligible for a refund.",
        securityDeposit: "No security deposit is required for this property.",
      },
      location: {
        mapCode: "MPPM+R8 Al Jazeera Al Hamra, Ras Al Khaimah",
      },
      host: {
        name: "Holiday Home Host",
        email: "reservations@holidayhomehost.ae",
        phone: "+971501522647",
        website: "holidayhomehost.ae",
      },
      reviews: [
        {
          id: "r1",
          reviewer: "Chadi Abu Samra",
          initials: "CA",
          rating: 5,
          title: "Wonderful guest experience",
          stayType: "Single traveller",
          duration: "15 nights",
          date: "March 2026",
          text: "An absolutely wonderful stay at this beautiful apartment on Hayat Island. The sea view from the balcony is breathtaking — I had my morning coffee watching the sunrise over the water every day. The apartment was immaculately clean, well-equipped, and exactly as described. The beach access and pool were an added luxury. Highly recommend to anyone looking for a premium coastal escape in Ras Al Khaimah.",
        },
      ],
    },
  },
  [LODGIFY_PROPERTY_IDS.MARJAN]: {
    badge: "Sea View · Al Marjan Island",
    badgeDisplay: "SEA VIEW • AL MARJAN ISLAND",
    displayArea: "Marjan",
    displayResidence: "Pacific Residences",
    displayTitleLine1: "2 Bedroom Apartment",
    displayTitleLine2: "Pacific, Al Marjan Island",
    image: "/pacific-apt-16.webp",
    guests: "5",
    bedrooms: "2",
    beds: "3",
    bathrooms: "3",
    area: "1,200 ft²",
    slug: "pacific-marjan-island-sea-view",
    fullData: {
      images: [
        "/pacific-apt-2.webp",
        "/pacific-apt-4.webp",
        "/pacific-apt-1.webp",
        "/pacific-apt-3.webp",
        "/pacific-apt-6.webp",
        "/pacific-apt-14.webp",
        "/pacific-apt-9.webp",
        "/pacific-apt-10.webp",
        "/pacific-apt-11.webp",
        "/pacific-apt-18.webp",
      ],
      amenities: {
        poolSpa: ["Swimming Pool", "Direct Beach Access", "Beachfront Resort"],
        kitchen: [
          "Fully Equipped Kitchen",
          "Dishwasher",
          "Coffee Maker",
          "Microwave",
          "Refrigerator",
          "Washing Machine",
        ],
        bathroom: [
          "3 Full Bathrooms",
          "Hair Dryer",
          "Hot Water",
          "Luxury Toiletries",
          "Towels Provided",
        ],
        entertainment: [
          "Smart TV",
          "Streaming Services",
          "Sea View Balcony",
          "Shared Tennis Court",
        ],
        internet: ["Free WiFi", "High Speed Internet"],
        safety: ["24/7 Security", "CCTV", "Smoke Detector", "Fire Extinguisher"],
        policies: ["No Pets", "No Smoking", "No Parties"],
        parking: ["Complimentary Covered Parking"],
      },
      guestAccess:
        "Guests have full access to the entire apartment, all three bathrooms, both bedrooms, and the private balcony. The property includes complimentary access to the Pacific building's swimming pools, direct beach, fitness room, and shared tennis court. Secure covered parking for one vehicle is included.",
      houseRules: {
        checkIn: "3:00 PM",
        checkOut: "11:00 AM",
        noPets: true,
        noSmoking: true,
        additionalRules: [
          "No parties or events",
          "Quiet hours between 10 PM – 8 AM",
          "Maximum 5 guests at any time",
          "Please keep the property clean and tidy",
          "Report any damages before checkout",
          "No outdoor furniture rearrangement without permission",
        ],
      },
      location: {
        mapCode: "MPPM+R8 Al Jazeera Al Hamra, Ras Al Khaimah",
      },
      host: {
        name: "Holiday Home Host",
        email: "reservations@holidayhomehost.ae",
        phone: "+971501522647",
        website: "holidayhomehost.ae",
      },
      showAdvantage: true,
    },
  },
};

/** Slug → Lodgify ID for legacy /properties/:slug routes */
export const slugToLodgifyId = Object.fromEntries(
  Object.entries(staticPropertyAssetsByLodgifyId).map(([id, assets]) => [
    assets.slug,
    Number(id),
  ]),
);
