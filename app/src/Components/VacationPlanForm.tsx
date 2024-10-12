import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VacationPlanStepper from "./VacationPlanStepper";
import VacationPlanDestinationStep from "./VacationPlanDestinationStep";
import VacationPlanDatesStep from "./VacationPlanDatesStep";
import VacationPlanAccommodationsStep from "./VacationPlanAccommodationsStep";
import VacationPlanBudgetStep from "./VacationPlanBudgetStep";
import VacationPlanSummaryStep from "./VacationPlanSummaryStep";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";

export default function VacationPlanForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const store = useStore(vacationPlanStore);

  const steps = ["Destination", "Accommodations", "Dates", "Budget", "Summary"];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Vacation Plan Submitted");
      console.log(store.vacationPlan);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div
      className="w-full mx-auto flex flex-col h-full"
      style={{ maxWidth: "100%", minHeight: "65vh" }}
    >
      <VacationPlanStepper steps={steps} currentStep={currentStep} />

      <div className="bg-white px-10 rounded-lg flex flex-col justify-between flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && <VacationPlanDestinationStep />}
            {currentStep === 2 && <VacationPlanAccommodationsStep />}
            {currentStep === 3 && <VacationPlanDatesStep />}
            {currentStep === 4 && <VacationPlanBudgetStep />}
            {currentStep === 5 && <VacationPlanSummaryStep />}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-between">
          <motion.button
            className={`py-3 px-8 rounded-lg text-white bg-sec-blue ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevious}
            disabled={currentStep === 1}
            whileHover={{ scale: currentStep !== 1 ? 1.05 : 1 }}
            whileTap={{ scale: currentStep !== 1 ? 0.95 : 1 }}
          >
            <ChevronLeft className="inline-block mr-2" size={18} />
            Previous
          </motion.button>
          <motion.button
            className="py-3 px-8 rounded-lg text-white bg-main-orange hover:bg-orange-600 transition-colors"
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
            <ChevronRight className="inline-block ml-2" size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
