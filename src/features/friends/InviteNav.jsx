import React, { useState } from 'react'
import Button from '../../myComponents/Button'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Features', link: '#' },
    { name: 'FAQs', link: '#' },
    { name: 'Learn More', link: '#' },
    { name: 'Earn', link: '#' },
  ]

  return (
    <motion.div 
      className='fixed top-0 left-0 right-0 z-50 px-4 pt-4'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glassmorphism background */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 backdrop-blur-lg border border-white/10 rounded-2xl' />

      {/* Nav content */}
      <div className='relative flex items-center justify-between py-4 px-4 md:py-6 md:px-8 max-w-7xl mx-auto'>
        {/* Logo */}
        <motion.div 
          className='w-32 md:w-40'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <img 
            src="/logo-white.png" 
            alt="Lodgify Logo"  
            className='w-full'
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white p-2'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex flex-1 items-center justify-center px-8'>
          <ul className='flex items-center gap-10'>
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a 
                  href={item.link} 
                  className='text-white/90 hover:text-white transition-colors text-sm font-medium relative group'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'/>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Desktop Sign Up Button */}
        <div className='hidden md:block'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
            <Button>
              <Link to='/waitlist/signup' className='px-6'>
                Sign Up
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className='absolute top-full left-0 right-0 mt-2 bg-[#1C1C2D]/95 backdrop-blur-lg border border-white/10 rounded-xl md:hidden'
            >
              <div className='p-4'>
                <nav className='grid gap-4'>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      className='text-white/90 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <Link 
                      to='/waitlist/signup'
                      className='block text-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-medium'
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default NavBar