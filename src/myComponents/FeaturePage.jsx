import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureArray = [
  {
    title: "Property Transaction",
    content: "Buy, sell, and Rent/Let apartments, Lodges, Shops etc with ease.",
    image: "../../public/Vector-property.png"
  },
  {
    title: "Hotel and Rental Booking",
    content: "Book hotel, apartments, event halls and more. Daily, weekly, quarterly, yearly.",
    image: "../../public/Vector-Hotel.png"
  },
  {
    title: "Find-A-Roomie Based on your Preference",
    content: "Connect with like-minded housemates based on your tailored hobbies and preferences.",
    image: "../../public/Vector-people.png"
  },
  {
    title: "LodgiFinance (LodgiFi)",
    content: "Invest in Nigerian real estate through solo property transaction or through Lodgify’s trusted and verified investment platforms.",
    image: "../../public/Vector-finance.png"
  },
  {
    title: "Workshop",
    content: "Seek artisans and contractors like carpenters, architect surveyors, plumbers, electricians, welders, etc through our workshop features",
    image: "../../public/Vector-workshop.png"
  },
  {
    title: "LodgiMart(Marketplace)",
    content: "Explore our marketplace,  for housing-related products, like kitchen utensils,  appliances etc",
    image: "../../public/Vector-market.png"
  }
]

const FeaturePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className='text-4xl font-bold text-center text-[#5B21B6] mb-6'>Start doing with LodgifyNG</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FeatureArray.map((item, index) => (
          <FeatureCard 
            key={index}
            title={item.title} 
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturePage