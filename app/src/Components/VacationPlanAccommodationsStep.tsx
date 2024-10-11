import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";

export default function VacationPlanAccommodationsStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  const inputStyle =
    "w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-main-orange focus:border-transparent transition";

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Accommodations</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Guests
          </label>
          <input
            type="number"
            className={inputStyle}
            value={vacationPlan.accommodations.details.numberOfGuests}
            onChange={(e) =>
              useVacationPlanStore.setHotelDetails(
                Number(e.target.value),
                vacationPlan.accommodations.details.numberOfRooms,
                vacationPlan.accommodations.details.roomType
              )
            }
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Rooms
          </label>
          <input
            type="number"
            className={inputStyle}
            value={vacationPlan.accommodations.details.numberOfRooms}
            onChange={(e) =>
              useVacationPlanStore.setHotelDetails(
                vacationPlan.accommodations.details.numberOfGuests,
                Number(e.target.value),
                vacationPlan.accommodations.details.roomType
              )
            }
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Room Type
          </label>
          <select
            className={inputStyle}
            value={vacationPlan.accommodations.details.roomType}
            onChange={(e) =>
              useVacationPlanStore.setHotelDetails(
                vacationPlan.accommodations.details.numberOfGuests,
                vacationPlan.accommodations.details.numberOfRooms,
                e.target.value
              )
            }
          >
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
      </div>
    </div>
  );
}
