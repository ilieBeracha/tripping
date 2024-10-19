import { create } from "zustand";
import VacationPlan, {
  AccommodationType,
  HotelType,
  SpendingPriority,
} from "../types/vacationPlan";

interface VacationPlanStore {
  vacationPlan: VacationPlan;
  setCountry: (country: string) => void;
  setCity: (city: string) => void;
  setDateRange: (dateRange: { startDate: Date; endDate: Date }) => void;
  setDatesIsFlexible: (isFlexible: boolean) => void;
  setDatesFlexibilityType: (
    flexibilityType: "dateRange" | "totallyFlexible" | null
  ) => void;
  setDatesPreferredTotalDays: (preferredTotalDays: number | null) => void;
  setBudgetAmount: (budget: number) => void;
  setAccommodationType: (accommodationType: AccommodationType) => void;
  setVacationType: (vacationType: string) => void;
  setHotelType: (HotelType: HotelType) => void;
  setBudgetSpendingPriority: (spendingPriority: SpendingPriority) => void;
  setBudgetIsFlexible: (isFlexible: boolean) => void;
}

export const vacationPlanStore = create<VacationPlanStore>((set) => ({
  vacationPlan: {
    destination: {
      country: "",
      city: "",
    },
    vacationType: "",
    budget: {
      amount: 0,
      isFlexible: false,
      spendingPriority: null,
    },
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
  setDatesIsFlexible: (isFlexible: boolean) => {
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

  setDatesFlexibilityType: (
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

  setDatesPreferredTotalDays: (preferredTotalDays: number | null) => {
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

  setBudgetAmount: (budget: number) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        budget: { ...state.vacationPlan.budget, amount: budget },
      },
    }));
  },
  setBudgetSpendingPriority: (spendingPriority: SpendingPriority) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        budget: {
          ...state.vacationPlan.budget,
          spendingPriority: spendingPriority,
        },
      },
    }));
  },
  setBudgetIsFlexible: (isFlexible: boolean) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        budget: {
          ...state.vacationPlan.budget,
          isFlexible: isFlexible,
        },
      },
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
