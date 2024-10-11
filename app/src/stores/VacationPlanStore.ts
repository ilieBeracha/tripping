import { create } from "zustand";
import VacationPlan from "../types/vacationPlan";

// Zustand Store Interface
interface VacationPlanStore {
  vacationPlan: VacationPlan;
  setDestination: (destination: string) => void;
  setDates: (startDate: string, endDate: string) => void;
  setBudget: (budget: number) => void;
  setHotelDetails: (guests: number, rooms: number, roomType: string) => void;
  setFlightPreferences: (passengers: number, cabinClass: string) => void;
  setCarPreferences: (carType: string) => void;
  setVacationType: (vacationType: string) => void;
}

export const vacationPlanStore = create<VacationPlanStore>((set) => ({
  vacationPlan: {
    destination: "",
    vacationType: "",
    startDate: "",
    endDate: "",
    budget: 0,

    // Accommodations Section
    accommodations: {
      hotels: [], // Array to hold booked hotels
      totalCost: 0,
      details: {
        numberOfGuests: 1,
        numberOfRooms: 1,
        roomType: "Standard",
      },
    },

    // Transportation Section
    transportation: {
      flights: {
        bookedFlights: [], // Array to hold booked flights
        totalCost: 0,
        flightPreferences: {
          numberOfPassengers: 1,
          cabinClass: "Economy", // Economy, Business, First Class, etc.
        },
      },
      carRentals: {
        bookedCars: [], // Array to hold rented cars
        totalCost: 0,
        carPreferences: {
          carType: "Standard", // Economy, SUV, Luxury, etc.
        },
      },
    },
    activities: [],
  },
  setVacationPlan: (newVacationPlan: VacationPlan) =>
    set(() => ({ vacationPlan: newVacationPlan })),

  setDestination: (destination: string) => {
    set((state) => ({
      vacationPlan: { ...state.vacationPlan, destination },
    }));
  },
  setVacationType: (vacationType: string) => {
    set((state: any) => ({
      vacationPlan: { ...state.vacationPlan, vacationType },
    }));
  },
  setDates: (startDate: string, endDate: string) => {
    set((state) => ({
      vacationPlan: { ...state.vacationPlan, startDate, endDate },
    }));
  },
  setBudget: (budget: number) => {
    set((state) => ({
      vacationPlan: { ...state.vacationPlan, budget },
    }));
  },
  setHotelDetails: (guests: number, rooms: number, roomType: string) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        accommodations: {
          ...state.vacationPlan.accommodations,
          details: { numberOfGuests: guests, numberOfRooms: rooms, roomType },
        },
      },
    }));
  },
  setFlightPreferences: (passengers: number, cabinClass: string) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        transportation: {
          ...state.vacationPlan.transportation,
          flights: {
            ...state.vacationPlan.transportation.flights,
            flightPreferences: { numberOfPassengers: passengers, cabinClass },
          },
        },
      },
    }));
  },
  setCarPreferences: (carType: string) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        transportation: {
          ...state.vacationPlan.transportation,
          carRentals: {
            ...state.vacationPlan.transportation.carRentals,
            carPreferences: { carType },
          },
        },
      },
    }));
  },
}));
