import React from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { CButton, CTooltip } from "@coreui/react";

import { Collapse, Ripple, initTWE } from "tw-elements";
initTWE({ Collapse, Ripple });

const JobCard = (props) => {
  const { jobs } = props;

  return (
    <div>
      <ul className="w-full my-5 grid grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3
      lg:grid-cols-4 gap-8">
        {jobs?.length > 0 &&
          jobs.map((job) => (
            <Link key={job.id} to={`/job-details/${job.id}`}>
              <li className="bg-white hover:-translate-y-2 hover:shadow-md hover:shadow-orange-300 transition-all duration-300 rounded shadow w-full max-w-sm mx-auto">
                <div className="relative">
                  <img
                    className="w-full h-52 rounded-t object-cover object-center"
                    // src={`../src/assets/${job.photoUrls[0]}`}
                    src={`/public/${job.photoUrls[0]}`}
                    alt="photo"
                  />
                  {job.featured && (
                    <div className="absolute top-10 -right-2">
                      <div className="w-24 h-7 bg-orange-600 text-white shadow font-bold uppercase flex justify-center items-center ">
                        Featured
                      </div>
                      <div className="absolute right-0 arrow-top-right "></div>
                    </div>
                  )}
                </div>

                <div className="border-b border-gray-100 p-3 space-y-4">
                  {/* =========================Title============================ */}
                  <p className="font-bold text-sm text-gray-400">
                    {job.category}
                  </p>
                  <p className="font-bold text-xl uppercase focus:outline-none">
                    {job.title}{" "}
                  </p>

                  {/* ==================Location and Type Job=================== */}
                  <div className="flex justify-between items-center capitalize text-lg ">
                    <p className="text-gray-900">{job.address.city}</p>
                    <p className="bg-orange-600 text-white px-1 py-px font-bold text-sm rounded-sm">
                      {job.jobType}
                    </p>
                  </div>
                </div>

                {/* =================QrCode and Salary===================== */}
                <div className="flex justify-between items-center p-3">
                  <div className="flex space-x-2">
                    <div className="relative">
                      <CTooltip
                        content={
                          <div
                            id={`tooltip-${job.id}`}
                            className="absolute -top-[192px] -left-10 bg-gray-900 rounded-sm text-white py-4 px-4 space-x-2 text-center text-xs"
                          >
                            <QRCodeSVG
                              value={job.companyWebsite}
                              className="border-2 border-white p-px"
                            />
                            <p>Scan QRCode to view on mobile device.</p>
                            <div className="absolute -bottom-1 left-5 arrow-bottom"></div>
                          </div>
                        }
                      >
                        <CButton>
                          <svg
                            data-twe-toggle="collapse"
                            data-twe-target={`#tooltip-${job.id}`}
                            aria-expanded="false"
                            aria-controls={`tooltip-${job.id}`}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                            />
                          </svg>
                        </CButton>
                      </CTooltip>
                    </div>

                    {/* ==========Heart icon========== */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center">
                    <p className="font-bold text-lg">
                      ${`${job.salary}`}{" "}
                      <span className="text-xs">
                        {job.salaryType === "annually"
                          ? "P.A"
                          : job.salaryType === "monthly"
                          ? "P.M"
                          : "P.H"}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default JobCard;
