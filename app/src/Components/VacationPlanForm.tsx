import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VacationPlanStepper from "./VacationPlanStepper";
import VacationPlanChoiceStep from "./VacationPlanChoiceStep"; // New step component
import VacationPlanDestinationStep from "./VacationPlanDestinationStep";
import VacationPlanAccommodationsStep from "./VacationPlanAccommodationsStep";
import VacationPlanGeneralInfoStep from "./VacationPlanGeneralInfoStep";
import VacationPlanSummaryStep from "./VacationPlanSummaryStep";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";

export default function VacationPlanForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const store = useStore(vacationPlanStore);
  const [choiceStep, setChoiceStep] = useState(1);

  const steps = [
    "Choice",
    "Destination",
    "Accommodations",
    "General Info",
    "Summary",
  ];

  const handleNext = () => {
    if (
      currentStep === 2 &&
      !store.vacationPlan.vacationType &&
      !store.vacationPlan.country
    ) {
      return;
    }
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

  function handleChoiceStep(step: number) {
    setChoiceStep(step);
    handleNext();
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div
      className="w-full mx-auto flex flex-col h-full  justify-between text-[90%]"
      style={{ maxWidth: "100%", minHeight: "50vh" }}
    >
      <VacationPlanStepper steps={steps} currentStep={currentStep} />
      <div className="flex flex-col flex-grow justify-between">
        <div
          className="bg-white px-10 rounded-lg flex "
          style={{ height: "calc(100% - 4rem)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col"
            >
              {currentStep === 1 && (
                <VacationPlanChoiceStep setChoiceStep={handleChoiceStep} />
              )}
              {currentStep === 2 && (
                <VacationPlanDestinationStep choiceStep={choiceStep} />
              )}
              {currentStep === 3 && <VacationPlanAccommodationsStep />}
              {currentStep === 4 && <VacationPlanGeneralInfoStep />}
              {currentStep === 5 && <VacationPlanSummaryStep />}
            </motion.div>
          </AnimatePresence>
        </div>
        {currentStep !== 1 && (
          <div className="flex justify-between mt-4 h-16">
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
              className="py-1 px-4 text-sm rounded-lg text-white bg-main-orange hover:bg-orange-600 transition-colors"
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
              <ChevronRight className="inline-block ml-2" size={18} />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
