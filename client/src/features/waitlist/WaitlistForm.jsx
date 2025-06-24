import React, { useState } from 'react'

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    role: '',
    maritalStatus: '',
    ageGrade: ''
  })

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
    // Add your form submission logic here
  }

  return (
    <div className="w-full">
      <div className=" mx-auto bg-white rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className='text-4xl font-bold text-center text-[#5B21B6] mb-6'>
            Join Our Waitlist
          </h2>
          <p className="text-gray-600 w-2/5 mx-auto mb-6">
            Be the First to Know When We Are Ready! Join the waitlist to Earn{' '}
            <span className="text-[#5B21B6] font-semibold">50,000 points</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="input-field shadow-sm border-gray-300 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="input-field shadow-sm border-gray-300 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="input-field shadow-sm border-gray-300 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="input-field shadow-sm border-gray-300 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Role in Community</option>
              <option value="leader">Leader</option>
              <option value="member">Member</option>
              <option value="volunteer">Volunteer</option>
            </select>

            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="input-field shadow-sm border-gray-300 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>

            <select
              name="ageGrade"
              value={formData.ageGrade}
              onChange={handleChange}
              className="input-field shadow-sm border-gray-300 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Age Grade</option>
              <option value="youth">Youth</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#5B21B6] hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 w-1/5 h-8/12"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WaitlistForm