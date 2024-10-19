// import { BorderBeam } from "./ui/border-beam";

export default function VacationPlanChoiceStep({
  setChoiceStep,
}: {
  setChoiceStep: (step: number) => void;
}) {
  return (
    <div className=" p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-sec-blue  flex items-center justify-center">
        Choose Your Vacation Details
      </h2>
      <div className="p-8 flex-grow rounded-xl flex justify-center gap-10 items-center w-full h-full">
        <Card
          title="Specific Destination"
          description="Choose this option to plan your vacation based on a specific location you have in mind."
          onClick={() => setChoiceStep(1)}
        />
        <Card
          title="Vacation Type"
          description="Select this to explore vacation options based on the type of experience you're looking for."
          onClick={() => setChoiceStep(2)}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div className="relative flex flex-col my-6  border border-slate-200 rounded-lg p-8 shadow-lg transition-all duration-300">
      {/* <BorderBeam /> */}

      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-main-orange"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <h5 className="ml-4 text-slate-800 text-xl font-semibold">{title}</h5>
      </div>
      <p className="text-slate-600 leading-normal font-light text-lg mb-6">
        {description}
      </p>
      <div className="mt-auto">
        <span
          onClick={onClick}
          className="text-black cursor-pointer font-semibold text-base hover:underline flex items-center transition-colors duration-300 hover:text-blue-800"
        >
          Choose
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
