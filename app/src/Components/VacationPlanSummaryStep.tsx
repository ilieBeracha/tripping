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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function VacationPlanSummaryStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const vacationPlan = useVacationPlanStore.vacationPlan;
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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

  const toggleCard = (card: string) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  const SummaryCard = ({
    icon: Icon,
    title,
    value,
    isExpandable = false,
    isExpanded = false,
    children,
  }: any) => (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 transition-all duration-300 hover:shadow-lg ${
        isExpanded ? "pb-6" : "pb-4"
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => isExpandable && toggleCard(title)}
      >
        <div className="flex items-center space-x-4">
          <Icon className="w-8 h-8 text-main-orange" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <p className="text-xl text-sec-blue">{value || "Not specified"}</p>
          </div>
        </div>
        {isExpandable && (
          <div>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
        )}
      </div>
      {isExpanded && <div className="pt-4">{children}</div>}
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
        {/* Vacation Type or Country */}
        <SummaryCard
          icon={vacationPlan.vacationType ? Palmtree : MapPin}
          title={vacationPlan.vacationType ? "Vacation Type" : "Destination"}
          value={vacationPlan.vacationType || vacationPlan.destination.country}
          isExpandable={!!vacationPlan.destination.city}
          isExpanded={expandedCard === "Destination"}
        >
          {/* Expandable content for Destination */}
          <p className="text-lg text-gray-800">
            <strong>City:</strong>{" "}
            {vacationPlan.destination.city || "Not specified"}
          </p>
        </SummaryCard>

        {/* Accommodation Type */}
        <SummaryCard
          icon={Home}
          title="Accommodation Type"
          value={accommodationTypeDisplay()}
        />

        {/* Hotel Type */}
        <SummaryCard
          icon={Hotel}
          title="Hotel Type"
          value={hotelTypeDisplay()}
        />

        {/* Budget */}
        <SummaryCard
          icon={DollarSign}
          title="Budget"
          value={`$${
            vacationPlan.budget === 10000
              ? "10,000 > "
              : vacationPlan.budget.toLocaleString()
          }`}
        />

        {/* Travel Dates */}
        <SummaryCard
          icon={Calendar}
          title="Travel Dates"
          value={`${new Date(
            vacationPlan.dates.startDate
          ).toDateString()} - ${new Date(
            vacationPlan.dates.endDate
          ).toDateString()}`}
          fullWidth={true}
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
