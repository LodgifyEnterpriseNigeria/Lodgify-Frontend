import React from 'react'

function Button({backgroundColor = 'bg-[#5B21B6]', color = 'text-white', children, onClick}) {
  return (
    <button 
      className={`${backgroundColor} ${color} px-5 py-2.5 rounded-md cursor-pointer text-base border-none hover:opacity-90 transition-opacity`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button