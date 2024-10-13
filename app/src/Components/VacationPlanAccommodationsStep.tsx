import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { Users, UserPlus, Heart, User } from "lucide-react";
import { AccommodationType, HotelType } from "../types/vacationPlan";
import IconSelect from "./IconSelect";
import { hotelTypes } from "../config/hotelTypesList";

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
      type === useVacationPlanStore.vacationPlan.accommodation.accommodationType
    ) {
      useVacationPlanStore.setAccommodationType(AccommodationType.Family);
    } else {
      useVacationPlanStore.setAccommodationType(type);
    }
  }

  function handleHotelType(type: HotelType) {
    if (type === useVacationPlanStore.vacationPlan.accommodation.hotelType) {
      useVacationPlanStore.setHotelType(HotelType.Standard);
    } else {
      useVacationPlanStore.setHotelType(type);
    }
  }

  return (
    <div className="space-y-8 p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-sec-blue">Accommodations</h2>
      <IconSelect
        typeList={accommodationTypes}
        selectedType={
          useVacationPlanStore.vacationPlan.accommodation.accommodationType
        }
        onSelect={handleAccommodationType}
      />
      <h2 className="text-2xl font-bold text-sec-blue">Hotel Type</h2>
      <IconSelect
        typeList={hotelTypes}
        selectedType={useVacationPlanStore.vacationPlan.accommodation.hotelType}
        onSelect={handleHotelType}
      />
    </div>
  );
}
