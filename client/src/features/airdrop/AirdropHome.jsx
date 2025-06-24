import React from 'react';
import { ArrowRight, Home, Gift, TrendingUp, UserPlus, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AirdropHome() {
  return (
    <div className="min-h-screen bg-[#1a102e] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_8px)]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-white">
          LODGIFY
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#airdrop" className="text-gray-300 hover:text-white transition-colors">Airdrop</a>
          <a href="#properties" className="text-gray-300 hover:text-white transition-colors">How to Claim</a>
          <a href="#rewards" className="text-gray-300 hover:text-white transition-colors">Allocation</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition-colors">
            <Link to="/waitlist/dashboard" className="flex items-center gap-2">
              <ArrowRight size={20} />
              Claim Tokens
            </Link>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
            <Link to="/waitlist/signup" className="flex items-center gap-2">
              <UserPlus size={20} />
              Sign Up
            </Link>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
            <Link to="/waitlist/signin" className="flex items-center gap-2">
              <LogIn size={20} />
              Sign In
            </Link>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Real Estate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Airdrop
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Claim your free Lodgify tokens! Join the future of decentralized real estate 
            investment and earn rewards for being an early adopter.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2">
            <Link to="/waitlist/dashboard" className="flex items-center gap-2">
              Claim Airdrop
              <Gift size={20} />
            </Link>
          </button>
        </div>

      </section>

      {/* Features Section */}
      <section id="airdrop" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the real estate revolution and claim your share of the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Gift className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Free Airdrop</h3>
            <p className="text-gray-300">
              Claim up to 1,000 Lodgify tokens absolutely free. No purchase necessary, just connect your wallet.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Home className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real Estate Access</h3>
            <p className="text-gray-500">
              Use tokens to invest in fractional real estate ownership. Access premium properties worldwide.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Earn Rewards</h3>
            <p className="text-gray-500">
              Earn passive income through rental yields and property appreciation. Compound your returns automatically.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Limited time airdrop! Claim your free Lodgify tokens now and join the future of real estate investment.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Claim Your Tokens Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className='md:w-1/3'>
              <div className="text-2xl font-bold text-white mb-4">Lodgify</div>
              <p className="text-gray-400">
                Democratizing real estate investment through blockchain technology.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Airdrop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How to Claim</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lodgify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
