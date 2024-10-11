import { useState } from "react";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import VacationPlanForm from "../components/VacationPlanForm";
import BaseLoader from "../components/BaseLoader";

export default function Home() {
  const [isShowVacationPlan, setIsShowVacationPlan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startVacationPlan = () => {
    // Redirect to the vacation plan page
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsShowVacationPlan(true);
  };

  if (isLoading) {
    return <BaseLoader />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {!isShowVacationPlan ? (
        <>
          <Header />
          <HomeHero startVacationPlan={startVacationPlan} />
        </>
      ) : (
        <VacationPlanForm />
      )}
    </div>
  );
}
