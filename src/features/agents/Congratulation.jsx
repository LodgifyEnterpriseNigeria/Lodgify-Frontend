import React from 'react'
import { Link } from 'react-router-dom'

export default function Congratulation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      {/* Logo */}
      <img 
        src="/MainLodgifyLogo.png" 
        alt="Lodgify Logo" 
        className="w-40 mb-8"
      />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Celebration Image */}
        <img 
          src="/confetti.png" 
          alt="Celebration Confetti" 
          className="w-80 mx-auto"
        />

        {/* Congratulations Text */}
        <h1 className="text-7xl font-bold my-10 bg-gradient-to-r from-red-400 to-[#5B21B6] bg-clip-text text-transparent">
          Congratulations!!!
        </h1>

        <p className="text-xl font-semibold text-gray-800">
          You're now a Lodgify Agent
        </p>

        {/* Action Button */}
        <Link to="/dashboard">
          <button className="mt-8 px-8 py-4 bg-[#5B21B6] text-white text-xl font-semibold rounded-lg hover:bg-purple-900 transition-colors">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  )
}
