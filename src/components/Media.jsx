import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faFileImage,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

const types = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/svg",
  "image/webp",
];
const Media = (props) => {
  const { logoUrl, uploadLogo, photoUrls, uploadPhoto, removePhoto } = props;

  const handleUploadImage = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type) && e.target.alt == "logo") {
      uploadLogo(selected.name);
    }

    if (selected && types.includes(selected.type) && e.target.alt == "photo") {
      if (photoUrls.includes(selected.name)) {
        alert("Already Add");
      } else {
        uploadPhoto(selected.name);
      }
    }
  };




  const handleRemoveImage = (url) => {
    if (!url) {
      uploadLogo(null);
    } else {
      removePhoto(url);
    }
  };

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="flex justify-center font-bold text-white items-center bg-orange-600 h-8 w-8 rounded-full">
            04
          </div>
          <h3 className="text-xl font-bold">Media</h3>
        </div>

        <div className="flex items-center">
          <h3 className="w-2/12 font-semibold">Company Logo</h3>

          <hr className="w-10/12" />
        </div>

        {logoUrl ? (
          <div className="w-28 h-28 relative ">
            <label onChange={handleUploadImage}>
              <img
                src={`/public/${logoUrl}`}
                alt={logoUrl}
                className="w-28 h-28 object-cover object-center border rounded cursor-pointer"
              />
              <input className="hidden" type="file" alt="logo" />
            </label>
            <span
              onClick={() => handleRemoveImage(null)}
              id="logo"
              className="absolute left-1/2 -ml-6 top-1/2 w-10 h-10 rounded-full
            bg-gray-900 bg-opacity-70 cursor-pointer
            flex justify-center items-center hover:ring-white hover:ring "
            >
              <FontAwesomeIcon icon={faTrashCan} className=" text-orange-600" />
            </span>
          </div>
        ) : (
          <label
            onChange={handleUploadImage}
            className="flex flex-col justify-center border rounded cursor-pointer items-center w-1/4 h-32 space-y-1 "
          >
            <FontAwesomeIcon
              icon={faFileImage}
              className="w-10 h-10 text-orange-600"
            />
            <span className="text-gray-600 text-sm uppercase select-none">
              Select a photos
            </span>
            <input className="hidden" type="file" alt="logo" />
          </label>
        )}
      </div>

      <div className="w-full space-y-3">
        <div className="flex items-center justify-between space-x-1">
          <h3 className="w-2/12 font-semibold">My Photos</h3>
          <hr className="w-8/12" />
          <h3 className="flex justify-end w-2/12 ">
            <span className="font-semibold text-orange-600">
              {photoUrls.length}
            </span>
            /6
          </h3>
        </div>

        <label
          onChange={handleUploadImage}
          className={
            photoUrls.length > 5
              ? "flex flex-col justify-center border rounded cursor-not-allowed items-center w-1/4 h-32 space-y-1 "
              : "flex flex-col justify-center border rounded cursor-pointer items-center w-1/4 h-32 space-y-1 "
          }
        >
          <FontAwesomeIcon
            icon={faFileImage}
            className={
              photoUrls.length > 5
                ? "w-10 h-10 text-gray-400 opacity-80 "
                : "w-10 h-10 text-orange-600"
            }
          />
          <span className="text-gray-600 text-sm uppercase select-none">
            add new
          </span>
          {photoUrls.length > 5 ? (
            <input
              className="hidden cursor-not-allowed"
              disabled
              type="file"
              alt="photo"
            />
          ) : (
            <input className="hidden" type="file" alt="photo" />
          )}
        </label>
        
        <div className="flex space-x-1 text-yellow-400 text-sm">
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
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <span>we support .jpg, .jpeg, .webp, .png and .svg images only.</span>
        </div>
        <ul className="grid grid-cols-3 gap-4 items-center justify-center">
          {photoUrls.map((url) => (
            <li key={url} className="rounded border p-1 space-y-2">
              <img
                className="w-full h-40 object-cover object-center rounded"
                src={`/public/${url}`}
                alt={url}
              />
              <div
                onClick={() => handleRemoveImage(url)}
                id="photo"
                className="w-full h-7 rounded cursor-pointer flex justify-center items-center select-none bg-orange-600 text-white"
              >
                Remove
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media;
