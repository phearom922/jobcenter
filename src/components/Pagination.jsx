function Pagination(props) {
    const { jobs, activeIndex, handleNext, handlePrev } = props;
  
    return (
      <div className="flex justify-center">
        <ul className="inline-flex items-center space-x-3">
          <li
            onClick={handlePrev}
            className={`cursor-pointer py-2 px-3 select-none text-orange-600 bg-white rounded hover:bg-gray-200 ${
              activeIndex === 1 && "invisible"
            }`}
          >
            <svg
              className="h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          {jobs.map(
            (job, i) =>
              i + 1 <= Math.ceil(jobs.length / 4) && (
                <li
                  className={`cursor-pointer rounded py-2 px-4 select-none leading-tight ${
                    activeIndex === i + 1
                      ? "text-white bg-orange-500 hover:bg-orange-600"
                      : "text-orange-600 bg-white hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </li>
              )
          )}
          <li
            onClick={handleNext}
            className={`cursor-pointer py-2 px-3 select-none text-orange-600 bg-white rounded hover:bg-gray-200 ${
              activeIndex === Math.ceil(jobs.length / 4) && "invisible"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Pagination;
  