import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";

export default function VacationPlanDatesStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  return (
    <div className="space-y-8 px-4 py-10">
      <h2 className="text-4xl font-extrabold text-sec-blue mb-8 text-center">
        Choose Your Travel Dates
      </h2>

      <div className="flex justify-center space-x-12 items-start">
        {/* Start Date Picker */}
        <div className="flex flex-col items-center">
          <label className="block text-xl font-semibold text-gray-800 mb-4">
            Start Date
          </label>
          <div className="bg-white p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105">
            <DatePicker
              selected={
                vacationPlan.startDate ? parseISO(vacationPlan.startDate) : null
              }
              onChange={(date) =>
                useVacationPlanStore.setDates(
                  date ? date.toISOString().split("T")[0] : "",
                  vacationPlan.endDate
                )
              }
              inline
              calendarClassName="custom-datepicker"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>

        {/* End Date Picker */}
        <div className="flex flex-col items-center">
          <label className="block text-xl font-semibold text-gray-800 mb-4">
            End Date
          </label>
          <div className="bg-white p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105">
            <DatePicker
              selected={
                vacationPlan.endDate ? parseISO(vacationPlan.endDate) : null
              }
              onChange={(date) =>
                useVacationPlanStore.setDates(
                  vacationPlan.startDate,
                  date ? date.toISOString().split("T")[0] : ""
                )
              }
              inline
              calendarClassName="custom-datepicker"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
