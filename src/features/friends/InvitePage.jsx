import React from 'react';
import { Link, Outlet } from "react-router-dom";
import InviteNav from "./InviteNav";
import MessageBar from "./MessageBar";
import CheckIn from "./CheckIn";
import CopyLink from './CopyLink';

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
    <div className="min-h-screen bg-[#1B0B29]">
      <InviteNav />
      
      {/* Points Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <img 
            src="/coin.png" 
            alt="Points Coin" 
            className="w-60 mx-auto mb-4" 
          />
          <p className="text-white text-xl font-semibold mb-2">
            Total Point Balance
          </p>
          <h1 className="text-white text-4xl font-extrabold mb-16">
            4,800
          </h1>
        </div>

        {/* Daily Check-in Section */}
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          Daily Check-In
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CheckinArray.map((item, index) => (
              <CheckIn key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="w-full h-[2px] bg-slate-500 my-8" />

        

        {/* Action Buttons */}
        <div className="flex gap-4 max-w-6xl mx-auto mt-20">
          <Link 
            to="/friends/invite"
            className="bg-transparent text-2xl text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-colors"
          >
            Invite Friends
          </Link>
          <Link 
            to="/friends"
            className="bg-transparent text-2xl text-white font-semibold py-2 px-6 rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
          >
            Tasks
          </Link>
        </div>

        <CopyLink />
        {/* Referral Message */}
        <div className='bg-gradient-to-r from-[#29113e] to-[#1B0B29] rounded-lg px-20 py-10 max-w-9xl mx-auto my-5'>
          <h1 className="text-xl font-bold text-yellow-500 mb-2">
            {title}
          </h1>
          <p className="text-white/90 text-sm mt-3">
            {message}
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
