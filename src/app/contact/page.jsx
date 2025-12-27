'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Search,
  ShoppingBag,
  User,
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      <header className="bg-[#a68253] py-24 md:py-32 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light">
            We'd love to hear from you
          </p>
        </div>
      </header>

      {/* 3. Main Content Section */}
      <main className="container mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#2d2d2d] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Have questions about our products or need assistance with your
                order? We're here to help! Reach out to us through any of the
                following channels.
              </p>
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#fdf2e9] flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2d2d2d]">
                    Our Location
                  </h4>
                  <p className="text-gray-500">
                    123 Fashion Street, Gulshan
                    <br />
                    Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#fdf2e9] flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2d2d2d]">Phone</h4>
                  <p className="text-gray-500">
                    +880 1234-567890
                    <br />
                    +880 9876-543210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#fdf2e9] flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2d2d2d]">Email</h4>
                  <p className="text-gray-500">
                    info@zaffran.com
                    <br />
                    support@zaffran.com
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#fdf2e9] flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2d2d2d]">
                    Business Hours
                  </h4>
                  <p className="text-gray-500">
                    Saturday - Thursday: 10:00 AM - 8:00 PM
                    <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-3xl font-serif font-bold text-[#2d2d2d] mb-8">
              Send us a Message
            </h3>

            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Your Message *
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-[#d4af37] hover:bg-[#b8962d] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 group active:scale-[0.98]">
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
