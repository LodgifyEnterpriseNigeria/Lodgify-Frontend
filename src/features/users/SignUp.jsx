import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const formFields = [
    { 
      label: "Email", 
      type: "email", 
      name: "email",
      placeholder: "abc@example.com" 
    },
    { 
      label: "Password", 
      type: "password", 
      name: "password",
      placeholder: "Password" 
    },
    { 
      label: "Confirm Password", 
      type: "password", 
      name: "confirmPassword",
      placeholder: "Confirm Password" 
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen p-8">
      <img 
            src="/MainLodgifyLogo.png" 
            alt="Lodgify Logo" 
            className="h-12 mx-auto"
          />
      
      <div className="flex items-center justify-between px-40 mt-16 gap-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-left text-black mb-6">
            Get Started
          </h1>
          <p className="text-black/80 font-medium">
            Welcome to LodgifyNG - Let's create your own account
          </p>
          
          <div className="w-full h-[2px] bg-slate-500/30 my-5" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-10">
            {formFields.map((field, index) => (
              <div key={index} className="space-y-1">
                <label 
                  htmlFor={field.name} 
                  className="font-semibold block"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full h-12 text-center text-lg font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                  required
                />
              </div>
            ))}
            </div>

            <button 
              type="submit"
              className="py-3 px-10 cursor-pointer text-white font-semibold bg-[#5B21B6] border-[2px] w-full rounded-lg hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
            
            <button 
              type="button"
              className="flex items-center justify-center gap-4 py-5 font-semibold border-gray-200 border-[2px] w-full rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img 
                src="/google.png" 
                alt="Google Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span>Continue with Google</span>
            </button>
          </form>

          <p className="text-center mt-8 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-[#5B21B6] hover:underline font-medium hover:text-purple-700">
              Log in
            </Link>
          </p>
        </div>

        <div className="flex-1">
          <img 
            src="/poster.png" 
            alt="Signup Illustration" 
            className="w-full h-auto max-w-2xl"
          />
        </div>
      </div>
    </div>
  )
}
