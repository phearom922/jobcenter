import React, { useEffect } from "react";
import { Categories } from "../mocks/Categories";

const CategoriesList = (props) => {
  const {
    handleShowCategory,
    category,
    handleActiveCategory,
    handleClearCategory,
  } = props;

 



  return (
    <div className="max-w-lg my-auto z-40">
      <div className="bg-white p-5 rounded ">
        <div className="grid grid-cols-5 border border-gray-300 h-96">
          <ul className="col-span-2 overflow-hidden overflow-y-auto">
            {Categories.length > 0 &&
              Categories.map((item, i) => (
                <li
                  onClick={handleActiveCategory}
                  key={item + i}
                  className="flex justify-between items-center cursor-pointer bg-gray-50 text-gray-900 font-bold text-lg p-2 border-b border-gray-30"
                >
                  <span>{item.name}</span>
                  {category === item.name ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 text-orange-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              ))}
          </ul>
          <div className="col-span-3 border-l"></div>
        </div>

        <div className="w-full my-5 border border-gray-300 "></div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleClearCategory}
            className="bg-gray-900 text-white border rounded font-bold py-2 px-10 focus:outline-none "
          >
            Clear All
          </button>
          <button
            onClick={handleShowCategory}
            className="bg-orange-600 text-white border rounded font-bold py-2 px-10 focus:outline-none "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
