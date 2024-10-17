import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { useState } from "react";
import CalenderRange from "./CalenderRange";

export default function VacationPlanBudgetStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const [selectedBudget, setSelectedBudget] = useState(
    useVacationPlanStore.vacationPlan.budget || 0
  );

  const budgetOptions = [
    { label: "$1,000 - $2,000", value: 1000 },
    { label: "$2,000 - $5,000", value: 2000 },
    { label: "$5,000 - $10,000", value: 5000 },
    { label: "Above $10,000", value: 10000 },
  ];

  const handleBudgetChange = (value: number) => {
    setSelectedBudget(value);
    useVacationPlanStore.setBudget(value);
  };

  return (
    <div className="space-y-8 p-6 sm:p-8 rounded-xl bg-white ">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-10 text-center">
        Choose Your Travel Dates
      </h2>

      <CalenderRange />

      <h2 className="text-2xl font-extrabold text-gray-800 mt-10 text-center">
        Choose Your Budget
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {budgetOptions.map((option) => (
          <div
            key={option.value}
            className={`cursor-pointer p-6 sm:p-10 rounded-lg border border-gray-300 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ${
              selectedBudget === option.value
                ? "bg-gray-200 border-gray-400"
                : "bg-white"
            }`}
            onClick={() => handleBudgetChange(option.value)}
          >
            <p
              className={`text-lg sm:text-xl font-semibold text-center transition-colors duration-300 ${
                selectedBudget === option.value
                  ? "text-gray-900"
                  : "text-gray-700"
              }`}
            >
              {option.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
