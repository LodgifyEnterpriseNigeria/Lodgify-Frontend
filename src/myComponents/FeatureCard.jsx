import React from 'react'

const FeatureCard = ({image, title, content}) => {
  return (
    <div className='text-left p-5 shadow-md rounded-lg bg-white'>
        <img src={image} alt="" className='rounded-full border-2 p-2 border-gray/40 w-2/12 mb-6'/>
        <div>
            <h1 className='font-bold mb-3'>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default FeatureCard