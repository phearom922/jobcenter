import React from "react";

const HighlightCard = () => {
  return (
    <div className="
    2xl:grid-cols-8 2xl:gap-4 2xl:grid 
    xl:grid-cols-5 xl:gap-4
    lg:grid-cols-4 lg:gap-2
    md:grid-cols-3 md:gap-2
    grid grid-cols-2 gap-2

    ">
      <div className="relative group cursor-pointer">
        <img src="/public/highlight1.jpg" alt="highlight1" />
        <div
          className="hidden absolute -top-16 -left-10 w-56 group-hover:block bg-white text-gray-900 rounded shadow
              border p-5 text-center leading-none "
        >
          <p>Customer Team Member</p>
          <div className="absolute -bottom-1.5 left-24 arrow-bottom-white"></div>
        </div>
      </div>
      <div>
        <img src="/public/highlight2.jpg" alt="highlight2" />
      </div>
      <div>
        <img src="/public/highlight3.jpg" alt="highlight3" />
      </div>
      <div>
        <img src="/public/highlight4.jpg" alt="highlight4" />
      </div>
      <div>
        <img src="/public/highlight5.jpg" alt="highlight5" />
      </div>
      <div>
        <img src="/public/highlight6.jpg" alt="highlight6" />
      </div>
      <div>
        <img src="/public/highlight7.jpg" alt="highlight7" />
      </div>
      <div>
        <img src="/public/highlight8.jpg" alt="highlight8" />
      </div>
    </div>
  );
};

export default HighlightCard;
