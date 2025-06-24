import React from "react";
import { Outlet } from "react-router-dom";

export default function Registration() {
  return (
    <div className="min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <img
          src="/MainLodgifyLogo.png"
          alt="Lodgify Logo"
          className="w-40 mb-8"
        />

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">
            Get Started
          </h1>
          <p className="text-slate-800 font-medium max-w-3xl mx-auto">
            Welcome to LodgifyNG - Let's create your own account
          </p>
        </div>

        {/* Registration Steps Content */}
        <div className="bg-white rounded-lg shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
