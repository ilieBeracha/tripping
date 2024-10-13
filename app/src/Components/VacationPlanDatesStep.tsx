import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO, format, isBefore, isAfter, isToday } from "date-fns";
import { useState } from "react";

export default function VacationPlanDatesStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  const [error, setError] = useState("");

  const formatDate = (date: Date | null) => {
    return date ? format(date, "yyyy-MM-dd") : "";
  };

  const isValidDateSelection = (
    startDate: Date | null,
    endDate: Date | null
  ) => {
    const today = new Date();

    if (startDate && isBefore(startDate, today) && !isToday(startDate)) {
      return "Start date cannot be in the past.";
    }

    if (endDate && isBefore(endDate, today) && !isToday(endDate)) {
      return "End date cannot be in the past.";
    }

    if (startDate && endDate && isAfter(startDate, endDate)) {
      return "End date cannot be before the start date.";
    }

    return "";
  };

  const handleStartDateChange = (date: Date | null) => {
    const formattedStartDate = formatDate(date);
    const validationError = isValidDateSelection(
      date,
      vacationPlan.endDate ? parseISO(vacationPlan.endDate) : null
    );

    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      useVacationPlanStore.setDates(formattedStartDate, vacationPlan.endDate);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    const formattedEndDate = formatDate(date);
    const validationError = isValidDateSelection(
      vacationPlan.startDate ? parseISO(vacationPlan.startDate) : null,
      date
    );

    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      useVacationPlanStore.setDates(vacationPlan.startDate, formattedEndDate);
    }
  };

  return (
    <div className="space-y-8 p-8 rounded-xl">
      <h2 className="text-2xl font-extrabold text-sec-blue mb-8 text-center">
        Choose Your Travel Dates
      </h2>

      {error && (
        <div className="text-red-500 text-center font-semibold mb-4">
          {error}
        </div>
      )}

      <div className="flex justify-center space-x-12 items-start">
        <div className="flex flex-col items-center">
          <label className="block text-xl font-semibold text-gray-800 mb-4">
            Start Date
          </label>
          <div className="bg-white p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105">
            <DatePicker
              selected={
                vacationPlan.startDate ? parseISO(vacationPlan.startDate) : null
              }
              onChange={handleStartDateChange}
              minDate={new Date()}
              inline
              calendarClassName="custom-datepicker"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <label className="block text-xl font-semibold text-gray-800 mb-4">
            End Date
          </label>
          <div className="bg-white p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105">
            <DatePicker
              selected={
                vacationPlan.endDate ? parseISO(vacationPlan.endDate) : null
              }
              onChange={handleEndDateChange}
              minDate={
                vacationPlan.startDate
                  ? parseISO(vacationPlan.startDate)
                  : new Date()
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
