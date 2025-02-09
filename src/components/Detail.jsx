import React from "react";

const Detail = (props) => {
  const {
    salary,
    handleSetSalary,
    salaryType,
    handleSetSalaryType,
    jobType,
    handleSetJobType,
    experience,
    handleSetExperience,
    companyName,
    handleSetCompanyName,
    companyWebsite,
    handleSetCompanyWebsite,
  } = props;

  return (
    <div>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <div className="flex justify-center font-bold text-white items-center bg-orange-600 h-8 w-8 rounded-full">
            03
          </div>
          <h3 className="text-xl font-bold">Detail</h3>
        </div>

        <div className="flex items-center">
          <h3 className="w-2/12 font-semibold">Detail</h3>
          <hr className="w-10/12" />
        </div>

        <div className="flex w-full space-x-2">
          <div className="space-y-2 w-full">
            <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
              Salary.{" "}
            </h3>
            <div className="flex w-full items-center">
              <p className="px-5 py-2 bg-orange-600 text-white font-semibold border border-gray-200 rounded-l">
                $
              </p>
              <input
                onChange={({ target }) => handleSetSalary(target.value)}
                className="w-full  bg-gray-100 py-2 px-3 rounded-r border-l-0 border focus:outline-none border-gray-200 "
                placeholder={salary}
              />
            </div>
          </div>

          <div className="space-y-2 w-full">
            <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
              Salary Pricing.{" "}
            </h3>
            <div className="flex w-full items-center">
              <select
                onChange={({ target }) => handleSetSalaryType(target.value)}
                id="select"
                className="w-full block  bg-gray-100 py-2.5 px-3
                rounded border focus:outline-none 
                border-gray-200 text-sm text-gray-500 cursor-pointer"
                value={salaryType}
              >
                <option value="hourly"> Hourly Rate</option>
                <option value="monthly">Fixed Salary (monthly)</option>
                <option value="annually">Fixed Salary (annually)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex w-full space-x-2">
          <div className="space-y-2 w-full">
            <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
              Job Type.{" "}
            </h3>
            <div className="flex w-full items-center">
              <select
                onChange={({ target }) => handleSetJobType(target.value)}
                id="select"
                className="w-full block  bg-gray-100 py-2.5 px-3
                rounded border focus:outline-none 
                border-gray-200 text-sm text-gray-500 cursor-pointer"
                value={jobType}
              >
                <option value="part-time">Part-time</option>
                <option value="full-time">Full-time</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
              Experience.{" "}
            </h3>
            <div className="flex w-full items-center">
              <select
                onChange={({ target }) => handleSetExperience(target.value)}
                id="select"
                className="w-full block  bg-gray-100 py-2.5 px-3
                rounded border focus:outline-none 
                border-gray-200 text-sm text-gray-500 cursor-pointer"
                value={experience}
              >
                <option value="high-school-degree">
                  High school diploma or equivalent
                </option>
                <option value="associate-degree">Associate's degree</option>
                <option value="bachelor-degree">Bachelor's degree</option>
                <option value="master-degree">Master's degree</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <h3 className="w-2/12 font-semibold">Company Detail</h3>
          <hr className="w-10/12" />
        </div>

        <div className="flex w-full space-x-2">
          <div className="space-y-2 w-full">
            <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
              Company Name.{" "}
            </h3>
            <div className="flex w-full items-center">
              <input
                onChange={({ target }) => handleSetCompanyName(target.value)}
                className="w-full  bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-200 "
                placeholder={`${companyName ? companyName : "Company Name"}`}
              />
            </div>
          </div>

          <div className="space-y-2 w-full">
            <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
              Company Website.{" "}
            </h3>
            <div className="flex w-full items-center">
              <input
                onChange={({ target }) => handleSetCompanyWebsite(target.value)}
                className="w-full  bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-200 "
                placeholder={`${
                  companyWebsite ? companyWebsite : "Company Website"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
