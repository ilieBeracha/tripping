import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { Users, UserPlus, Heart, User } from "lucide-react";
import { AccommodationType } from "../types/vacationPlan";
import IconSelect from "./IconSelect";

export default function VacationPlanAccommodationsStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);

  const accommodationTypes = [
    { type: AccommodationType.Family, icon: Users },
    { type: AccommodationType.Friends, icon: UserPlus },
    { type: AccommodationType.Couple, icon: Heart },
    { type: AccommodationType.Solo, icon: User },
  ];

  function handleAccommodationType(type: AccommodationType) {
    if (
      type ===
      useVacationPlanStore.vacationPlan.accommodations.accommodationType
    ) {
      useVacationPlanStore.setAccommodationType(AccommodationType.Family);
    } else {
      useVacationPlanStore.setAccommodationType(type);
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Accommodations</h2>
      <IconSelect
        typeList={accommodationTypes}
        selectedType={
          useVacationPlanStore.vacationPlan.accommodations.accommodationType
        }
        onSelect={handleAccommodationType}
      />
    </div>
  );
}
