import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";

export default function VacationPlanDatesStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  const inputStyle =
    "w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-main-orange focus:border-transparent transition";

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Select Dates</h2>
      <div className="flex space-x-6">
        <div className="w-1/2 space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            className={inputStyle}
            value={vacationPlan.startDate}
            onChange={(e) =>
              useVacationPlanStore.setDates(
                e.target.value,
                vacationPlan.endDate
              )
            }
          />
        </div>
        <div className="w-1/2 space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            className={inputStyle}
            value={vacationPlan.endDate}
            onChange={(e) =>
              useVacationPlanStore.setDates(
                vacationPlan.startDate,
                e.target.value
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
