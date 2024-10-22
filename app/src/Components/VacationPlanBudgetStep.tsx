import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { useState } from "react";

export default function VacationPlanBudgetStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const [selectedBudget, setSelectedBudget] = useState(
    useVacationPlanStore.vacationPlan.budget.amount || 0
  );
  const [isBudgetFlexible, setIsBudgetFlexible] = useState(false);
  const [spendingPriority, setSpendingPriority] = useState<string | null>(null);

  const budgetOptions = [
    { label: "$1,000 - $2,000", value: 1000 },
    { label: "$2,000 - $5,000", value: 2000 },
    { label: "$5,000 - $10,000", value: 5000 },
    { label: "Above $10,000", value: 10000 },
  ];

  const spendingPriorities = [
    { label: "Accommodation", value: "accommodation" },
    { label: "Food & Dining", value: "food" },
    { label: "Activities", value: "activities" },
    { label: "Transportation", value: "transportation" },
    { label: "Shopping", value: "shopping" },
  ];

  const handleBudgetChange = (value: number) => {
    setSelectedBudget(value);
    useVacationPlanStore.setBudgetAmount(value);
  };

  const handlePriorityChange = (e: any) => {
    const selectedPriority = e.target.value;
    setSpendingPriority(selectedPriority);
    useVacationPlanStore.setBudgetSpendingPriority(selectedPriority);
  };

  const handleBudgetFlexibilityChange = (e: any) => {
    const flexible = e.target.value === "yes";
    setIsBudgetFlexible(flexible);
    useVacationPlanStore.setBudgetIsFlexible(flexible);
  };

  return (
    <div className="space-y-8 p-10 rounded-3xl">
      <h2 className="text-3xl font-extrabold text-gray-800">
        Choose Your Budget
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {budgetOptions.map((option) => (
          <div
            key={option.value}
            className={`cursor-pointer p-6 sm:p-10 rounded-lg border border-gray-300 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ${
              selectedBudget === option.value
                ? "bg-main-orange border-gray-400"
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

      {/* Budget Flexibility */}
      <div className="mt-6">
        <p className="mb-4 text-lg font-semibold text-gray-700">
          Are you flexible on the budget?
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="budgetFlexibility"
              value="yes"
              checked={isBudgetFlexible}
              onChange={handleBudgetFlexibilityChange}
              className="form-radio h-5 w-5 text-main-orange focus:ring-main-orange"
            />
            <span className="text-md font-medium text-gray-700">Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="budgetFlexibility"
              value="no"
              checked={!isBudgetFlexible}
              onChange={handleBudgetFlexibilityChange}
              className="form-radio h-5 w-5 text-main-orange focus:ring-main-orange"
            />
            <span className="text-md font-medium text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Spending Priorities */}
      <div className="mt-6">
        <p className="mb-4 text-lg font-semibold text-gray-700">
          What do you want to spend the most on?
        </p>
        <select
          value={spendingPriority || ""}
          onChange={handlePriorityChange}
          className="form-select w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 focus:ring-main-orange focus:border-main-orange transition-all"
        >
          <option value="" disabled>
            Select your priority
          </option>
          {spendingPriorities.map((priority) => (
            <option key={priority.value} value={priority.value}>
              {priority.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
