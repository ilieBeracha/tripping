import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";

export default function VacationPlanSummaryStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Summary</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-black">
        <p className="text-lg">
          {vacationPlan.vacationType ? (
            <>
              <span className="font-semibold">Vacation Type: </span>
              {vacationPlan.vacationType}
            </>
          ) : (
            <>
              <span className="font-semibold">Destination: </span>
              {vacationPlan.destination}
            </>
          )}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Dates: </span>{" "}
          {vacationPlan.startDate} - {vacationPlan.endDate}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Accommodation Type: </span>
          {vacationPlan.accommodations.accommodationType}
        </p>
      </div>
    </div>
  );
}
