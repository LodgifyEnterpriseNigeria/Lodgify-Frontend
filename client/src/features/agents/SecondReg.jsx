import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SecondReg() {
  const [formData, setFormData] = useState({
    cacNumber: "",
    cacCertificate: null,
    tinNumber: "",
    tinCertificate: null,
  });

  const documentSections = [
    {
      title: "Nigerian Corporate Affairs Commission Registration (CAC)",
      fields: [
        {
          label: "CAC Registration Number",
          name: "cacNumber",
          type: "number",
          placeholder: "e.g 2345667",
        },
        {
          label: "CAC Certification",
          name: "cacCertificate",
          type: "file",
          placeholder: "Drag & Drop your image or browse",
        },
      ],
    },
    {
      title: "Tax Identification Number Registration (TIN)",
      fields: [
        {
          label: "TIN Registration Number",
          name: "tinNumber",
          type: "number",
          placeholder: "e.g 345678",
        },
        {
          label: "TIN Certification",
          name: "tinCertificate",
          type: "file",
          placeholder: "Drag & Drop your image or browse",
        },
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
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

      <form onSubmit={handleSubmit}>
        {documentSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="space-y-2">
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
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    required
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Progress Bar and Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-20 h-2 rounded-full ${
                  index < 2 ? "bg-[#5B21B6]" : "bg-gray-200"
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
            <Link to="/agent/third">
              <button className="px-8 py-4 rounded-lg bg-[#5B21B6] text-white font-semibold hover:bg-purple-900 transition-colors">
                Next
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
