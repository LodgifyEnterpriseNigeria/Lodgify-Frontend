import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuthContext";

export default function VerifyEmail() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const formFields = [
    {
      label: 'Email Address',
      type: 'email',
      name: 'email',
      placeholder: 'example@domain.com'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Explicitly define error handling function
  const handleError = (message) => {
    setError(message || 'Email verification failed. Please try again.');
    setSuccess('');
  };

  const handleSuccess = (message) => {
    setSuccess(message || 'Email verification successful!');
    setError('');
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    try {
      // You can integrate this with your existing backend API
      // Example: Replace this with your actual API call
      const response = await fetch('http://localhost:8000/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Email verified successfully
        handleSuccess('Email verification successful! Check your inbox for further instructions.');
        // Optionally navigate after a delay
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 2000);
      } else {
        handleError(result.message || 'Invalid email or verification failed');
      }
    } catch (err) {
      console.error('Email verification error:', err);
      handleError('Email verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
        <Link to="/dashboard" className="flex items-center text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Verify Email Form */}
      <div className="w-full max-w-md p-8 bg-[#1C1C2D] rounded-2xl shadow-lg relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Verify Email</h2>
          <p className="text-gray-400 text-sm">
            Enter your email address to receive a verification link
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
              <p className="text-green-400 text-sm text-center">{success}</p>
            </div>
          )}
          
          <div className="mb-10 space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <label htmlFor={field.name} className="font-semibold block text-white mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full h-12 text-center bg-gray-300 text-lg font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                  required
                  disabled={isLoading}
                />
              </div>
            ))}
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-semibold py-3 rounded-md transition duration-200 ${
              isLoading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              bounce: 0.4
            }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              'Send Verification Email'
            )}
          </motion.button>

          <div className="text-center text-sm text-purple-400 mt-4">
            <Link to="/resend-verification" className="hover:underline">
              Didn't receive the email? Resend
            </Link>
          </div>

          <div className="text-center text-sm text-gray-400 mt-6">
            <Link to="/dashboard" className="text-purple-400 hover:underline">
              Cancel and return to dashboard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 