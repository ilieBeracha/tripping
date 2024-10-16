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

export default interface VacationPlan {
  destination: string;
  startDate: string;
  endDate: string;
  vacationType: string;
  budget: number;
  accommodation: Accommodation;
  activities: string[];
}
