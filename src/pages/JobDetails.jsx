import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import JobDetail from "../components/JobDetail";
import JobCard from "../components/JobCard";

const JobDetails = () => {
  let { id } = useParams();

  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5174/job");
    const jobs = await res.json();

    const response = await fetch(`http://localhost:5174/job/${id}`);
    const job = await response.json();

    setJobs(jobs);
    setJob(job);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  const handleUpdateJob = async () => {
    await fetch(`http://localhost:5174/job/${id}`, {
      method: "PUT",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...job, featured: true }),
    });
    fetchData();
  };

  return (
    <div>
      {job && (
        <div>
          <div className="border-t border-b py-2 bg-gray-50">
            <div className="flex items-center space-x-2 text-gray-500 2xl:w-8/12 2xl:mx-auto">
              <Link to="/" className="hover:text-orange-600">
                Home
              </Link>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p>{job.category}</p>
            </div>
          </div>

          <div className="2xl:w-8/12 2xl:mx-auto">
            <JobDetail job={job} handleUpdateJob={handleUpdateJob} />
          </div>

          <div className="border-t-2 py-12 px-10 2xl:px-0">
            <div className="2xl:w-8/12 2xl:mx-auto">
              <h1 className="max-w-full font-bold text-gray-900 text-2xl">
                Recommended for you
              </h1>
              <JobCard jobs={jobs} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
