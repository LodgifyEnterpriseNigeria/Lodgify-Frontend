import React, { useState, useRef } from 'react';

export default function VerifyEmail() {
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = verificationCode.join('');
    console.log('Verification code:', code);
    // Add your verification logic here
  };

  const handleResend = () => {
    console.log('Resending verification code');
    // Add your resend logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <img 
            src="/MainLodgifyLogo.png" 
            alt="Lodgify Logo" 
            className="h-12 mx-auto mb-8"
          />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Verify Your Email Address
          </h1>
          <p className="text-gray-600 mb-8">
            Please enter the 6-digit code that was sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2 sm:gap-4">
            {verificationCode.map((digit, index) => (
              <div key={index} className="w-12 sm:w-14">
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-full h-12 text-center text-2xl font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5B21B6] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Verify
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Didn't receive any email?{' '}
            <button
              onClick={handleResend}
              className="text-[#5B21B6] font-medium hover:text-purple-700"
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
