import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTiktok,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="pt-10 pb-5 border-t-4 border-amber-600 bg-gray-900 mt-10">
      {/* =======================main container========================== */}
      <div className="flex flex-col justify-between 2xl:w-8/12 2xl:mx-auto">
        {/* primary box */}
        <div className="grid grid-rows-4 gap-4 md:grid-rows-1 md:grid-cols-10 md:gap-4 px-10 2xl:px-0 2xl:gap-5">
          {/* col-1 */}
          <div className="col-span-3">
            <h3 className="text-white capitalize font-bold text-4xl pb-4 ">
              JOB <span className="text-orange-600">CENTER</span>
            </h3>
            <h5 className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
              facilis!
            </h5>
          </div>
          {/* col-2 */}
          <div className="col-span-2">
            <h3 className="capitalize text-white font-bold text-2xl pb-4">
              Useful Links
            </h3>
            <ul className="text-white">
              <li>Home</li>
              <li>About Us</li>
              <li>How is Works</li>
              <li>Easy to Apply</li>
            </ul>
          </div>
          {/* col-3 */}
          <div className="col-span-2">
            <h3 className="capitalize text-white font-bold text-2xl pb-4">
              Quick Search
            </h3>
            <ul className="text-white">
              <li>Search</li>
              <li>Popular</li>
              <li>New Added</li>
              <li>Most Relevant</li>
            </ul>
          </div>
          {/* col-4 */}
          <div className="col-span-3">
            <h3 className="capitalize text-white font-bold text-2xl pb-4">
              Joint Our Newsletter
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id!
            </p>

            <div className="flex py-3">
              <input
                type="email"
                id="email"
                placeholder="Your email address here..."
                className="w-full  py-1 px-2 border rounded-l focus:outline-none placeholder:text-sm focus:border-orange-600 focus:bg-orange-100"
              />
              <label
                htmlFor="email"
                className="bg-orange-600 text-white rounded-r px-3 py-2 cursor-pointer flex justify-center items-center"
              >
                Join
              </label>
            </div>

            <p className="text-white text-xs">
              We'll never share your details.
            </p>
          </div>
        </div>

        {/* =================================secondary box============================ */}
        <div className="text-white flex justify-between items-end mt-10 px-10 2xl:px-0 2xl:mt-20">
          {/* 2025 Copyright */}
          <div className="font-bold">&#169;2025 copyright</div>

          {/* icon left */}
          <div className="text-white">
            <ul className="flex items-center space-x-2">
              <li className="cursor-pointer">
                <FontAwesomeIcon icon={faTelegram} />
              </li>
              <li className="cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} />
              </li>
              <li className="cursor-pointer">
                <FontAwesomeIcon icon={faTiktok} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
