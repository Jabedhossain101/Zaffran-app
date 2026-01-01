import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with Premium Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#4a1d1d] via-[#7d4a2a] to-[#2d1a12]"
        aria-hidden="true"
      />

      
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto relative z-10 text-center text-white">
        {/* Mail Icon Circle */}
        <div className="mx-auto w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-8 transition-transform duration-500 hover:rotate-12">
          <Mail size={28} className="text-[#d4af37]" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style tips delivered straight to your inbox.
          </p>

          {/* Form Section */}
          <form className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all backdrop-blur-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8962d] text-black font-bold rounded-xl transition-all duration-300 group shadow-lg shadow-black/20"
            >
              Subscribe
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Privacy Policy Text */}
          <p className="text-gray-400 text-xs mt-6">
            By subscribing, you agree to our{' '}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Privacy Policy
            </a>{' '}
            and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
