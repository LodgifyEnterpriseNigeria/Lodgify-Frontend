import React, { useState } from 'react'

export default function CopyLink({ title, message }) {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://lodgifyNG.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="mx-auto py-4 md:py-8 px-4 md:px-0">
      <div className="w-full border-white border-[0.2px] rounded-2xl md:rounded-4xl bg-gradient-to-r from-[#29113e] to-[#1B0B29] px-4 md:px-8 py-8 md:py-16">
        {/* Link Container */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 bg-[#1B0B29] rounded-lg py-4 md:py-6 px-4 md:px-8 mb-6'>
          <p className='text-white font-medium text-sm md:text-base truncate w-full sm:w-auto'>
            {referralLink}
          </p>
          <div className='flex gap-4 sm:ml-4'>
            <button 
              onClick={handleCopy}
              className='hover:opacity-80 transition-opacity'
            >
              <img 
                src="/copy.png" 
                alt="Copy link" 
                className='w-6 h-6 md:w-8 md:h-8'
              />
            </button>
            <a 
              href={referralLink} 
              download
              className='hover:opacity-80 transition-opacity'
            >
              <img 
                src="/download.png" 
                alt="Download QR code" 
                className='w-6 h-6 md:w-8 md:h-8'
              />
            </a>
          </div>
        </div>

        {/* Message Content */}
        <div className="text-center space-y-2 md:space-y-3">
          {title && (
            <h3 className="text-lg md:text-xl font-bold text-white">
              {title}
            </h3>
          )}
          <p className="text-xs md:text-sm font-medium text-white/90">
            {message || "Invite your friends and get extra points!"}
          </p>
          {copied && (
            <p className="text-xs md:text-sm text-green-400">
              Link copied to clipboard!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}