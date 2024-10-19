import { create } from "zustand";
import VacationPlan, {
  AccommodationType,
  HotelType,
} from "../types/vacationPlan";

interface VacationPlanStore {
  vacationPlan: VacationPlan;
  setCountry: (country: string) => void;
  setCity: (city: string) => void;
  setDateRange: (dateRange: { startDate: Date; endDate: Date }) => void;
  setIsFlexible: (isFlexible: boolean) => void;
  setFlexibilityType: (
    flexibilityType: "dateRange" | "totallyFlexible" | null
  ) => void;
  setOptimizationType: (
    optimizationType: "bestDeal" | "lowestPrice" | null
  ) => void;
  setPreferredTotalDays: (preferredTotalDays: number | null) => void;
  setBudget: (budget: number) => void;
  setAccommodationType: (accommodationType: AccommodationType) => void;
  setVacationType: (vacationType: string) => void;
  setHotelType: (HotelType: HotelType) => void;
}

export const vacationPlanStore = create<VacationPlanStore>((set) => ({
  vacationPlan: {
    destination: {
      country: "",
      city: "",
    },
    vacationType: "",
    budget: 0,
    dates: {
      startDate: new Date(),
      endDate: new Date(),
      flexibility: {
        isFlexible: false,
        flexibilityType: null,
        optimizationType: null,
        preferredTotalDays: null,
      },
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
      vacationPlan: {
        ...state.vacationPlan,
        destination: {
          country,
          city: vacationPlanStore.getState().vacationPlan.destination.city,
        },
      },
    }));
  },
  setCity: (city: string) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        destination: {
          country:
            vacationPlanStore.getState().vacationPlan.destination.country,
          city,
        },
      },
    }));
  },
  setVacationType: (vacationType: string) => {
    set((state: any) => ({
      vacationPlan: { ...state.vacationPlan, vacationType },
    }));
  },
  setIsFlexible: (isFlexible: boolean) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        dates: {
          ...state.vacationPlan.dates,
          flexibility: {
            ...state.vacationPlan.dates.flexibility,
            isFlexible,
          },
        },
      },
    }));
  },

  setFlexibilityType: (
    flexibilityType: "dateRange" | "totallyFlexible" | null
  ) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        dates: {
          ...state.vacationPlan.dates,
          flexibility: {
            ...state.vacationPlan.dates.flexibility,
            flexibilityType,
          },
        },
      },
    }));
  },

  setOptimizationType: (
    optimizationType: "bestDeal" | "lowestPrice" | null
  ) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        dates: {
          ...state.vacationPlan.dates,
          flexibility: {
            ...state.vacationPlan.dates.flexibility,
            optimizationType,
          },
        },
      },
    }));
  },

  setPreferredTotalDays: (preferredTotalDays: number | null) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        dates: {
          ...state.vacationPlan.dates,
          flexibility: {
            ...state.vacationPlan.dates.flexibility,
            preferredTotalDays,
          },
        },
      },
    }));
  },

  setDateRange: (dateRange: { startDate: Date; endDate: Date }) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        dates: {
          ...state.vacationPlan.dates,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
        },
      },
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
