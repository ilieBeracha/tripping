export enum AccommodationType {
  Family = "family",
  Friends = "friends",
  Couple = "couple",
  Solo = "solo",
}

export enum VacationTypes {
  Beach = "beach",
  Mountain = "mountain",
  Tropical = "tropical",
  City = "city",
  Cruise = "cruise",
  Adventure = "adventure",
  Extreme = "extreme",
}

export enum HotelType {
  Standard = "standard",
  Luxury = "luxury",
  Boutique = "boutique",
  Resort = "resort",
  Camping = "camping",
  Hostel = "hostel",
  Apartment = "apartment",
  UniqueStays = "unique stays",
  FarmStay = "farm_stay",
  Homestay = "homestay",
  Cottage = "cottage",
  Chalet = "chalet",
  Lodge = "lodge",
  CountryHouse = "country house",
  HolidayPark = "holiday park",
  Villa = "villa",
}
export interface Accommodation {
  accommodationType: AccommodationType;
  hotelType: HotelType;
}

export interface DateFlexibility {
  isFlexible: boolean;
  flexibilityType: "dateRange" | "totallyFlexible" | null;
  optimizationType: "bestDeal" | "lowestPrice" | null;
  preferredTotalDays: number | null;
}

export interface Dates {
  startDate: Date | null;
  endDate: Date | null;
  flexibility: DateFlexibility;
}

export interface Destination {
  country: string;
  city: string;
}

export interface Budget {
  amount: number; // The selected budget amount
  isFlexible: boolean; // Indicates if the user is flexible on the budget
  spendingPriority: SpendingPriority | null; // The user's spending priority
}

export enum SpendingPriority {
  Accommodation = "accommodation",
  Food = "food",
  Activities = "activities",
  Transportation = "transportation",
  Shopping = "shopping",
}

export default interface VacationPlan {
  destination: Destination;
  dates: Dates;
  vacationType: string;
  budget: Budget;
  accommodation: Accommodation;
  activities: string[];
}
