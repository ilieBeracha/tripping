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
          <span className="font-semibold">Destination:</span>{" "}
          {vacationPlan.destination}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Dates:</span> {vacationPlan.startDate}{" "}
          - {vacationPlan.endDate}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Guests:</span>{" "}
          {vacationPlan.accommodations.details.numberOfGuests}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Rooms:</span>{" "}
          {vacationPlan.accommodations.details.numberOfRooms}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Room Type:</span>{" "}
          {vacationPlan.accommodations.details.roomType}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Flight Cabin:</span>{" "}
          {vacationPlan.transportation.flights.flightPreferences.cabinClass}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Passengers:</span>{" "}
          {
            vacationPlan.transportation.flights.flightPreferences
              .numberOfPassengers
          }
        </p>
      </div>
    </div>
  );
}
