import React from 'react';
import { Link, Outlet } from "react-router-dom";
import InviteNav from "./InviteNav";
import MessageBar from "./MessageBar";
import CheckIn from "./CheckIn";
import CopyLink from './CopyLink';
import { motion } from 'framer-motion';

export default function InvitePage({title, message}) {
  const CheckinArray = [
    { day: 1, number: 1000, paid: true, confirmed: false },
    { day: 2, number: 700, paid: false, confirmed: false },
    { day: 3, number: 1000, paid: false, confirmed: false },
    { day: 4, number: 1500, paid: false, confirmed: false },
    { day: 5, number: 1800, paid: false, confirmed: false },
    { day: 6, number: 2000, paid: false, confirmed: false },
    { day: 7, number: 2300, paid: false, confirmed: false },
    { day: 8, number: 3000, paid: false, confirmed: false },
    { day: 9, number: 3500, paid: false, confirmed: false },
    { day: 10, number: 4000, paid: false, confirmed: false },
    { day: 11, number: 5000, paid: false, confirmed: true },
  ];

  return (
    <div className="min-h-screen bg-transparent relative z-[100]">
      <motion.div
        className='pt-3 md:pt-5'
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1,
          y: 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
          bounce: 0.5,
          duration: 1
        }}
      >
        <InviteNav />
      </motion.div>
      
      {/* Points Section */}
      <div className="container mx-auto px-4 mt-24 md:mt-48">
        <div className="text-center">
          <motion.img 
            src="/coin.png" 
            alt="Points Coin" 
            className="w-40 md:w-60 mx-auto mb-4 transform -rotate-20"
            style={{
              filter: `
                drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))
                drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))
              `
            }}
            whileHover={{ scale: [1, 1.2, 1, 1.2] }}
            transition={{ duration: 1 }}
          />
          <p className="text-white text-lg md:text-xl font-semibold mb-2 pt-6 md:pt-10">
            Total Point Balance
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-8 md:mb-16">
            4,800
          </h1>
        </div>

        {/* Daily Check-in Section */}
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 pt-4 md:pt-8">
          Daily Check-In
        </h2>

        <div className="max-w-4xl mx-auto px-2 md:px-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
            {CheckinArray.map((item, index) => (
              <CheckIn key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="w-full h-[2px] bg-transparent my-6 md:my-8" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-6xl mx-auto mt-10 md:mt-20 px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
            className="w-full sm:w-auto"
          >
            <Link 
              to="/waitlist/"
              className="bg-transparent text-xl md:text-2xl text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-colors block text-center"
            >
              Invite Friends
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
            className="w-full sm:w-auto"
          >
            <Link 
              to="/waitlist/tasks"
              className="bg-transparent text-xl md:text-2xl text-white font-semibold py-2 px-6 rounded-lg border-2 border-white hover:bg-white/10 transition-colors block text-center"
            >
              Tasks
            </Link>
          </motion.div>
        </div>

        <CopyLink />
        {/* Referral Message */}
        <div className='bg-gradient-to-r from-[#29113e] to-[#1B0B29] rounded-lg px-4 md:px-20 py-6 md:py-10 max-w-9xl mx-auto my-5'>
          <h1 className="text-lg md:text-xl font-bold text-yellow-500 mb-2">
            {title}
          </h1>
          <p className="text-white/90 text-xs md:text-sm mt-3">
            {message}
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
