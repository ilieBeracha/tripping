import {
  Building,
  Star,
  Gem,
  TreePine,
  Tent,
  Anchor,
  Bed,
  Home,
  Users as People,
  Mountain as Chalet,
  Hotel as Lodge,
  Castle as CountryHouse,
  TreeDeciduous as Park,
  Home as Villa,
  Warehouse as FarmIcon, // Alternative for 'Barn'
} from "lucide-react";
import { HotelType } from "../types/vacationPlan";

export const hotelTypes = [
  {
    type: HotelType.Standard,
    icon: Building,
    description: "Comfortable, mid-range accommodations",
    hotel_type_ids: [204, 205, 218, 231, 202, 219, 207],
  },
  {
    type: HotelType.Luxury,
    icon: Star,
    description: "High-end accommodations with premium amenities",
    hotel_type_ids: [206, 213, 233, 224],
  },
  {
    type: HotelType.Boutique,
    icon: Gem,
    description: "Unique, stylish hotels with personalized service",
    hotel_type_ids: [208, 216, 227, 223, 228, 209],
  },
  {
    type: HotelType.Resort,
    icon: TreePine,
    description: "All-inclusive properties with extensive amenities",
    hotel_type_ids: [206, 212, 233],
  },
  {
    type: HotelType.Camping,
    icon: Tent,
    description: "Outdoor accommodations for nature enthusiasts",
    hotel_type_ids: [214, 224],
  },
  {
    type: HotelType.Hostel,
    icon: Bed,
    description: "Budget accommodations with shared facilities",
    hotel_type_ids: [203],
  },
  {
    type: HotelType.Apartment,
    icon: Home,
    description: "Self-contained units with kitchen facilities",
    hotel_type_ids: [201, 229, 220],
  },
  {
    type: HotelType.UniqueStays,
    icon: Anchor,
    description: "Accommodations offering unique experiences",
    hotel_type_ids: [215, 225, 226, 234],
  },
  {
    type: HotelType.FarmStay,
    icon: FarmIcon, // Using 'Warehouse' as an alternative
    description: "Rural accommodations on working farms",
    hotel_type_ids: [210],
  },
  {
    type: HotelType.Homestay,
    icon: People,
    description: "Accommodations in a local's home",
    hotel_type_ids: [222],
  },
  {
    type: HotelType.Cottage,
    icon: Home,
    description: "Cozy rural accommodations",
    hotel_type_ids: [230],
  },
  {
    type: HotelType.Chalet,
    icon: Chalet,
    description: "Mountain or ski accommodations",
    hotel_type_ids: [228],
  },
  {
    type: HotelType.Lodge,
    icon: Lodge,
    description: "Accommodations in natural settings",
    hotel_type_ids: [221],
  },
  {
    type: HotelType.CountryHouse,
    icon: CountryHouse,
    description: "Large rural houses offering accommodations",
    hotel_type_ids: [223],
  },

  {
    type: HotelType.HolidayPark,
    icon: Park,
    description: "Accommodations in holiday parks",
    hotel_type_ids: [212],
  },
  {
    type: HotelType.Villa,
    icon: Villa,
    description: "Luxury standalone properties",
    hotel_type_ids: [213],
  },
];
