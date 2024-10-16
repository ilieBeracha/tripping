import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function SelectSearch({ list, inputStyle, onSelect }: any) {
  const [query, setQuery] = useState("");
  const [selectedElem, setSelectedElem] = useState("");

  const filteredList =
    query === ""
      ? list
      : list.filter((elem: string) =>
          elem.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox
      as="div"
      value={selectedElem}
      onChange={(elem) => {
        setSelectedElem(elem as string);
        onSelect(elem);
        setQuery("");
      }}
    >
      <div className="relative mt-2">
        <ComboboxInput
          className={inputStyle}
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(country: any) => country}
          placeholder="Enter destination"
        />
        <ComboboxButton className="absolute focus:ring-0 inset-y-0 right-0  pr-2 bg-transparent flex items-center justify-center">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        {filteredList.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredList.map((elem: string) => (
              <ComboboxOption
                key={elem}
                value={elem}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-9 ${
                    active ? "bg-main-orange text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {elem}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                          active ? "text-white" : "text-main-orange"
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
