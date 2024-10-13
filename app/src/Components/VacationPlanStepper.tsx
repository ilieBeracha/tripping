import { motion } from "framer-motion";

export default function VacationPlanStepper({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 text-center">
            <motion.div
              className={`w-8 h-8 mx-auto rounded-full text-white flex items-center justify-center 
              ${index + 1 === currentStep ? "bg-main-orange" : "bg-gray-300"}`}
              animate={{
                scale: index + 1 === currentStep ? 1.2 : 1,
                transition: { duration: 0.3 },
              }}
            >
              {index + 1}
            </motion.div>
            <p
              className={`mt-3 text-sm ${
                index + 1 === currentStep
                  ? "font-semibold text-main-orange"
                  : "text-gray-500"
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
      <motion.div
        className="h-2 w-full bg-gray-200 rounded-full relative overflow-hidden"
        animate={{ backgroundColor: "#E5E7EB" }}
      >
        <motion.div
          className="absolute left-0 top-0 h-full bg-main-orange rounded-full"
          animate={{ width: `${(currentStep / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
