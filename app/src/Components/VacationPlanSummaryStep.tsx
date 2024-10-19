import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import {
  MapPin,
  Calendar,
  Home,
  Hotel,
  Palmtree,
  DollarSign,
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
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => isExpandable && toggleCard(title)}
      >
        <div className="flex items-center space-x-4">
          <Icon className="w-8 h-8 text-main-orange" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-lg text-gray-600">{value || "Not specified"}</p>
          </div>
        </div>
        {isExpandable && (
          <div>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" />
            )}
          </div>
        )}
      </div>

      {/* Expandable content */}
      {isExpanded && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white p-4 rounded-lg shadow-lg z-10">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-8 p-8 rounded-3xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-sec-blue mb-4">
          Your Vacation Summary
        </h2>
        <p className="text-gray-500 text-lg">
          Here's an overview of your dream getaway
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Destination */}
        <SummaryCard
          icon={MapPin}
          title="Destination"
          value={`${vacationPlan.destination.country || ""}`}
          isExpandable={true}
          isExpanded={expandedCard === "Destination"}
        >
          {vacationPlan.vacationType === "" ? (
            <>
              <p className="text-md text-gray-500">
                <strong>Country:</strong>{" "}
                {vacationPlan.destination.country || "Not specified"}
              </p>
              <p className="text-md text-gray-500">
                <strong>City:</strong>{" "}
                {vacationPlan.destination.city || "Not specified"}
              </p>
            </>
          ) : (
            <p className="text-md text-gray-500">
              <strong>Vacation Type:</strong>{" "}
              {vacationPlan.vacationType || "Not specified"}
            </p>
          )}
        </SummaryCard>

        {/* Accommodation */}
        <SummaryCard
          icon={Home}
          title="Accommodation Type"
          value={
            vacationPlan.accommodation.accommodationType || "Not specified"
          }
        />

        {/* Hotel Type */}
        <SummaryCard
          icon={Hotel}
          title="Hotel Type"
          value={vacationPlan.accommodation.hotelType || "Not specified"}
        />

        {/* Extended Budget Section */}
        <SummaryCard
          icon={DollarSign}
          title="Budget"
          value={`$${
            vacationPlan.budget.amount === 10000
              ? "10,000 >"
              : vacationPlan.budget.amount.toLocaleString()
          }`}
          isExpandable={true}
          isExpanded={expandedCard === "Budget"}
        >
          <p className="text-md text-gray-500">
            <strong>Is Budget Flexible?</strong>{" "}
            {vacationPlan.budget.isFlexible ? "Yes" : "No"}
          </p>
          {vacationPlan.budget.spendingPriority && (
            <p className="text-md text-gray-500">
              <strong>Spending Priority:</strong>{" "}
              {vacationPlan.budget.spendingPriority}
            </p>
          )}
        </SummaryCard>

        {/* Dates */}
        <SummaryCard
          icon={Calendar}
          title="Dates"
          value={`${new Date(
            vacationPlan.dates.startDate as Date
          ).toDateString()} - ${new Date(
            vacationPlan.dates.endDate as Date
          ).toDateString()}`}
          isExpandable={true}
          isExpanded={expandedCard === "Dates"}
        >
          <p className="text-md text-gray-500">
            <strong>Start Date:</strong>{" "}
            {new Date(vacationPlan.dates.startDate as Date).toDateString()}
          </p>
          <p className="text-md text-gray-500">
            <strong>End Date:</strong>{" "}
            {new Date(vacationPlan.dates.endDate as Date).toDateString()}
          </p>
        </SummaryCard>

        {/* Flexibility */}
        <SummaryCard
          icon={Calendar}
          title="Flexibility"
          value={vacationPlan.dates.flexibility.isFlexible ? "Yes" : "No"}
          isExpandable={true}
          isExpanded={expandedCard === "Flexibility"}
        >
          <p className="text-md text-gray-500">
            <strong>Flexibility Type:</strong>{" "}
            {vacationPlan.dates.flexibility.flexibilityType || "Not specified"}
          </p>
          <p className="text-md text-gray-500">
            <strong>Optimization Type:</strong>{" "}
            {vacationPlan.dates.flexibility.optimizationType || "Not specified"}
          </p>
          <p className="text-md text-gray-500">
            <strong>Preferred Total Days:</strong>{" "}
            {vacationPlan.dates.flexibility.preferredTotalDays ||
              "Not specified"}
          </p>
        </SummaryCard>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 italic">
          "The world is a book, and those who do not travel read only one page."
          - Saint Augustine
        </p>
      </div>
    </div>
  );
}
