import { create } from "zustand";
import VacationPlan, { AccommodationType } from "../types/vacationPlan";

interface VacationPlanStore {
  vacationPlan: VacationPlan;
  setDestination: (destination: string) => void;
  setDates: (startDate: string, endDate: string) => void;
  setBudget: (budget: number) => void;
  setAccommodationType: (accommodationType: AccommodationType) => void;
  setVacationType: (vacationType: string) => void;
}

export const vacationPlanStore = create<VacationPlanStore>((set) => ({
  vacationPlan: {
    destination: "",
    vacationType: "",
    startDate: "",
    endDate: "",
    budget: 0,

    accommodations: {
      hotels: [],
      totalCost: 0,
      accommodationType: AccommodationType.Family,
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
  setAccommodationType: (accommodationType: AccommodationType) => {
    set((state) => ({
      vacationPlan: {
        ...state.vacationPlan,
        accommodations: {
          ...state.vacationPlan.accommodations,
          accommodationType,
        },
      },
    }));
  },
}));
