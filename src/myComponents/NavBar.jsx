import React from 'react'
import Button from './Button'

const NavBar = () => {
  
    const navItems = [
        { name: 'Home', link: '#' },
        { name: 'Features', link: '#' },
        { name: 'FAQs', link: '#' },
        { name: 'Learn More', link: '#' },
        { name: 'Earn', link: '#' },
    ]
  return (
    <div className='flex justify-between items-center bg-white py-2'>
        <div>
            <img src="../../public/MainLodgifyLogo.png" alt=""  className='w-6/12'/>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <ul className='flex justify-center items-center gap-3'>
                {navItems.map((item, index) => 
                <li key={index} className='inline-block mr-4'>
                    <a href={item.link}>{item.name}
                    </a>
                </li>)}
            </ul>
            <Button>Join Waitlist</Button>
        </div>
    </div>
  )
}


export default NavBar