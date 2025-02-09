import React from "react";

const Terms = (props) => {
  const { terms, removeTerms } = props;
  return (
    <ul className="grid grid-cols-7 gap-4 ">
      {terms.map((term, index) => (
        <li
          key={term}
          className="flex py-2 space-x-2 items-center justify-center bg-orange-600 rounded border shadow cursor-pointer text-white"
        >
          <svg
            onClick={() => removeTerms(index)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:bg-orange-700 rounded bg-orange-700 bg-opacity-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <p className="uppercase">{term}</p>
        </li>
      ))}
    </ul>
  );
};

export default Terms;
