import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending reset code to:', email)
    // Add your password reset logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img 
            src="/MainLodgifyLogo.png" 
            alt="Lodgify Logo" 
            className="h-12 mx-auto mb-8"
          />
          
          <h1 className="text-4xl font-bold text-black mb-2">
            Forgot Password?
          </h1>
          <p className="text-black/80 font-semibold">
            Enter your email for instructions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 text-center text-xl font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]"
              placeholder="Email Address"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5B21B6] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B21B6] transition-colors"
          >
            Send 4-digit code
          </button>
        </form>

        <p className="text-center text-sm">
          New to LodgifyNG?{' '}
          <Link 
            to="/signup" 
            className="text-[#5B21B6] hover:underline font-medium"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}
