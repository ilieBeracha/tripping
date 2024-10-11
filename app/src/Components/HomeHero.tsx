import { useNavigate } from "react-router-dom";
import HomeImageCarousel from "./HomeImageCarousel";

export default function HomeHero() {
  const navigate = useNavigate();

  const startVacationPlan = () => {
    navigate("/vacation-form");
  };

  return (
    <div
      className="relative bg-white w-full"
      style={{ width: "100vw", height: "calc(100vh - 96px)" }}
    >
      <div className="w-full h-full justify-center items-center grid grid-cols-2">
        <div className="h-full flex justify-center flex-col p-32 lg:mx-0 mb-60">
          <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
            Plan Your Perfect Vacation
          </h1>
          <p className="mt-4 text-2xl leading-8 text-gray-800">
            Discover the best destinations, accommodations, and activities
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Whether you're looking for an adventurous getaway or a relaxing
            retreat, our platform offers personalized travel recommendations and
            expert advice tailored to your preferences.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <button
              onClick={startVacationPlan}
              className="rounded-md bg-main-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 hover:text-white"
            >
              Start Planning
            </button>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <HomeImageCarousel />
        </div>
      </div>
    </div>
  );
}
