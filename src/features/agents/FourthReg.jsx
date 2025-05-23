import React, { useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function FourthReg() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 25 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size must be less than 25MB");
    }
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
          <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#5B21B6] text-[#5B21B6]">
            2
          </span>
          <span className="text-[#5B21B6]">Documents</span>
        </div>
      </div>

      {/* Upload Section */}
      <div className="space-y-6 mb-12">
        <h1 className="text-2xl font-semibold text-center">Upload File</h1>

        <div className="border-4 border-dashed border-gray-200 rounded-2xl p-8">
          <label className="flex flex-col items-center justify-center w-full h-96 cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,.pdf"
            />
            <CiFileOn className="w-16 h-16 text-gray-400 mb-4" />
            <div className="text-center">
              {file ? (
                <span className="text-[#5B21B6]">{file.name}</span>
              ) : (
                <span>
                  Drop your image here or{" "}
                  <span className="text-[#5B21B6]">browse</span>
                </span>
              )}
            </div>
          </label>
        </div>

        <p className="text-right text-gray-600">Maximum Size: 25 MB</p>
      </div>

      {/* Progress Bar and Navigation */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-20 h-2 rounded-full bg-[#5B21B6]"
            />
          ))}
        </div>

        <div className="flex gap-4">
          <Link to="/agent/third">
            <button className="px-8 py-4 rounded-lg bg-gray-200 font-semibold hover:bg-gray-300 transition-colors">
              Back
            </button>
          </Link>
          <Link to="/agent/congrats">
            <button className="px-8 py-4 rounded-lg bg-[#5B21B6] text-white font-semibold hover:bg-purple-900 transition-colors">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
