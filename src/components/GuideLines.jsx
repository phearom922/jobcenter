import React from "react";

const GuideLines = () => {
  return (
    <div className="py-12 2xl:w-8/12 2xl:mx-auto">
      <div className="space-y-10">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 pb-2">
            How to Post a Job?
          </h1>
          <h3 className="text-gray-900 text-xl">
            It's to quick to start and - Learn more.
          </h3>
        </div>

        <div className="relative gap-5 grid grid-cols-4">
          <hr className="w-full absolute top-7 border-gray-200" />

          {/* ===============Step-01============ */}
          <div className="space-y-5">
            <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
              01
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">STEP 01</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas minus ad quos commodi voluptate aut eum veritatis vitae
                nisi.
              </h3>
            </div>
          </div>

          {/* ===============Step-02============ */}
          <div className="space-y-5">
            <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
              02
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">STEP 02</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas minus ad quos commodi voluptate aut eum veritatis vitae
                nisi.
              </h3>
            </div>
          </div>

          {/* ===============Step-03============ */}
          <div className="space-y-5">
            <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
              03
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">STEP 03</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas minus ad quos commodi voluptate aut eum veritatis vitae
                nisi.
              </h3>
            </div>
          </div>

          {/* ===============Step-04============ */}
          <div className="space-y-5">
            <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
              04
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">STEP 04</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas minus ad quos commodi voluptate aut eum veritatis vitae
                nisi.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ====================Apply Jobs====================== */}
      <div className=" py-10">
        <h1 className="font-bold text-3xl text-gray-900 pb-2">
          How to Apply a Job?
        </h1>
        <h3 className="text-gray-900 text-xl">
          It's to quick to start and - Learn more.
        </h3>
      </div>
      {/* ============================Icon and Photos Apply Job=========================== */}
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 justify-between">
        {/* ======================icons================== */}
        <div className="relative space-y-10">
          {/* =================Step================ */}

          <div className="relative gap-5 space-y-5 ">
            <div className="absolute w-[0.8px] h-full left-7 bg-gray-200"></div>
            {/* ===============Step-01============ */}
            <div className="flex space-x-10 h-full">
              <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
                01
              </div>
              <div className="w-10/12 md:w-4/6 2xl:w-7/12 space-y-2">
                <h2 className="font-bold text-xl">STEP 01</h2>
                <h3 className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus voluptas minus ad quos commodi voluptate aut eum
                  veritatis vitae nisi.
                </h3>
              </div>
            </div>

            {/* ===============Step-02============ */}
            <div className="flex space-x-10 h-full">
              <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
                02
              </div>
              <div className="w-10/12 md:w-4/6 2xl:w-7/12 space-y-2">
                <h2 className="font-bold text-xl">STEP 02</h2>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus voluptas minus ad quos commodi voluptate aut eum
                  veritatis vitae nisi.
                </h3>
              </div>
            </div>

            {/* ===============Step-03============ */}
            <div className="flex space-x-10 h-full">
              <div className="flex relative justify-center items-center bg-orange-600 z-10 text-2xl font-bold text-white rounded-full w-14 h-14">
                03
              </div>
              <div className="w-10/12 md:w-4/6 2xl:w-7/12 space-y-2">
                <h2 className="font-bold text-xl">STEP 03</h2>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus voluptas minus ad quos commodi voluptate aut eum
                  veritatis vitae nisi.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-2xl space-y-2">
            <div className="w-full rounded-md overflow-hidden">
              <img
                src={`/public/job-01.jpg`}
                alt="guideline"
                className="object-cover object-center w-full max-h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-full rounded-md overflow-hidden">
                <img
                  src={`/public/job-02.jpg`}
                  alt="Job2"
                  className="object-cover object-center w-full max-h-full"
                />
              </div>
              <div className="w-full rounded-md overflow-hidden">
                <img
                  src={`/public/job-03.jpg`}
                  alt="job3"
                  className="object-cover object-center w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideLines;
