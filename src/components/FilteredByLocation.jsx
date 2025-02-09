function FilteredByLocation(props) {
  const { toggleLocationForm, locations, handleSetLocation } = props;

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
          Location
        </h1>

        <div className="px-5 w-full">
          <select
            onChange={({ target }) => {
              handleSetLocation(target.value);
              toggleLocationForm();
            }}
            className="w-full border rounded p-2 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600"
          >
            <option hidden>any</option>
            {locations.length > 0 &&
              locations.map((address) => (
                <option value={address.city} key={address.city}>
                  {address.city}
                </option>
              ))}
          </select>
        </div>

        <button
          onClick={toggleLocationForm}
          className="absolute left-5 bottom-5 bg-orange-600 text-white py-2 px-12 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default FilteredByLocation;
