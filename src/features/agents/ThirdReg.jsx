import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ThirdReg() {
  const [selectedId, setSelectedId] = useState("");

  const idOptions = [
    {
      label: "National Identification Number",
      value: "nin",
      name: "idType",
    },
    {
      label: "Driver License",
      value: "license",
      name: "idType",
    },
    {
      label: "Passport",
      value: "passport",
      name: "idType",
    },
  ];

  const handleOptionChange = (value) => {
    setSelectedId(value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Progress Indicator */}
      <div className="flex items-center gap-4 justify-center mb-12">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#5B21B6] text-[#5B21B6]">
            1
          </span>
          <span className="text-[#5B21B6]">Personal Information</span>
          <div className="w-32 h-[3px] bg-[#5B21B6]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-800 text-purple-800">
            2
          </span>
          <span className="text-[#5B21B6]">Documents</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6 mb-12">
        <h1 className="text-2xl font-semibold">
          Upload a government issued identification card
        </h1>
        <p className="text-gray-600">
          Choose a government identification card and upload
        </p>

        {/* ID Options */}
        <div className="space-y-4">
          {idOptions.map((option, index) => (
            <div
              key={index}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedId === option.value
                  ? "border-purple-800"
                  : "border-gray-300 hover:border-purple-800"
              }`}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={option.name}
                  value={option.value}
                  checked={selectedId === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className="w-4 h-4 text-purple-800 focus:ring-purple-800"
                />
                <span className="text-lg">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar and Navigation */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-20 h-2 rounded-full ${
                index < 3 ? "bg-[#5B21B6]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <Link to="/agent/second">
            <button className="px-8 py-4 rounded-lg bg-gray-200 font-semibold hover:bg-gray-300 transition-colors">
              Cancel
            </button>
          </Link>
          <Link to="/agent/fourth">
            <button className="px-8 py-4 rounded-lg bg-[#5B21B6] text-white font-semibold hover:bg-purple-900 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
