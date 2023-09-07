import React from "react";

type Props = {
  setIsTierDiscount: React.Dispatch<React.SetStateAction<boolean>>;
  isTierDiscount: boolean;
};

export default function DropdownOption({
  setIsTierDiscount,
  isTierDiscount,
}: Props) {
  const [isOptionOpen, setIsOptionOpen] = React.useState<boolean>(false);
  const handleClick1 = () => {
    setIsTierDiscount(true);
    setIsOptionOpen(false);
  };

  const handleClick2 = () => {
    setIsTierDiscount(false);
    setIsOptionOpen(false);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOptionOpen(!isOptionOpen)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {isTierDiscount === true ? "Tier Discount" : "Fixed Discount"}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOptionOpen && (
        <div
          className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            <a
              onClick={handleClick1}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
            >
              Tier Discount
            </a>
            <a
              onClick={handleClick2}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
            >
              Fixed Discount
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
