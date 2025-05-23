import React from 'react'

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
    <div className="text-white w-[65rem] mx-auto rounded-2xl bg-gradient-to-br bg-[length:150%_150%] to-[#1B0B29] from-[#2B123F] my-10 text-xl py-12 px-20">
      {dataArray.map((item, index) => (
        <div 
          key={index} 
          className="border-b-2 border-slate-200 p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-medium">{item.email}</p>
            <span className="flex items-center gap-2">
              <img 
                src="/coin.png" 
                alt="Coin" 
                className="w-4 h-4 object-contain" 
              />
              <p className='text-sm'>
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

      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-colors">
          View More
        </button>
      </div>
    </div>
  )
}