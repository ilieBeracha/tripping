import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { useState } from "react";

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
    <div className="space-y-8 p-6 sm:p-8 rounded-xl bg-white">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center">
        Choose Your Budget
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {budgetOptions.map((option) => (
          <div
            key={option.value}
            className={`cursor-pointer p-6 sm:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${
              selectedBudget === option.value
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleBudgetChange(option.value)}
          >
            <p
              className={`text-lg sm:text-xl font-semibold text-center transition-colors duration-300 ${
                selectedBudget === option.value ? "text-white" : "text-gray-800"
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
