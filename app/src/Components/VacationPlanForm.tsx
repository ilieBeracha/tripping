import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VacationPlanStepper from "./VacationPlanStepper";
import VacationPlanDestinationStep from "./VacationPlanDestinationStep";
import VacationPlanDatesStep from "./VacationPlanDatesStep";
import VacationPlanAccommodationsStep from "./VacationPlanAccommodationsStep";
import VacationPlanTransportationStep from "./VacationPlanTransportationStep";
import VacationPlanSummaryStep from "./VacationPlanSummaryStep";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function VacationPlanForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Destination",
    "Dates",
    "Accommodations",
    "Transportation",
    "Summary",
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
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
      className="w-full mx-auto px-20 py-20 h-full flex flex-col"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Stepper Component */}
      <VacationPlanStepper steps={steps} currentStep={currentStep} />

      <div className="bg-white p-10 rounded-lg flex flex-col justify-between flex-1">
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
            {currentStep === 2 && <VacationPlanDatesStep />}
            {currentStep === 3 && <VacationPlanAccommodationsStep />}
            {currentStep === 4 && <VacationPlanTransportationStep />}
            {currentStep === 5 && <VacationPlanSummaryStep />}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between">
          <motion.button
            className={`py-3 px-8 rounded-lg text-white bg-sec-blue ${
              currentStep === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
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
