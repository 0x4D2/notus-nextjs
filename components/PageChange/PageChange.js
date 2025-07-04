import React from "react";

export default function PageChange(props) {
  return (
    <div>
      {/* Removed the image, replaced with a solid color background */}
      <div
        className="fixed z-40 w-full h-full top-0 left-0 bg-gray-900"
        style={{}}
      ></div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"></div>
      <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block mb-4">
          <i className="fas fa-circle-notch animate-spin text-white mx-auto text-6xl"></i>
        </div>
        <h4 className="text-lg font-medium text-white">
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
