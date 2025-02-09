import React, { useState } from "react";

const Description = (props) => {
  const {
    characterCount,
    calculateCharacterCount,
    description,
    handleSetDescription,
    // keywords,
    // handleSetKeyWorks,
    tags,
    removeTag,
    handleKeyDown,
  } = props;

  const handleOnChange = ({ target }) => {
    calculateCharacterCount(target.value.length);
    handleSetDescription(target.value);
  };

  // ******Properties target គឺជា Keywork ត្រូវតែមានពាក្យនេះចូល
  // we can write like that
  // const handleOnChange = (e) => {
  //     // calculateCharacterCount(e.target.value.length);
  //   };

  // =================================Tag===============================

  // =================================Tag===============================

  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="flex justify-center font-bold text-white items-center bg-orange-600 h-8 w-8 rounded-full">
            02
          </div>
          <h3 className="text-xl font-bold">Description</h3>
        </div>
        <p className="text-xs flex justify-end">
          <span className="text-orange-600 text-xs mr-1 font-bold">
            {characterCount}
          </span>{" "}
          Characters remaining
        </p>
        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold after:content-['*'] after:text-red-600 after:text-lg">
            Description.{" "}
          </h3>
          <textarea
            onChange={handleOnChange}
            maxLength={200}
            rows={8}
            className="border p-4 w-full rounded shadow focus:ring-2 ring-orange-300 focus:outline-none"
            name="text"
            placeholder="Text Message"
            value={description ? description : ""}
          ></textarea>
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold">Keywords. </h3>
          <div className=" flex flex-wrap w-full ring-orange-300 bg-gray-100 py-2 px-2 rounded border border-gray-400">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex justify-center mr-1  px-2 py-1 rounded items-center text-white border bg-orange-600 "
              >
                <span>{tag}</span>
                <span
                  onClick={() => removeTag(index)}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>
            ))}
            <input
              placeholder="Type Keyword"
              onKeyDown={handleKeyDown}
              onChange={({ target }) => handleSetKeyWorks(target.value)}
              className="px-2 bg-transparent focus:outline-none"
              // className="w-full focus:ring-2 ring-orange-300  bg-gray-100 py-2 px-3 rounded border focus:outline-none border-gray-400"
              type="text"
              // value={keywords ? keywords : ""}
            />
          </div>
          <p className="text-xs text-gray-500">
            Separate each keyword with a comma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
