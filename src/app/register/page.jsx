'use client'; // 1. Client directive add kora hoyeche

import React, { useState } from 'react'; // 2. useState ekhane import kora hoyeche
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col items-center justify-center p-6">
      {/* Brand Logo */}
      <div className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-[#d4af37]">
          Zaffran
        </h1>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-md bg-white rounded-[32px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#2d2d2d] mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm">
            Join Zaffran for exclusive offers
          </p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          {/* Full Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <User size={18} />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-400 text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#d4af37] transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#d4af37] hover:bg-[#b8962d] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 active:scale-[0.98] mt-4"
          >
            Create Account
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-[#d4af37] font-bold hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
