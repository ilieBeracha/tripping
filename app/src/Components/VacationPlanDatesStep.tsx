import { useState } from "react";
import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import CalenderRange from "./CalenderRange";
import { Calendar } from "lucide-react";

export default function VacationPlanDatesStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);

  const [isFlexible, setIsFlexible] = useState(false);
  const [flexibilityType, setFlexibilityType] = useState<string | null>(null);
  const [preferredTotalDays, setPreferredTotalDays] = useState<number>(0);

  const handleFlexibilityChange = (e: any) => {
    const flexible = e.target.value === "yes";
    setIsFlexible(flexible);

    if (!flexible) {
      setFlexibilityType(null);
      setPreferredTotalDays(0);
    }

    useVacationPlanStore.setDatesIsFlexible(flexible);
  };

  const handleFlexibilityTypeChange = (e: any) => {
    const selectedType = e.target.value;
    setFlexibilityType(selectedType);
    useVacationPlanStore.setDatesFlexibilityType(selectedType);
  };

  const handlePreferredTotalDaysChange = (e: any) => {
    const days = parseInt(e.target.value);
    setPreferredTotalDays(days);
    useVacationPlanStore.setDatesPreferredTotalDays(days);
  };

  return (
    <div className="space-y-8 p-8 rounded-xl bg-white text-black">
      <h2 className="text-2xl font-bold text-sec-blue flex items-center">
        <Calendar className="mr-2" /> Choose Your Travel Dates
      </h2>

      <div className="space-y-4">
        <div>
          <p className="mb-2">Are your travel dates flexible?</p>
          <div className="space-x-4">
            <div className="inline-flex items-center">
              <input
                name="flexibility"
                onChange={handleFlexibilityChange}
                checked={isFlexible}
                type="radio"
                value="yes"
                className="h-4 w-4 border-gray-300 text-main-orange focus:ring-main-orange"
              />
              <label className="ml-3 block text-sm font-medium leading-6 text-gray-900 checked:bg-black">
                Yes
              </label>
            </div>
            <div className="inline-flex items-center">
              <input
                type="radio"
                name="flexibility"
                value="no"
                checked={!isFlexible}
                onChange={handleFlexibilityChange}
                className="h-4 w-4 border-gray-300 text-main-orange focus:ring-main-orange"
              />
              <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                No
              </label>
            </div>
          </div>
        </div>

        {/* Flexibility Type */}
        {isFlexible && (
          <div className="space-y-4">
            <div>
              <p className="mb-2">What type of flexibility do you prefer?</p>
              <select
                value={flexibilityType || ""}
                onChange={handleFlexibilityTypeChange}
                className="form-select w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 focus:ring-main-orange focus:border-main-orange transition-all"
              >
                <option value="">Select an option</option>
                <option value="dateRange">Flexible within a date range</option>
                <option value="totallyFlexible">Totally flexible</option>
              </select>
            </div>

            {/* Date Range Flexibility */}
            {flexibilityType === "dateRange" && (
              <div className="space-y-4">
                <p>Please select your preferred date range:</p>
                <CalenderRange />

                <div>
                  <p className="mb-2">
                    What's your preferred total number of days?
                  </p>
                  <input
                    type="number"
                    value={preferredTotalDays}
                    onChange={handlePreferredTotalDaysChange}
                    className="form-input w-full"
                    min="1"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Specific Date Selection */}
        {!isFlexible && (
          <div>
            <p>Please select your specific travel dates:</p>
            <CalenderRange />
          </div>
        )}
      </div>
    </div>
  );
}
