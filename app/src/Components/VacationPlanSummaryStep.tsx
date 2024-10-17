import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import {
  MapPin,
  Calendar,
  Home,
  Hotel,
  Palmtree,
  DollarSign,
  AreaChart,
} from "lucide-react";
import { useEffect } from "react";

export default function VacationPlanSummaryStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;

  useEffect(() => {
    console.log("Vacation Plan Submitted");
    console.log(vacationPlan);
  });


  const accommodationTypeDisplay = () => {
    switch (vacationPlan.accommodation.accommodationType) {
      case "family":
        return "Family";
      case "friends":
        return "Friends";
      case "couple":
        return "Couple";
      case "solo":
        return "Solo";
      default:
        return "Not specified";
    }
  };

  const hotelTypeDisplay = () => {
    switch (vacationPlan.accommodation.hotelType) {
      case "luxury":
        return "Luxury";
      case "boutique":
        return "Boutique";
      case "resort":
        return "Resort";
      case "standard":
        return "Standard";
      case "camping":
        return "Camping";
      default:
        return "Not specified";
    }
  };

  const SummaryCard = ({
    icon: Icon,
    title,
    value,
    fullWidth = false,
  }: any) => (
    <div
      className={`${
        fullWidth ? "md:col-span-2" : ""
      } bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transform transition-all duration-300 hover:shadow-lg`}
    >
      <Icon className="w-8 h-8 text-main-orange" />
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-xl text-sec-blue">{value || "Not specified"}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 p-8 rounded-xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-sec-blue mb-2">
          Your Vacation Summary
        </h2>
        <p className="text-gray-600 text-lg">
          Here's an overview of your dream getaway
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SummaryCard
          icon={vacationPlan.vacationType ? Palmtree : MapPin}
          title={vacationPlan.vacationType ? "Vacation Type" : "Country"}
          value={vacationPlan.vacationType || vacationPlan.country}
        />
        {vacationPlan.city !== "" && (
          <SummaryCard
            icon={AreaChart}
            title="City"
            value={vacationPlan.city}
          />
        )}
        <SummaryCard
          icon={Calendar}
          title="Travel Dates"
          value={`${vacationPlan.startDate} - ${vacationPlan.endDate}`}
        />
        <SummaryCard
          icon={Home}
          title="Accommodation Type"
          value={accommodationTypeDisplay()}
        />
        <SummaryCard
          icon={Hotel}
          title="Hotel Type"
          value={hotelTypeDisplay()}
        />
        <SummaryCard
          icon={DollarSign}
          title="Budget"
          value={`$${vacationPlan.budget.toLocaleString()}`}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 italic">
          "The world is a book, and those who do not travel read only one page."
          - Saint Augustine
        </p>
      </div>
    </div>
  );
}
