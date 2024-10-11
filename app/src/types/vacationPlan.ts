interface HotelBooking {
  hotelName: string;
  bookingID: string;
  price: number;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  rooms: number;
}

// Interface for Car Rental Details
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

// Interface for the Accommodations Section
interface Accommodations {
  hotels: HotelBooking[];
  totalCost: number;
  details: {
    numberOfGuests: number;
    numberOfRooms: number;
    roomType: string;
  };
}

// Interface for the Flight Preferences
interface FlightPreferences {
  numberOfPassengers: number;
  cabinClass: string;
}

// Interface for the Car Preferences
interface CarPreferences {
  carType: string;
}

// Interface for Transportation Section
interface Transportation {
  flights: {
    bookedFlights: FlightBooking[];
    totalCost: number;
    flightPreferences: FlightPreferences;
  };
  carRentals: {
    bookedCars: CarRental[];
    totalCost: number;
    carPreferences: CarPreferences;
  };
}

export default interface VacationPlan {
  destination: string;
  startDate: string;
  endDate: string;
  vacationType: string;
  budget: number;
  accommodations: Accommodations;
  transportation: Transportation;
  activities: string[];
}
