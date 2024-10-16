import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { Sun, Palmtree, Building, Sailboat, Rocket, Bike } from "lucide-react";
import IconSelect from "./IconSelect";
import { VacationTypes } from "../types/vacationPlan";
import SelectSearch from "./SelectSearch";
import { cityVacationTypes } from "../config/countriesList";

export default function VacationPlanDestinationStep({
  choiceStep,
}: {
  choiceStep: number;
}) {
  const useVacationPlanStore = useStore(vacationPlanStore);

  const country = useVacationPlanStore.vacationPlan.destination;

  const vacationTypes = [
    { type: VacationTypes.Beach, icon: Sun },
    { type: VacationTypes.Tropical, icon: Palmtree },
    { type: VacationTypes.City, icon: Building },
    { type: VacationTypes.Cruise, icon: Sailboat },
    { type: VacationTypes.Mountain, icon: Rocket },
    { type: VacationTypes.Extreme, icon: Bike },
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
    <div className="space-y-8 p-8 rounded-xl">
      {choiceStep === 1 ? (
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-sec-blue mb-8 text-center">
            Specific Destination
          </h2>
          <SelectSearch
            list={Object.keys(cityVacationTypes)}
            inputStyle={inputStyle}
            onSelect={(country: any) =>
              useVacationPlanStore.setDestination(country)
            }
          />
          {useVacationPlanStore.vacationPlan.destination !== "" && (
            <SelectSearch
              list={cityVacationTypes[country].map(
                (country: any) => country.city
              )}
              inputStyle={inputStyle}
              // onSelect={(country: any) =>
              //   useVacationPlanStore.setDestination(country)
              // }
            />
          )}
        </div>
      ) : (
        <div>
          <label className="block text-md font-medium text-gray-700">
            Vacation Type
          </label>
          <IconSelect
            typeList={vacationTypes}
            selectedType={useVacationPlanStore.vacationPlan.vacationType}
            onSelect={handleVacationType}
          />
        </div>
      )}
    </div>
  );
}
