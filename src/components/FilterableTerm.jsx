import React, { useRef } from "react";
import FilteredByCategory from "./FilteredByCategory";
import FilteredByCompany from "./FilteredByCompany";
import FilteredByLocation from "./FilteredByLocation";
import FilteredByKeyword from "./FilteredByKeyword";
import FilteredByType from "./FilteredByType";
import Terms from "./Terms";

const FilterableTerm = (props) => {
  const {
    toggle,
    toggleFeatured,
    showCategoryForm,
    toggleCategoryForm,
    showCompanyForm,
    toggleCompanyForm,
    showLocationForm,
    toggleLocationForm,
    showKeywordForm,
    toggleKeywordForm,
    showTypeForm,
    toggleTypeForm,
    categories,
    handleSetCategory,
    companies,
    handleSetCompany,
    locations,
    handleSetLocation,
    inputKeyword,
    handleSetKeyword,
    handleSetInputKeyword,
    types,
    handleSetType,
    terms,
    removeTerms
  } = props;

  const ref = useRef();
  const closePopupWithRef = (e) => {
    if (!ref.current.contains(e.target)) {
      toggleTypeForm(false);
    }
  };

  return (
    <div>
      {/* =======popup show Filtered Category Form======= */}

      <div
        onClick={closePopupWithRef}
        className={`${
          showCategoryForm ||
          showCompanyForm ||
          showLocationForm ||
          showKeywordForm ||
          showTypeForm
            ? "fixed inset-0 w-full bg-gray-900 bg-opacity-60  flex justify-center transition-all duration-300 z-40"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <div ref={ref} className="w-full max-w-xl justify-center my-auto">
          {showCategoryForm ? (
            <FilteredByCategory
              toggleCategoryForm={toggleCategoryForm}
              categories={categories}
              handleSetCategory={handleSetCategory}
            />
          ) : showCompanyForm ? (
            <FilteredByCompany
              toggleCompanyForm={toggleCompanyForm}
              companies={companies}
              handleSetCompany={handleSetCompany}
            />
          ) : showLocationForm ? (
            <FilteredByLocation
              toggleLocationForm={toggleLocationForm}
              locations={locations}
              handleSetLocation={handleSetLocation}
            />
          ) : showKeywordForm ? (
            <FilteredByKeyword
              toggleKeywordForm={toggleKeywordForm}
              inputKeyword={inputKeyword}
              handleSetKeyword={handleSetKeyword}
              handleSetInputKeyword={handleSetInputKeyword}
            />
          ) : showTypeForm ? (
            <FilteredByType
              toggleTypeForm={toggleTypeForm}
              ref={ref}
              types={types}
              handleSetType={handleSetType}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      {/* =======popup show Filtered Category Form======= */}

      <div>
        <div className="flex justify-between items-center ">
          <p className="font-bold pb-2 ">
            Explore <span className="italic">12 Results</span>
          </p>

          <div className="flex items-center space-x-2 cursor-pointer">
            <p>Sponsored Ads</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center
        md:grid md:grid-cols-3 md:gap-2
        ">
          <div
            onClick={toggleCategoryForm}
            className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer"
          >
            <p>Category</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            onClick={toggleCompanyForm}
            className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer"
          >
            <p>Company</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            onClick={toggleLocationForm}
            className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer"
          >
            <p>Location</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            onClick={toggleKeywordForm}
            className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer"
          >
            <p>Keyword</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            onClick={() => toggleTypeForm(true)}
            className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer"
          >
            <p>Type</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4">
          <Terms terms={terms} removeTerms={removeTerms}/>
        </div>

        <div className="flex items-center space-x-4 pt-4 ">
          <div className="flex items-center space-x-3">
            <div
              className={`relative w-10 h-5 rounded-full transition duration-100 ease-linear
               ${toggle ? "bg-orange-600" : "bg-gray-400"}`}
            >
              <label
                className={`absolute left-0 w-5 h-5 rounded-full border-2 
              bg-white transition duration-100 ease-linear
              ${
                toggle
                  ? "border-orange-600 translate-x-full"
                  : "translate-x-0 border-gray-500"
              }`}
              ></label>
              <input
                onClick={toggleFeatured}
                type="checkbox"
                className="appearance-none w-full h-full opacity-0 cursor-pointer focus:outline-none"
              />
            </div>
            <p className="text-gray-900 font-semibold ">Featured</p>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 "
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <p className="text-gray-900 font-semibold ">Favorite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterableTerm;
