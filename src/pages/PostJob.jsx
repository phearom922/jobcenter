



import React, { useEffect } from "react";
import PostJobStep from "../components/PostJobStep";
import CreateAJob from "../components/CreateAJob";
import Description from "../components/Description";
import Media from "../components/Media";
import { v4 as uuidv4 } from "uuid";

import Detail from "../components/Detail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  // =========================Create a Job=================
  const [title, setTitle] = useState("");
  const handleTitle = (value) => {
    setTitle(value);
  };

  const navigate = useNavigate();
  const [alertWarning, setAlertWarning] = useState(false);
  const handleSubmit = async () => {
    const job = {
      id: Date.now(),
      title,
      Btn01,
      behalfCompany,
      category,
      address,
      description,
      // keywords,
      tags,
      salary,
      salaryType,
      jobType,
      experience,
      companyName,
      companyWebsite,
      logoUrl,
      photoUrls,
      featured: false,
    };
    if (
      title &&
      category &&
      // keywords.length > 0 &&
      tags &&
      salary &&
      salaryType &&
      jobType &&
      logoUrl
    ) {
      const res = await fetch("http://localhost:5174/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      if (res.status === 201) {
        navigate("/");
      }
    } else {
      setAlertWarning(true);
    }
  };

  const [Btn01, setBtn01] = useState(false);
  const handleClickBtn1 = () => {
    setBtn01(!Btn01);
    setBtn02(false);
    setBehalfCompany("");
  };

  const [Btn02, setBtn02] = useState(false);
  const handleClickBtn2 = () => {
    setBtn02(!Btn02);
    setBtn01(false);
  };

  const [behalfCompany, setBehalfCompany] = useState("");
  const checkBehalfCompany = (value) => {
    setBehalfCompany(value);
  };

  const [category, setCategory] = useState("");
  const handleActiveCategory = ({ target }) => {
    setCategory(target.innerText);
  };
  const handleClearCategory = ({ target }) => {
    setCategory("");
  };

  const [address, setAddress] = useState({
    city: "",
    country: "",
  });
  const handleSetAddress = (location) => {
    setAddress((prev) => ({ ...prev, ...location }));
  };
  // =========================Create a Job=================

  // =========================Description=================
  const [characterCount, setCharacterCount] = useState(0);
  const calculateCharacterCount = (characterLength) => {
    let maxLength = 200;
    maxLength -= characterLength;
    setCharacterCount(maxLength);
  };

  useEffect(() => {
    setCharacterCount(200);
  }, []);

  const [description, setDescription] = useState(null);
  const handleSetDescription = (NewValue) => {
    setDescription(NewValue);
  };

  const [keywords, setKeyWorks] = useState([]);
  const handleSetKeyWorks = (NewKeywords) => {
    NewKeywords = NewKeywords.toLowerCase().split(",");
    setKeyWorks(NewKeywords);
  };

  // Method 2
  const [tags, setTags] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  // =========================Description=================

  // =========================Detail=================

  let [salary, setSalary] = useState(0);
  const handleSetSalary = (value) => {
    setSalary(value);
  };

  let [salaryType, setSalaryType] = useState("monthly");
  const handleSetSalaryType = (value) => {
    setSalaryType(value);
  };

  let [jobType, setJobType] = useState("full-time");
  const handleSetJobType = (value) => {
    setJobType(value);
  };

  let [experience, setExperience] = useState("bachelor-degree");
  const handleSetExperience = (value) => {
    setExperience(value);
  };

  let [companyName, setCompanyName] = useState("");
  const handleSetCompanyName = (value) => {
    setCompanyName(value);
  };

  let [companyWebsite, setCompanyWebsite] = useState("");
  const handleSetCompanyWebsite = (value) => {
    setCompanyWebsite(value);
  };

  // =========================Detail=================

  // =========================Media=================
  const [logoUrl, setLogoUrl] = useState(null);
  const uploadLogo = (url) => {
    setLogoUrl(url);
  };

  const [photoUrls, setPhotoUrls] = useState([]);
  const uploadPhoto = (url) => {
    setPhotoUrls((prev) => [...prev, url]);
  };
  // method-01 របៀបទី 1
  const removePhoto = (url) => {
    setPhotoUrls((prev) => prev.filter((photoUrl) => photoUrl !== url));
  };

  // method-02 របៀបទី 2
  // const removePhoto = (index) =>{
  // setPhotoUrls(photoUrls.filter((el, i) => i !==index))
  // }

  // =========================Media=================

  // ************Display Component Navigate**********

  let [displayComponent, setDisplayComponent] = useState(0);

  const nextNavigate = () => {
    displayComponent += 1;
    setDisplayComponent(displayComponent);
  };

  const backNavigate = () => {
    displayComponent -= 1;
    setDisplayComponent(displayComponent);
  };

  // ************Display Component Navigate**********
  return (
    <div className="border border-l-0 border-r-0 border-gray-50 py-12">
      <div
        className="px-10
          2xl:w-8/12 2xl:px-0 2xl:mx-auto"
      >
        <div
          className={`${
            alertWarning
              ? "w-full bg-yellow-200 text-yellow-800 border border-l-8 border-l-red-600 rounded text-lg shadow p-6 mb-3 flex justify-center items-center"
              : "w-0 h-0 overflow-hidden"
          }`}
        >
          <strong className="mr-1">Warning!</strong>You should check out all of
          those fields below.
          <button
            onClick={() => setAlertWarning(false)}
            className="box-content w-6 h-6 hover:bg-yellow-300 p-2 rounded ml-auto flex border-none text-2xl font-black items-center justify-center focus:outline-none hover:text-yellow-950 hover:opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className=" flex border-gray-300 shadow border rounded-md">
          <div className="relative w-4/12 h-auto shadow ">
            <img
              className="object-cover object-center rounded-l-md h-full"
              src={`/public/post-job.jpg`}
              alt="image post job"
            />
            <div ></div>
          </div>

          {/* ==========================Dynamic Component=============================== */}
          <div className="w-8/12 h-full rounded-r-md p-10  ">
            <div>
              {/* ++++++++++Create Job++++++++ */}
              {displayComponent === 0 ? (
                <CreateAJob
                  title={title}
                  handleTitle={handleTitle}
                  Btn01={Btn01}
                  handleClickBtn1={handleClickBtn1}
                  Btn02={Btn02}
                  handleClickBtn2={handleClickBtn2}
                  behalfCompany={behalfCompany}
                  checkBehalfCompany={checkBehalfCompany}
                  category={category}
                  handleActiveCategory={handleActiveCategory}
                  handleClearCategory={handleClearCategory}
                  address={address}
                  handleSetAddress={handleSetAddress}
                />
              ) : displayComponent === 1 ? (
                <Description
                  characterCount={characterCount}
                  calculateCharacterCount={calculateCharacterCount}
                  description={description}
                  handleSetDescription={handleSetDescription}
                  // keywords={keywords}
                  // handleSetKeyWorks={handleSetKeyWorks}
                  tags={tags}
                  removeTag={removeTag}
                  handleKeyDown={handleKeyDown}
                />
              ) : displayComponent === 2 ? (
                <Detail
                  salary={salary}
                  handleSetSalary={handleSetSalary}
                  salaryType={salaryType}
                  handleSetSalaryType={handleSetSalaryType}
                  jobType={jobType}
                  handleSetJobType={handleSetJobType}
                  experience={experience}
                  handleSetExperience={handleSetExperience}
                  companyName={companyName}
                  handleSetCompanyName={handleSetCompanyName}
                  companyWebsite={companyWebsite}
                  handleSetCompanyWebsite={handleSetCompanyWebsite}
                />
              ) : (
                <Media
                  logoUrl={logoUrl}
                  uploadLogo={uploadLogo}
                  photoUrls={photoUrls}
                  uploadPhoto={uploadPhoto}
                  removePhoto={removePhoto}
                />
              )}
            </div>

            {/* ==========================Dynamic Component=============================== */}

            {/*========= Navigation Button========== */}
            <div className="border-t border-gray-200 w-full my-8"></div>
            <div className="flex justify-between items-center">
              <div className="relative">
                <div>
                  {displayComponent === 0 ? (
                    ""
                  ) : (
                    <button
                      onClick={backNavigate}
                      id="button"
                      className="flex items-center px-5 py-2 border text-white bg-gray-900 border-gray-300 shadow rounded space-x-2"
                    >
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
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                      </svg>
                      <span>Back</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="relative">
                {displayComponent < 3 ? (
                  <button
                    onClick={nextNavigate}
                    id="button"
                    className="flex items-center bg-orange-600 px-5 py-2 border text-white border-gray-300 shadow rounded space-x-2"
                  >
                    <span>Next</span>
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
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    id="button"
                    className="flex items-center bg-orange-600 px-6 py-2 border text-white border-gray-300 shadow rounded space-x-2"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
            {/*========= Navigation Button========== */}
          </div>
        </div>
        {/* ==============Step===============*/}
        <PostJobStep />
      </div>
    </div>
  );
};

export default PostJob;
