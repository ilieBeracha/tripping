interface HotelBooking {
  hotelName: string;
  bookingID: string;
  price: number;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  rooms: number;
}

interface Accommodations {
  hotels: HotelBooking[];
  totalCost: number;
  accommodationType: AccommodationType;
}

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

export default interface VacationPlan {
  destination: string;
  startDate: string;
  endDate: string;
  vacationType: string;
  budget: number;
  accommodations: Accommodations;
  activities: string[];
}

interface CarRental {
  carRentalCompany: string;
  rentalID: string;
  carType: string;
  price: number;
  pickUpDate: string;
  dropOffDate: string;
}

// Interface for Flight Booking Details
interface FlightBooking {
  airline: string;
  flightID: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  cabinClass: string;
  price: number;
}
