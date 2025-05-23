import React from 'react'

const CheckIn = ({ item, index }) => {
  const getCardStyle = () => {
    if (item.paid) {
      return "border-green-900 bg-opacity-7 border-[2px] relative bg-green-600 p-5 text-center rounded-xl m-3 text-green-900"
    }
    if (item.confirmed) {
      return "bg-yellow-600 border-yellow-800 border-[2px] p-5 text-center relative rounded-xl m-3 text-white"
    }
    return "border-white text-white border-[2px] p-5 text-center rounded-xl m-3"
  }

  const renderStatusIcon = () => {
    if (item.paid) {
      return (
        <div className="absolute -top-4 -right-4 z-5 w-[30px] h-[30px] rounded-full bg-green-950 flex items-center justify-center">
          <span className="text-white font-extrabold">&#10003;</span>
        </div>
      )
    }
    if (item.confirmed) {
      return (
        <img
          src="/Gold-trophy.png"
          alt="Trophy"
          className="absolute -top-9 -right-9 w-16 h-16"
        />
      )
    }
    return null
  }

  return (
    <div key={index} className={getCardStyle()}>
      <div className="relative">
        <p className="text-xs font-semibold">
          Day {item.day}
        </p>
        {renderStatusIcon()}
        <p className="font-semibold text-xl mt-2">
          {item.number}
        </p>
      </div>
    </div>
  )
}

export default CheckIn