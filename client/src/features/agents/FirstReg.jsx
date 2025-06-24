import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FirstReg() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const formFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "e.g Cletus Daniels",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email@example.com",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "+234",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Your address",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Progress Indicator */}
      <div className="flex items-center gap-4 justify-center mb-12">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-800 text-purple-800">
            1
          </span>
          <span className="text-purple-800">Personal Information</span>
        </div>
        <div className="w-32 h-[3px] bg-purple-800" />
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-800 text-gray-800">
            2
          </span>
          <span className="text-gray-800">Documents</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {formFields.map((field, index) => (
          <div key={index} className="space-y-2">
            <label
              htmlFor={field.name}
              className="block font-semibold text-gray-700"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]"
              required
            />
          </div>
        ))}
      </form>

      {/* Progress Bar and Navigation */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-20 h-2 rounded-full ${
                index === 0 ? "bg-[#5B21B6]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <Link to="/">
            <button className="px-8 py-4 rounded-lg bg-gray-200 font-semibold hover:bg-gray-300 transition-colors">
              Cancel
            </button>
          </Link>
          <Link to="/agent/second">
            <button className="px-8 py-4 rounded-lg bg-[#5B21B6] text-white font-semibold hover:bg-purple-900 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
