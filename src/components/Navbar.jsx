import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleClick = () => {
    setShowMenuBar(!showMenuBar);
  };
  return (
    <div className="relative flex-col items-center h-auto bg-white z-10">
      <div className="flex justify-between items-center p-10 w-full 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        {/* =========Logo========== */}
        <div className="text-gray-900 font-bold text-2xl uppercase">
          <NavLink to="/" className="group relative ">
            <p>
              Job<span className="text-orange-600">Center</span>
            </p>
            <hr className=" bg-orange-600 w-0 h-1 absolute left-0 group-hover:left-0 duration-300 group-hover:w-11 transition-all" />
          </NavLink>
        </div>

        <div>
          <nav className="hidden md:flex items-center space-x-3 text-gray-900 font-medium">
            <NavLink to="/">Home</NavLink>
            <p>|</p>
            <NavLink to="contact-us">Contact</NavLink>
            <p>|</p>
            <NavLink to="searchable">Search</NavLink>
            <p>|</p>
            <NavLink to="page-form">Form</NavLink>
            <p>|</p>
            <Link className="focus:outline-none relative" to="post-job">
              <button id="button" className="bg-orange-600 px-2 text-white">
                Post Job
              </button>
            </Link>
          </nav>

          {/*================= hamburger icon======================== */}
          <div className="md:hidden" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-7 w-7 cursor-pointer text-gray-900 hover:text-orange-600 transform duration-10 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>

      {showMenuBar ? (
        <div className="md:hidden flex absolute flex-col bg-orange-400 bg-opacity-80 backdrop-blur-sm items-center space-y-5 py-5 w-full h-lvh">
          <NavLink
            className="text-white hover:text-amber-700 text-xl transform "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-white hover:text-amber-700 text-xl"
            to="searchable"
          >
            Search
          </NavLink>
          <Link className="focus:outline-none relative" to="post-job">
            <button
              id="button"
              className="bg-orange-600 px-52 py-3 rounded-md text-xl text-white"
            >
              Post Job
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
