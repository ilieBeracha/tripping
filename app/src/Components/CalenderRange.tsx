import Datepicker from "react-tailwindcss-datepicker";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { useStore } from "zustand";

export default function CalenderRange() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const dates = useVacationPlanStore.vacationPlan.dates;

  return (
    <>
      <Datepicker
        displayFormat="DD/MM/YYYY"
        value={dates}
        onChange={(newValue: any) =>
          useVacationPlanStore.setDateRange(newValue)
        }
      />
    </>
  );
}
