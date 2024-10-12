import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import {
  Sun,
  Mountain,
  Palmtree,
  Building,
  Sailboat,
  Snowflake,
} from "lucide-react";
import IconSelect from "./IconSelect";
import { VacationTypes } from "../types/vacationPlan";
import SelectSearch from "./SelectSearch";

export default function VacationPlanDestinationStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  const vacationTypes = [
    { type: VacationTypes.Beach, icon: Sun },
    { type: VacationTypes.Mountain, icon: Mountain },
    { type: VacationTypes.Tropical, icon: Palmtree },
    { type: VacationTypes.City, icon: Building },
    { type: VacationTypes.Cruise, icon: Sailboat },
    { type: VacationTypes.Winter, icon: Snowflake },
  ];

  function handleVacationType(type: string) {
    if (type === useVacationPlanStore.vacationPlan.vacationType) {
      type = "";
    }
    useVacationPlanStore.setVacationType(type);
    useVacationPlanStore.setDestination("");
  }

  const inputStyle =
    useVacationPlanStore.vacationPlan.vacationType === ""
      ? "w-full p-3 border border-gray-400 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-main-orange focus:border-transparent transition py-4"
      : " opacity-50 cursor-not-allowed w-full p-3 border border-gray-400 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-main-orange py-4 focus:border-transparent transition";

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-sec-blue">
        Choose Your Vacation Details
      </h2>
      <div className="space-y-4">
        <label className="block text-lg font-medium text-gray-700">
          Specific Destination (optional)
        </label>
        <SelectSearch
          inputStyle={inputStyle}
          onSelect={(country: any) =>
            useVacationPlanStore.setDestination(country)
          }
        />{" "}
      </div>
      <div className="space-y-4">
        <label className="block text-lg font-medium text-gray-700">
          Vacation Type (optional)
        </label>
        <IconSelect
          typeList={vacationTypes}
          selectedType={useVacationPlanStore.vacationPlan.vacationType}
          onSelect={handleVacationType}
        />
      </div>
    </div>
  );
}
