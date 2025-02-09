import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "./MainNav.css";





const MainNav = () => {
  return (
    <div className="flex items-center bg-white shadow-sm border-b py-2">
      <div className="flex justify-between w-full items-center px-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto" >
        <div className="flex items-center space-x-3 text-gray-900 font-normal text-sm">
          <NavLink className="focus:outline-none" to="/">Home</NavLink><p>|</p>
          <NavLink className="focus:outline-none" to="about-us">About Us</NavLink><p>|</p>
          <NavLink className="focus:outline-none" to="contact-us">Contact Us</NavLink>
        </div>
{/* icon navbar left */}
        <div>
          <ul className="flex items-center space-x-2">
            <li className="cursor-pointer"><FontAwesomeIcon icon={faFacebook} /></li>
            <li className="cursor-pointer"><FontAwesomeIcon icon={faYoutube} /></li>
            <li className="cursor-pointer"><FontAwesomeIcon icon={faTwitter} /></li>
            <li className="cursor-pointer"><FontAwesomeIcon icon={faTiktok} /></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default MainNav;
