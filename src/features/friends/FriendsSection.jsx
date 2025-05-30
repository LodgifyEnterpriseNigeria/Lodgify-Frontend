import React from 'react'
import { motion } from 'framer-motion'
import InvitePage from './InvitePage'

export default function FriendsSection() {
  const dataArray = [
    { 
      email: "user1@example.com", 
      coinAmount: 100, 
      coinReward: 10 
    },
    { 
      email: "user2@example.com", 
      coinAmount: 200, 
      coinReward: 20 
    },
    { 
      email: "user3@example.com", 
      coinAmount: 300, 
      coinReward: 30 
    },
  ]

  return (
    <div className="relative min-h-screen pb-10 ">

      {/* Content */}
      <div className="relative z-10">
        <InvitePage 
          title="5,000+ Points Per Referral" 
          message="Refer a friend, both get 5k points. if they refer someone, you get 1k more points"
        />

        {/* Friends List Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-[#2B123F] to-[#1B0B29] mt-10 py-12 px-20">
          {dataArray.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-white/20 p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-medium">
                  {item.email}
                </p>
                <span className="flex items-center gap-2">
                  <img 
                    src="/coin.png" 
                    alt="Coin" 
                    className="w-4 h-4 object-contain" 
                  />
                  <p className="text-white text-sm">
                    {item.coinAmount}
                  </p>
                </span>
              </div>
              
              <div className="flex items-center text-xs text-gray-300">
                <p>1 invited:</p>
                <span className="flex items-center gap-1 ml-2">
                  <img 
                    src="/coin.png" 
                    alt="Coin" 
                    className="w-2 h-2 object-contain" 
                  />
                  {item.coinReward}
                </span>
              </div>
            </div>
          ))}

          {/* Invite Button */}
          <div className="mt-16 text-center">
            <motion.button 
              className="px-8 py-3 bg-white text-purple-500 font-bold rounded-lg hover:text-white hover:bg-purple-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              Invite Friends
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}