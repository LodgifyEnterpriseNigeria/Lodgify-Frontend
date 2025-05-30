import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() { return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0C29] via-[#29113e] to-[#24243e] px-4 relative z-[100]"> <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent_120vh)]" />
      <motion.div 
        className="absolute top-6 left-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/waitlist" 
          className="flex items-center text-white/80 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </motion.div>
      <div className="w-full max-w-md p-8 bg-[#1C1C2D] rounded-2xl shadow-lg relative"> <h2 className="text-3xl font-bold text-center text-white mb-8">Sign Up</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0112 6c4.478 0 8.268 2.943 9.542 7a10.477 10.477 0 01-1.745 3.043M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            </span>
          </div>

          <div className="flex items-center justify-between">
            <motion.button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                bounce: 0.4
              }}
            >
              Sign Up
            </motion.button>
          </div>

          <div className="text-right text-sm text-purple-400 mt-2">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-400 text-white py-3 rounded-md hover:bg-gray-800 transition duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="#" className="text-purple-400 hover:underline">
              <Link to='/waitlist/signin'>
                Log in
              </Link>
            </a>
          </p>
        </form>
      </div>
    </div>

); }