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
  Winter = "winter",
}

export enum HotelType {
  Luxury = "luxury",
  Boutique = "boutique",
  Resort = "resort",
  Standard = "standard",
  Camping = "camping",
}

export interface Accommodation {
  accommodationType: AccommodationType;
  hotelType: HotelType;
}

export default interface VacationPlan {
  destination: string;
  startDate: string;
  endDate: string;
  vacationType: string;
  budget: number;
  accommodation: Accommodation;
  activities: string[];
}
