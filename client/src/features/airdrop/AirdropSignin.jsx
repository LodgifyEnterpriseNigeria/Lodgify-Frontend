import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const formFields = [
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'example@domain.com'
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: '••••••••'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Form field changed:', { name, value: name === 'password' ? '[HIDDEN]' : value });
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Explicitly define error handling function
  const handleError = (message) => {
    setError(message || 'Login failed. Please try again.');
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    console.log('Login form submitted with data:', { 
      email: formData.email, 
      password: formData.password ? '[HIDDEN]' : 'undefined' 
    });
    
    try {
      const result = await login(formData.email, formData.password);
      console.log('Login result:', result);
      
      if (result) {
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      console.error('Login error:', err);
      handleError(err.message);
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
        <Link to="/waitlist" className="flex items-center text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Login Form */}
      <div className="w-full max-w-md p-8 bg-[#1C1C2D] rounded-2xl shadow-lg relative">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Login</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm text-center">{error}</p>
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
                />
              </div>
            ))}
          </div>

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
            Login
          </motion.button>

          <div className="text-right text-sm text-purple-400 mt-2">
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to='/waitlist/signup' className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
