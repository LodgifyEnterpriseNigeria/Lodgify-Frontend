import React from 'react'
import Button from '../../myComponents/Button'

const NavBar = () => {
  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Features', link: '#' },
    { name: 'FAQs', link: '#' },
    { name: 'Learn More', link: '#' },
    { name: 'Earn', link: '#' },
  ]

  return (
    <div className='flex justify-between mb-20 items-center bg-transparent py-2 px-8'>
      <div>
        <img 
          src="/logo-white.png" 
          alt="Lodgify Logo"  
          className='w-40'
        />
      </div>
      <div className='flex justify-between items-center gap-4'>
        <ul className='flex justify-center items-center gap-3'>
          {navItems.map((item, index) => (
            <li key={index} className='inline-block mr-4'>
              <a 
                href={item.link} 
                className='text-white hover:text-white/70 transition-colors'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <Button>Join Waitlist</Button>
      </div>
    </div>
  )
}

export default NavBar