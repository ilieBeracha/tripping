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
import { motion } from "framer-motion";

export default function VacationPlanDestinationStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  const vacationTypes = [
    { type: "Beach", icon: Sun },
    { type: "Mountain", icon: Mountain },
    { type: "Tropical", icon: Palmtree },
    { type: "City", icon: Building },
    { type: "Cruise", icon: Sailboat },
    { type: "Winter", icon: Snowflake },
  ];

  function handleVacationType(type: string) {
    if (type === useVacationPlanStore.vacationPlan.vacationType) {
      type = "";
    }
    useVacationPlanStore.setVacationType(type);
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
        <input
          type="text"
          disabled={useVacationPlanStore.vacationPlan.vacationType !== ""}
          placeholder="Enter destination"
          className={inputStyle}
          value={vacationPlan.destination}
          onChange={(e) => useVacationPlanStore.setDestination(e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <label className="block text-lg font-medium text-gray-700">
          Vacation Type (optional)
        </label>
        <div className="grid grid-cols-3 gap-4">
          {vacationTypes.map((vacationType) => (
            <motion.div
              key={vacationType.type}
              className={`p-4 border rounded-lg cursor-pointer ${
                useVacationPlanStore.vacationPlan.vacationType ===
                vacationType.type
                  ? "border-main-orange bg-orange-50"
                  : "border-gray-400 hover:border-main-orange"
              }`}
              onClick={() => {
                handleVacationType(vacationType.type);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <vacationType.icon className="w-8 h-8 text-main-orange" />
                <span className="text-center font-medium text-black">
                  {vacationType.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
