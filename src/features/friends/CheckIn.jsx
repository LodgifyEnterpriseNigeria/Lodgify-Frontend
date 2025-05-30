import React from 'react'

const CheckIn = ({ item, index }) => {
  const getCardStyle = () => {
    if (item.paid) {
      return "border-green-900 bg-opacity-7 border-[2px] relative bg-green-600 p-3 md:p-5 text-center rounded-xl text-green-900"
    }
    if (item.confirmed) {
      return "bg-yellow-600 border-yellow-800 border-[2px] p-3 md:p-5 text-center relative rounded-xl text-white"
    }
    return "border-white text-white border-[2px] p-3 md:p-5 text-center rounded-xl"
  }

  const renderStatusIcon = () => {
    if (item.paid) {
      return (
        <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-5 w-[24px] h-[24px] md:w-[30px] md:h-[30px] rounded-full bg-green-950 flex items-center justify-center">
          <span className="text-white text-sm md:text-base font-extrabold">&#10003;</span>
        </div>
      )
    }
    if (item.confirmed) {
      return (
        <img
          src="/Gold-trophy.png"
          alt="Trophy"
          className="absolute -top-6 -right-6 md:-top-9 md:-right-9 w-12 h-12 md:w-16 md:h-16"
        />
      )
    }
    return null
  }

  return (
    <div key={index} className={getCardStyle()}>
      <div className="relative">
        <p className="text-[10px] md:text-xs font-semibold">
          Day {item.day}
        </p>
        {renderStatusIcon()}
        <p className="font-semibold text-lg md:text-xl mt-1 md:mt-2">
          {item.number}
        </p>
      </div>
    </div>
  )
}

export default CheckIn