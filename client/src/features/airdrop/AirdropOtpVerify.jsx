import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuthContext";

export default function OtpVerify() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  
  const inputRefs = useRef([]);

  const formFields = [
    {
      label: 'Enter OTP Code',
      type: 'text',
      name: 'otp',
      placeholder: 'Enter 6-digit code'
    }
  ];

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);
      inputRefs.current[5]?.focus();
    }
  };

  // Explicitly define error handling function
  const handleError = (message) => {
    setError(message || 'OTP verification failed. Please try again.');
    setSuccess('');
  };

  const handleSuccess = (message) => {
    setSuccess(message || 'OTP verified successfully!');
    setError('');
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:8000/auth/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: email
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setTimer(30);
        setCanResend(false);
        setSuccess('OTP resent successfully! Check your email.');
      } else {
        handleError(result.message || 'Failed to resend OTP');
      }
    } catch (err) {
      console.error('Resend OTP error:', err);
      handleError('Failed to resend OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      handleError('Please enter the complete 6-digit OTP');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8000/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          otp: otpString
        })
      });

      const result = await response.json();
      
      if (result.success) {
        handleSuccess('Email verified successfully!');
        // Navigate after a delay
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 2000);
      } else {
        handleError(result.message || 'Invalid OTP code');
        // Clear OTP on error
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      handleError('OTP verification failed. Please try again.');
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
        <Link to="/verify-email" className="flex items-center text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* OTP Verification Form */}
      <div className="w-full max-w-md p-8 bg-[#1C1C2D] rounded-2xl shadow-lg relative">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Verify OTP</h2>
          <p className="text-gray-400 text-sm mb-2">
            Enter the 6-digit code sent to
          </p>
          <p className="text-purple-400 font-semibold text-sm">
            {email || 'your email'}
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
          
          {/* OTP Input Fields */}
          <div className="mb-8">
            <label className="font-semibold block text-white mb-4 text-center">
              Enter 6-digit OTP
            </label>
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center bg-gray-300 text-lg font-bold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                  disabled={isLoading}
                />
              ))}
            </div>
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
                Verifying...
              </div>
            ) : (
              'Verify OTP'
            )}
          </motion.button>

          {/* Resend OTP Section */}
          <div className="text-center">
            {canResend ? (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isLoading}
                className="text-purple-400 hover:underline text-sm disabled:opacity-50"
              >
                Didn't receive the code? Resend
              </button>
            ) : (
              <p className="text-gray-400 text-sm">
                Resend code in {timer}s
              </p>
            )}
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