import React, { useState } from "react";
import CategoriesList from "./CategoriesList";
import LocationForm from "./LocationForm";

const CreateAJob = (props) => {
  const {
    Btn01,
    Btn02,
    handleClickBtn1,
    handleClickBtn2,
    behalfCompany,
    checkBehalfCompany,
    category,
    handleActiveCategory,
    handleClearCategory,
    title,
    handleTitle,
    address,
    handleSetAddress,
  } = props;

  const [showCategory, setShowCategory] = useState(false);
  const handleShowCategory = () => {
    setShowCategory(!showCategory);

    // hidden scroll bar when category popup=======
    if (!showCategory) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  };

  const [showLocation, setShowLocation] = useState(false);
  const handleShowLocation = (event) => {
    event.preventDefault();
    setShowLocation(!showLocation);

    // hidden scroll bar when location popup
    if (!showLocation) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  };

  return (
    <div>
      {/* =======popup show category======= */}
      <div
        className={`${
          showCategory
            ? "fixed inset-0 w-full bg-gray-900 bg-opacity-60  flex justify-center transition-all duration-300 z-40"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <CategoriesList
          handleShowCategory={handleShowCategory}
          category={category}
          handleActiveCategory={handleActiveCategory}
          handleClearCategory={handleClearCategory}
        />
      </div>

      {/* =======popup show location======= */}
      <div
        className={`${
          showLocation
            ? "fixed inset-0 w-full bg-gray-900 bg-opacity-60 flex justify-center transition-all duration-300 z-40"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <LocationForm
          handleShowLocation={handleShowLocation}
          address={address}
          handleSetAddress={handleSetAddress}
        />
      </div>

      {/* **************************Create a Job*********************** */}
      <div className="space-y-4">
        {/* ====Header===== */}
        <div className="flex items-center space-x-2">
          <div className="flex justify-center font-bold text-white items-center bg-orange-600 h-8 w-8 rounded-full">
            01
          </div>
          <h3 className="text-xl font-bold">Create a new job</h3>
        </div>

        {/* ====Create a title for your ad.===== */}
        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
            Create a title for your ad.{" "}
          </h3>
          <input
            value={title}
            onChange={({ target }) => handleTitle(target.value)}
            required
            className="w-full focus:ring-2 ring-orange-300 bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-400"
            type="text"
            placeholder={`${title ? title : "Ex. Full-time Staff"}`}
          />
        </div>

        {/* ====This job is for.===== */}
        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
            This job is for.{" "}
          </h3>
          <div
            className="flex flex-col space-y-2
            2xl:flex
            2xl:space-x-2
            2xl:flex-row
            
            xl:flex
            xl:space-x-2
            xl:flex-row

            lg:flex
            lg:flex-row

            md:flex
            md:space-x-2
            md:flex-row
            md:space-y-0

            sm:space-y-2
            "
          >
            <button
              onClick={handleClickBtn1}
              className="px-6 py-1 border border-gray-300 rounded items-center justify-center flex space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${
                  Btn01
                    ? "size-5 text-orange-500 transition-all duration-300"
                    : "w-0 h-0 overflow-hidden"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>My own company</p>
            </button>
            <button
              onClick={handleClickBtn2}
              className="px-6 py-1 border border-gray-300 rounded flex items-center justify-center space-x-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${
                  Btn02
                    ? "size-5 text-orange-500 transition-all duration-300"
                    : "w-0 h-0 overflow-hidden"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>On behalf of another company</p>
            </button>
          </div>
          <div
            className={`${
              Btn02
                ? "w-full h-full transition-all duration-500 "
                : "w-0 h-0 overflow-hidden"
            }`}
          >
            <input
              value={behalfCompany}
              className="w-full focus:ring-2 ring-orange-300 bg-gray-100 mt-2 py-2 px-3 rounded border focus:outline-none border-gray-400"
              placeholder={`${behalfCompany ? behalfCompany : "Company Name"}`}
              type="text"
              onChange={({ target }) => checkBehalfCompany(target.value)}
            />
          </div>
        </div>

        {/* ====Category===== */}
        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
            Where do you want your ad displayed.{" "}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={handleShowCategory}
              className="px-6 py-1 border border-gray-300 rounded items-center justify-center flex space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Category</p>
            </button>

            <div>
              {category && (
                <button
                  onClick={handleShowCategory}
                  className="px-6 py-1 border border-gray-300 rounded items-center justify-center flex space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-orange-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{category}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4 text-orange-600"
                  >
                    <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                    <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ====Location===== */}
        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
            Where are you located?{" "}
          </h3>
          <div
            className="flex flex-col space-y-2
          2xl:flex
          2xl:space-x-5
          
          sm:flex
          sm:flex-row
          sm:space-y-0
          sm:space-x-2

          "
          >
            <button
              onClick={handleShowLocation}
              className="px-8 py-8 2xl:px-16 2xl:py-16 border border-gray-300 shadow rounded items-center justify-center flex flex-col space-x-2
              md:px-10
              md:py-10
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-gray-500 "
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-bold text-gray-500 capitalize ">
                {`${address.country ? address.country : "Cambodia"}`}
              </p>
            </button>
            <button
              onClick={handleShowLocation}
              className="px-8 py-8 2xl:px-16 2xl:py-16 border border-gray-300 rounded items-center shadow justify-center flex flex-col space-x-2
              md:px-10
              md:py-10

              
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" size-8 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-bold text-gray-500 capitalize ">
                {`${address.city ? address.city : "Phnom Penh"}`}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAJob;
