import { motion } from "framer-motion";
// import { BorderBeam } from "./ui/border-beam";

export default function IconSelect({
  typeList,
  selectedType,
  onSelect,
}: {
  typeList: any[];
  selectedType: any;
  onSelect: (type: any) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-auto py-2">
      {typeList.map((element) => (
        <motion.div
          key={element.type}
          className={`p-4 border rounded-lg cursor-pointer overflow-hidden relative min-w-10 ${
            selectedType === element.type
              ? "border-main-orange bg-orange-50"
              : "border-gray-400 hover:border-main-orange"
          }`}
          onClick={() => onSelect(element.type)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-2">
            {/* <BorderBeam /> */}

            <element.icon
              className={`w-12 h-12 ${
                selectedType === element.type
                  ? "text-main-orange"
                  : "text-gray-600"
              }`}
            />
            <span
              className={`text-center font-medium text-sm ${
                selectedType === element.type
                  ? "text-main-orange"
                  : "text-black"
              }`}
            >
              {element.type}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
