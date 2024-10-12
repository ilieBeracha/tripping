import { useState } from "react";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import VacationPlanForm from "../components/VacationPlanForm";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isShowVacationPlan, setIsShowVacationPlan] = useState(false);

  const startVacationPlan = () => {
    setIsShowVacationPlan(true);
  };

  const closeVacationPlan = () => {
    setIsShowVacationPlan(false);
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <HomeHero startVacationPlan={startVacationPlan} />

      <AnimatePresence>
        {isShowVacationPlan && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={closeVacationPlan} />

            <motion.div
              className="relative bg-white p-16 rounded-2xl shadow-lg z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              style={{ width: "70vw", minHeight: "70vh" }}
            >
              <button
                className="absolute top-4 right-4 bg-white text-black text-xl"
                onClick={closeVacationPlan}
              >
                ✕
              </button>
              <VacationPlanForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
