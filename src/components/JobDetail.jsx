import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const JobDetail = (props) => {
  const { job, handleUpdateJob } = props;

  const [copy, setCopy] = useState("Copy");
  const handleCopy = () => {
    navigator.clipboard.writeText(job.companyWebsite);
    setCopy("Copied!");
    setTimeout(() => {
      setCopy("Copy");
    }, 3000);
  };

  return (
    <div className="flex gap-8 my-12">
      <div className="w-7/12 space-y-8">
        <div className="border rounded shadow">
          <div className="flex relative justify-between items-center border-b py-3 px-6">
            <p className="font-bold text-xl text-gray-900 capitalize">
              Description
            </p>
            {job.featured ? (
              <button
                onClick={handleUpdateJob}
                className="bg-green-600 cursor-not-allowed flex space-x-1 justify-center items-center text-white rounded px-4 py-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 transition-all duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Verified</p>
              </button>
            ) : (
              <button
                onClick={handleUpdateJob}
                id="button"
                className="bg-orange-600 text-white rounded px-4 py-1"
              >
                Verify
              </button>
            )}
          </div>

          <div className="space-y-4 p-6">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              unde autem, laudantium consequuntur quisquam, voluptates pariatur
              animi veniam praesentium assumenda possimus maiores dolore
              doloribus obcaecati nostrum sint recusandae aperiam nisi!
            </h3>
            <div>
              <h1 className="font-bold text-xl">Responsibility</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dicta magni nisi est temporibus, fuga repudiandae illo aut hic
                velit ullam vel, obcaecati fugit, dolor perspiciatis porro ipsa
                doloribus corporis.
              </h3>
            </div>
            <div>
              <h1 className="font-bold text-xl">Qualification</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dicta magni nisi est temporibus, fuga repudiandae illo aut hic
                velit ullam vel, obcaecati fugit, dolor perspiciatis porro ipsa
                doloribus corporis.
              </h3>
            </div>
          </div>
        </div>

        <div className="flex space-x-6 p-4 border rounded shadow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <div className="flex w-full items-center justify-between space-x-4 relative">
            <div>
              <h3 className="text-lg font-bold">Employer Detail</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                ratione.
              </p>
            </div>
            <button
              id="button"
              className="px-4 rounded text-white py-1 bg-orange-600"
            >
              Message
            </button>
          </div>
        </div>
      </div>

      {/* ==========Title Side */}
      <div className="w-5/12 space-y-8">
        <div className="flex justify-between items-center justify-items-center  border-b pb-4">
          <p className="font-bold text-xl text-gray-900 uppercase">
            {job.title}
          </p>
          <div>
            <img
              className="w-14 h-14 border rounded-full object-cover"
              src={`/public/${job.logoUrl}`}
              alt="Logo Company"
            />
          </div>
        </div>

        <div className="relative">
          <button
            id="button"
            className="bg-orange-600 text-white text-lg shadow rounded py-2 w-full focus:outline-none"
          >
            Apply Now
          </button>
        </div>

        <div className="border rounded p-4 shadow space-y-5">
          <div className="flex justify-between items-center ">
            <p>Salary</p>
            <p>${job.salary}</p>
          </div>

          <div className="flex justify-between items-center ">
            <p>Country</p>
            <p>{job.address.country}</p>
          </div>

          <div className="flex justify-between items-center ">
            <p>City</p>
            <p>{job.address.city}</p>
          </div>
        </div>

        <div className="border rounded shadow">
          <p className="p-4 border-b ">Location</p>
          <p className="p-4">
            {job.address.city}, {job.address.country}
          </p>
        </div>

        <div className="space-y-4 border rounded shadow p-4">
          <p className="font-bold">Share this link via:</p>
          <ul className="flex space-x-4">
            <li className="text-blue-800 cursor-pointer">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="text-red-600 cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li className="text-blue-500 cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li className="text-black cursor-pointer">
              <FontAwesomeIcon icon={faTiktok} />
            </li>
          </ul>
          <p className="font-bold">Or copy link:</p>

          <div className="border p-2 rounded">
            <div className="flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <p>{job.companyWebsite}</p>
              <button
                onClick={handleCopy}
                className={
                  copy != "Copy"
                    ? "px-3 py-1 border text-white bg-orange-600 rounded"
                    : "px-3 py-1 border hover:text-white hover:bg-orange-600 rounded"
                }
              >
                {copy}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
