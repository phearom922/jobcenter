import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="border-b border-gray-50">
      {/* Header */}
      <div className="border border-l-0 border-r-0 ">
        <div className="2xl:w-8/12 2xl:mx-auto">
          <div className="py-6 px-10 font-bold text-orange-600 2xl:px-0 text-2xl">
            Contact
          </div>
        </div>
      </div>

      {/* Container */}
      <div
        className="flex flex-col space-y-10 px-10 py-10
                    md:px-10 md:flex-row md:space-x-10 md:space-y-0 md:py-10
                    2xl:w-8/12 2xl:px-0 2xl:mx-auto 2xl:py-16"
      >
        <div className="flex items-center  w-full">
          <img
            className="rounded-md overflow-hidden"
            src="/public/contactUs.jpg"
            alt=""
          />
        </div>

        <div className="flex items-center w-full space-y-5 ">
          <div className="space-y-2 md:py-4">
            <h3 className="font-bold text-orange-600 uppercase">Let's Talk</h3>
            <h1 className="font-bold text-2xl text-gray-900">
              Got any Questions? Don's <br />
              hesitate to get in touch.
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur amet consectetur
              adipisicing elit. Quis, dolorem.
            </p>
            {/* ============address======== */}
            <div>
              <div className="flex items-center space-x-4 ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-orange-600 text-xl"
                />
                <div>
                  <h3 className="font-bold text-xl">Address</h3>
                  <p className="text-gray-600 font-medium">
                    Phnom Penh Sen Sok, Cambodia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 ">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-orange-600 text-xl"
                />
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-gray-600 font-medium">(+855) 10255585</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-orange-600 text-xl"
                />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-gray-600 font-medium">
                    ron_phearom@hotmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send Feedback */}
      <div className="pb-16 pt-6 border-y-6 ">
        <div
          className="flex flex-col space-y-5 p-10 rounded bg-white shadow border
            md:space-y-0 md:flex-row md:space-x-5
            2xl:w-8/12 2xl:mx-auto"
        >
          <div className="w-full space-y-5">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange-600 text-4xl"
            />
            <h2 className="text-gray-900 font-bold text-2xl">
              Your Are like that you see. Let's work together
            </h2>
            <p className="break-all font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit
              amet consectetur adipisicing elit. Facilis, tempora.
            </p>
          </div>

          <div className="w-full space-y-5">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-50 p-2 shadow-inner rounded border w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-50 p-2 shadow-inner rounded border w-full focus:outline-none"
              />
            </div>
            <textarea
              className="bg-gray-50 p-2 shadow-inner rounded border w-full focus:outline-none"
              rows={7}
              placeholder="Text Message"
            ></textarea>
            <hr />
            <button className="bg-orange-600 font-semibold py-2 px-7 rounded text-white focus:outline-none flex justify-self-end">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
