import { motion } from "framer-motion";

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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-60 overflow-scroll py-2">
      {typeList.map((element) => (
        <motion.div
          key={element.type}
          className={`p-4 border rounded-lg cursor-pointer ${
            selectedType === element.type
              ? "border-main-orange bg-orange-50"
              : "border-gray-400 hover:border-main-orange"
          }`}
          onClick={() => onSelect(element.type)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <element.icon
              className={`w-8 h-8 ${
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
