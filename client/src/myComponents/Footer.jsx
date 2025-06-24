import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='flex py-20 px-5  bg-black justify-between text-white items-start'>
        <div className='w-2/5'>
            <h1 className='text-xl font-bold mb-5'>About Us</h1>
            <p className='text-sm w-3/5'>LodgifyNG is dedicated to creating a safe and accessible  haven for all your housing and real estate needs, ensuring convenience and efficiency for users across Nigeria</p>
        </div>
        <section className='flex gap-5 justify-between'>
        <div>
            <h1 className='text-xl font-bold mb-5 text-nowrap'>Quick Link</h1>
            <ul className='space-y-2'>
                <li className='text-sm'><a href="/">Home</a></li>
                <li className='text-sm'><a href="/">Features</a></li>
                <li className='text-sm'><a href="/">FAQs</a></li>
                <li className='text-sm'><a href="/">Learn More</a></li>
            </ul>
        </div>
        <div>
            <h1 className='text-xl font-bold mb-5'>Get in Touch</h1>
            <ul className='space-y-2'>
                <li className='text-sm flex items-center gap-2'>
                    <a href="/" className='flex items-center gap-2'>
                    <span><MdEmail className="text-xl" /></span>
                    <span className='text-sm'>lodgifyng@gmail.com </span>
                   </a> 
                </li>
                <li className='text-sm flex items-center gap-2'>
                    <a href="/" className='flex items-center gap-2'>
                    <span><BsWhatsapp className="text-xl" /></span>
                    <span className='text-sm'>08138469949</span>
                     </a>
                </li>
            </ul>
        </div>
        <div className='w-full'>
            <h1 className='text-xl font-bold mb-5'>Stay Connected</h1>
            <p className='text-sm mb-5'>Enter your details below to subscribe to our newsletter.</p>
            <form>
                <input type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded-md p-2 bg-white text-gray-700 mr-2' />
                <button type='submit' className='bg-[#5B21B6] text-white px-5 py-2.5 rounded-md cursor-pointer text-base border-none hover:opacity-90 transition-opacity'>Send</button>
            </form>
        </div>
        </section>
    </div>
  )
}

export default Footer