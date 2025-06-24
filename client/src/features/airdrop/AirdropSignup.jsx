import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuthContext";

export default function Signup() {
  // State Management
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    profile: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    referralToken: ""
  });

  const [errors, setErrors] = useState({});
  const [authStatus, setAuthStatus] = useState({ user: null, isAuthenticated: false });
  const { signup, getUser } = useAuth();
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const result = await getUser();
        setAuthStatus(result);
        console.log('Current authentication status:', result);
        
        // If user is already authenticated, redirect to dashboard
        if (result.isAuthenticated) {
          console.log('User is already authenticated, redirecting to dashboard');
          navigate('/dashboard', { replace: true });
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setAuthStatus({ user: null, isAuthenticated: false });
      }
    };

    checkAuthStatus();
  }, [getUser, navigate]);

  // Form Configuration
  const formFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "abc@example.com"
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Username"
    },
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
      placeholder: "Full Name"
    },
    {
      label: "Profile",
      type: "text",
      name: "profile",
      placeholder: "Profile"
    },
    {
      label: "Phone Number",
      type: "text",
      name: "phoneNumber",
      placeholder: "Phone Number"
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "••••••••"
    },
    {
      label: "Reference Code (optional)",
      type: "text",
      name: "referralToken",
      placeholder: "enter your reference code"
    }
  ];

  const genderOptions = ["male", "female", "other"];

  // Event Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear individual field error on change
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate empty fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === "") {
        newErrors[field] = "This field is required.";
      }
    });

    // Validation is currently commented out
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }

    console.log("Form submitted:", formData);

    try {
      const result = await signup({
        email: formData.email, 
        username: formData.username,
        fullName: formData.fullName,
        profile: formData.profile,
        phoneNumber: formData.phoneNumber,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        password: formData.password,
        referenceCode: formData.referralToken
      });

      console.log("Signup result:", result);

      if (result.success) {
        // After successful signup, check authentication status again
        const authResult = await getUser();
        console.log('Authentication status after signup:', authResult);
        
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      console.error("Signup error:", err);
      // Show global error under password field
      setErrors((prev) => ({
        ...prev,
        password: err.message || 'Signup failed. Please try again.'
      }));
    }
  };

  // Render Functions
  const renderFormField = (field, index) => (
    <div key={index} className="space-y-1">
      <label htmlFor={field.name} className="font-semibold block text-white">
        {field.label}
      </label>
      <input
        type={field.type}
        name={field.name}
        id={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        placeholder={field.placeholder}
        className={`w-full h-12 text-center bg-gray-300 text-lg font-semibold rounded-lg border ${
          errors[field.name] ? 'border-red-400' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]`}
        required
      />
      {errors[field.name] && (
        <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
      )}
    </div>
  );

  const renderGenderField = () => (
    <div className="space-y-1">
      <label className="font-semibold block text-white">Gender</label>
      <div className="flex space-x-6">
        {genderOptions.map((option) => (
          <label key={option} className="text-white flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value={option}
              checked={formData.gender === option}
              onChange={handleChange}
              className="accent-purple-600"
              required
            />
            {option}
          </label>
        ))}
      </div>
      {errors.gender && (
        <p className="text-red-400 text-sm mt-1">{errors.gender}</p>
      )}
    </div>
  );

  const renderDateOfBirthField = () => (
    <div className="space-y-1">
      <label htmlFor="dateOfBirth" className="font-semibold block text-white">
        Date of Birth
      </label>
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        className={`w-full h-12 bg-gray-300 text-center text-lg font-semibold rounded-lg border ${
          errors.dateOfBirth ? 'border-red-400' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]`}
        required
      />
      {errors.dateOfBirth && (
        <p className="text-red-400 text-sm mt-1">{errors.dateOfBirth}</p>
      )}
    </div>
  );

  // Show loading state while checking authentication
  if (authStatus.isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0C29] via-[#29113e] to-[#24243e]">
        <div className="text-white text-lg">Checking authentication...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0C29] via-[#29113e] to-[#24243e] px-4 relative z-[100]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent_120vh)]" />
      
      {/* Back Button */}
      <motion.div
        className="absolute top-6 left-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/waitlist"
          className="flex items-center text-white/80 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Main Form Container */}
      <div className="w-full max-w-md p-8 bg-[#1C1C2D] rounded-2xl shadow-lg relative">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Sign Up
        </h2>

        {/* Authentication Status Display (for debugging) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-4 p-2 bg-gray-800 rounded text-xs text-gray-300">
            <p>Auth Status: {authStatus.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
            {authStatus.user && (
              <p>User: {authStatus.user.fullName || authStatus.user.email}</p>
            )}
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="space-y-6">
            {formFields.map((field, index) => renderFormField(field, index))}
            {renderGenderField()}
            {renderDateOfBirthField()}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition duration-200"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              bounce: 0.4
            }}
          >
            Sign Up
          </motion.button>

          {/* Forgot Password Link */}
          <div className="text-right text-sm text-purple-400 mt-2">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/waitlist/signin" className="text-purple-400 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
