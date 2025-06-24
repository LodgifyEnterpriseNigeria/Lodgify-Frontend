import React from 'react'

const Header = () => {
return (
    <div 
        className="w-full h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
            backgroundImage: "url('/Home Phone & Landline Service Provider.png')"
        }}
    >
        <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center">
            <div className="container px-4 text-center">
                <div>
                    <h1 className="text-5xl font-bold text-black mb-8 w-4/6 mx-auto">
                        Improve Your Lifestyle Experience
                        With <span className='text-[#5B21B6]'>LodgifyNG</span>
                    </h1>
                    <p className="text-xl text-black/90 mb-16 max-w-2xl mx-auto">
                        LodgifyNG is your all-in-one platform designed to transform the housing
                        and real estate industry in Nigeria.
                    </p>
                </div>
                <div>
                    
                    <button className="bg-[#5B21B6] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity mx-2 cursor-pointer w-1/6 font-bold">
                        Join Now
                    </button>
                    <button className="bg-white text-black px-8 border-black border-2 py-3 rounded-full hover:opacity-90 transition-opacity mx-2 cursor-pointer w-1/6 font-bold">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Header