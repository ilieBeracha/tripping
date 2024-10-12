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
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Choose Your Budget</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgetOptions.map((option) => (
          <div
            key={option.value}
            className={`cursor-pointer p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
              selectedBudget === option.value
                ? "bg-main-orange text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => handleBudgetChange(option.value)}
          >
            <p className="text-lg font-semibold">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
