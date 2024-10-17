import { create } from "zustand";
import VacationPlan, {
  AccommodationType,
  Dates,
  HotelType,
} from "../types/vacationPlan";

interface VacationPlanStore {
  vacationPlan: VacationPlan;
  setCountry: (country: string) => void;
  setCity: (city: string) => void;
  setDates: (newDateRange: Dates) => void;
  setBudget: (budget: number) => void;
  setAccommodationType: (accommodationType: AccommodationType) => void;
  setVacationType: (vacationType: string) => void;
  setHotelType: (HotelType: HotelType) => void;
}

export const vacationPlanStore = create<VacationPlanStore>((set) => ({
  vacationPlan: {
    country: "",
    city: "",
    vacationType: "",
    budget: 0,
    dates: {
      startDate: new Date(),
      endDate: new Date(),
    },
    accommodation: {
      accommodationType: AccommodationType.Family,
      hotelType: HotelType.Standard,
    },
    activities: [],
  },

  setVacationPlan: (newVacationPlan: VacationPlan) =>
    set(() => ({ vacationPlan: newVacationPlan })),

  setCountry: (country: string) => {
    set((state) => ({
      vacationPlan: { ...state.vacationPlan, country },
    }));
  },
  setCity: (city: string) => {
    set((state) => ({
      vacationPlan: { ...state.vacationPlan, city },
    }));
  },
  setVacationType: (vacationType: string) => {
    set((state: any) => ({
      vacationPlan: { ...state.vacationPlan, vacationType },
    }));
  },
  setDates: (newDateRange: Dates) => {
    const { startDate, endDate } = newDateRange;

    set((state) => ({
      vacationPlan: { ...state.vacationPlan, dates: { startDate, endDate } },
    }));
  },
  setBudget: (budget: number) => {
    set((state) => ({
      vacationPlan: { ...state.vacationPlan, budget },
    }));
  },
  setAccommodationType: (accommodationType: AccommodationType) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        accommodation: {
          ...state.vacationPlan.accommodation,
          accommodationType,
        },
      },
    }));
  },
  setHotelType: (hotelType: HotelType) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        accommodation: {
          ...state.vacationPlan.accommodation,
          hotelType,
        },
      },
    }));
  },
}));
