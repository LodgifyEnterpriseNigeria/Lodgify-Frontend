import React from 'react'

export default function MessageBar({ title, message }) {
  return (
    <div className="mx-auto py-4 md:py-8 px-4 md:px-0">
      <div className="w-full rounded-lg bg-gradient-to-r from-[#29113e] to-[#1B0B29] py-8 md:py-16">
        {/* Icon Container */}
        <div className="w-20 h-20 md:w-28 md:h-28 bg-purple-300/50 mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6">
          <img 
            src="/sadness.png" 
            alt="Sad Face Icon"
            className="w-14 h-14 md:w-20 md:h-20 object-contain" 
          />
        </div>
        
        {/* Message Content */}
        <div className="text-center space-y-2 md:space-y-3 px-4 md:px-0">
          {title && (
            <h3 className="text-lg md:text-xl font-bold text-white">
              {title}
            </h3>
          )}
          
          <p className="text-xs md:text-sm font-medium text-white/90">
            {message || "You have not invited any friends"}
          </p>
        </div>
      </div>
    </div>
  )
}