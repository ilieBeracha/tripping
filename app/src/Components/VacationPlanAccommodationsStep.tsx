import { useStore } from "zustand";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import {
  Users,
  UserPlus,
  Heart,
  User,
  Star,
  Gem,
  TreePine,
  Building,
  Tent,
} from "lucide-react";
import { AccommodationType, HotelType } from "../types/vacationPlan";
import IconSelect from "./IconSelect";

export default function VacationPlanAccommodationsStep() {
  const useVacationPlanStore = useStore(vacationPlanStore);

  const accommodationTypes = [
    { type: AccommodationType.Family, icon: Users },
    { type: AccommodationType.Friends, icon: UserPlus },
    { type: AccommodationType.Couple, icon: Heart },
    { type: AccommodationType.Solo, icon: User },
  ];

  const hotelTypes = [
    {
      type: HotelType.Standard,
      icon: Building,
      description: "Comfortable, mid-range accommodations",
    },
    {
      type: HotelType.Luxury,
      icon: Star,
      description: "High-end accommodations with premium amenities",
    },
    {
      type: HotelType.Boutique,
      icon: Gem,
      description: "Unique, stylish hotels with personalized service",
    },
    {
      type: HotelType.Resort,
      icon: TreePine,
      description: "All-inclusive properties with extensive amenities",
    },

    {
      type: HotelType.Camping,
      icon: Tent,
      description: "Outdoor accommodations for nature enthusiasts",
    },
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
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sec-blue">Accommodations</h2>
      <IconSelect
        typeList={accommodationTypes}
        selectedType={
          useVacationPlanStore.vacationPlan.accommodation.accommodationType
        }
        onSelect={handleAccommodationType}
      />
      <h2 className="text-3xl font-bold text-sec-blue">Hotel Type</h2>
      <IconSelect
        typeList={hotelTypes}
        selectedType={useVacationPlanStore.vacationPlan.accommodation.hotelType}
        onSelect={handleHotelType}
      />
    </div>
  );
}
