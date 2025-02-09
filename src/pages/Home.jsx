import React, { useEffect } from "react";
import JobCard from "../components/JobCard";
import MapBanner from "../components/MapBanner";
import GuideLines from "../components/GuideLines";
import { useState } from "react";
import { Link } from "react-router-dom";



const Home = () => {
  
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5174/job");
    const jobs = await res.json();

    setJobs(jobs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full h-96">
        <MapBanner />
      </div>

      <div className="
      px-10
      2xl:px-0
      2xl:w-8/12
      2xl:mx-auto
      md:p-10 ">
        <div className="flex justify-between items-center font-bold text-gray-900 my-7 max-w-sm mx-auto sm:max-w-full">
          <div>
            <p className="text-2xl">Featured <span className="text-orange-600">JOB</span></p>
            <hr className="bg-orange-600 w-24 h-1 " />
          </div>
          
          
          <Link
            to="searchable"
            className="bg-orange-600 py-2 text-white px-3 border rounded shadow focus:outline-none sm:px-7 "
          >
            View More
          </Link>
        </div>

        <JobCard jobs={jobs} />
      
      </div>

      <div className="px-10 sm:px-30 2xl:px-0 mt-10 bg-gray-50 ">
        <GuideLines />
      </div>

      
    </div>
  );
};

export default Home;
