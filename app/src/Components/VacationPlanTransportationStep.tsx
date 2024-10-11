import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";

export default function VacationPlanTransportationStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  const inputStyle =
    "w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-main-orange focus:border-transparent transition";

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Transportation</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Cabin Class
          </label>
          <select
            className={inputStyle}
            value={
              vacationPlan.transportation.flights.flightPreferences.cabinClass
            }
            onChange={(e) =>
              useVacationPlanStore.setFlightPreferences(
                vacationPlan.transportation.flights.flightPreferences
                  .numberOfPassengers,
                e.target.value
              )
            }
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Passengers
          </label>
          <input
            type="number"
            className={inputStyle}
            value={
              vacationPlan.transportation.flights.flightPreferences
                .numberOfPassengers
            }
            onChange={(e) =>
              useVacationPlanStore.setFlightPreferences(
                Number(e.target.value),
                vacationPlan.transportation.flights.flightPreferences.cabinClass
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
