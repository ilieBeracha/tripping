import Datepicker from "react-tailwindcss-datepicker";
import { vacationPlanStore } from "../stores/VacationPlanStore";
import { useStore } from "zustand";

export default function CalenderRange() {
  const useVacationPlanStore = useStore(vacationPlanStore);
  const dates = useVacationPlanStore.vacationPlan.dates;

  return (
    <>
      <Datepicker
        displayFormat="DD/MM/YYYY"
        value={dates}
        onChange={(newValue: any) =>
          useVacationPlanStore.setDateRange(newValue)
        }
      />
    </>
  );
}

// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { addDays } from "date-fns";
// import { useState } from "react";

// export default function CalenderRange() {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);

//   return (
//     <DateRangePicker
//       onChange={(item: any) => setState([item.selection])}
//       moveRangeOnFirstSelection={false}
//       months={2}
//       ranges={state}
//       direction="horizontal"
//       preventSnapRefocus={true}
//       calendarFocus="backwards"
//     />
//   );
// }
