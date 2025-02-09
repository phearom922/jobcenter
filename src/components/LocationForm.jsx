import React from "react";

const LocationForm = (props) => {
  const { handleShowLocation, address, handleSetAddress } = props;

  return (
    <div className="max-w-lg my-auto ">
      <form className="space-y-8 bg-white p-8 rounded ">
        <div className="space-y-8 flex flex-col max-w-lg">
          <div>
            <h1 className="font-bold text-gray-900 text-2xl">
              My Location Job
            </h1>
          </div>

          <div className="space-y-3">
            <label className="block text-lg font-bold" htmlFor="address">
              Full Address
            </label>
            <input
              disabled
              className="w-full capitalize bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-400 "
              id="address"
              type="text"
              placeholder={`${address.city}, ${address.country}`}
            />
          </div>
          <div className="flex space-x-5">
            <div className="w-full space-y-3">
              <label className="block text-lg font-bold " htmlFor="address">
                Country
              </label>
              <input
                value={address.country}
                className="w-full focus:ring-2 capitalize ring-orange-300 bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-400 "
                id="address"
                type="text"
                placeholder={`${address.country ? address.country : "Cambodia"}`}
                onChange={({ target }) =>
                  handleSetAddress({ country: target.value })
                }
              />
            </div>

            <div className="w-full space-y-3">
              <label className="block text-lg font-bold " htmlFor="city">
                City
              </label>
              <input
                value={address.city}
                className="w-full focus:ring-2 capitalize ring-orange-300 bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-400 "
                id="address"
                type="text"
                placeholder={`${address.city ? address.city : "Phnom Penh"}`}
                onChange={({ target }) =>
                  handleSetAddress({ city: target.value })
                }
              />
            </div>
          </div>
          <hr />
        </div>
        <button
          onClick={handleShowLocation}
          className=" bg-orange-600 text-white font-bold rounded py-2 px-7"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
