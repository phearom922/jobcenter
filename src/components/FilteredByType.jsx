function FilteredByType(props) {
  const { types, handleSetType, toggleTypeForm } = props;
  const handleOnChange = (value) => {
    handleSetType(value);
    setTimeout(() => {
      toggleTypeForm();
    }, 500);
  };

  return (
    <div>
      <div className="relative bg-white h-96 rounded overflow-hidden flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-2/5 absolute top-0"
        >
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <h1 className="absolute top-10 font-bold text-4xl text-white capitalize">
          Type
        </h1>

        <ul className="space-y-2 w-full mt-10">
          {types.map((job) => (
            <li key={job.id} className="px-5 w-full">
              <label className="flex justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <input
                    onChange={() => handleOnChange(job.jobType)}
                    type="checkbox"
                    className="rounded accent-orange-600 scale-125"
                  />
                  <label className="text-lg select-none">{job.jobType}</label>
                </div>

                <div className="bg-orange-600 text-white h-6 w-6 rounded-full flex justify-center items-center">
                  {job.amount}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilteredByType;
