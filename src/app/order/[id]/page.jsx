'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { products } from '../../../data/products';

export default function CheckoutPage({ params }) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20 font-sans">
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        {/* Back Button */}
        <Link
          href={`/product/${id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-10 transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </Link>

        <h1 className="text-4xl font-serif font-bold text-[#2d1a1a] mb-12">
          Complete Your Order
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Shipping Information Form */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xl font-bold text-[#2d1a1a]">
              Shipping Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#c4a052] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#c4a052] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="text"
                  placeholder="+880 1XXX-XXXXXX"
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#c4a052] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#c4a052] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Delivery Address *
              </label>
              <textarea
                rows="4"
                placeholder="Enter your complete delivery address"
                className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#c4a052] transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Order Notes (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Any special instructions for your order"
                className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#c4a052] transition-all resize-none"
              ></textarea>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="space-y-6">
            <div className="bg-[#fdfaf5] p-8 rounded-[30px] border border-[#f5ece0] shadow-sm">
              <h2 className="text-xl font-bold text-[#2d1a1a] mb-6">
                Order Summary
              </h2>

              {/* Product Info Mini */}
              <div className="flex gap-4 mb-8">
                <img
                  src={product.image}
                  className="w-20 h-24 object-cover rounded-xl"
                  alt={product.title}
                />
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-800">{product.title}</h4>
                  <p className="text-xs text-gray-400">
                    Size: L | Color: Cream
                  </p>
                  <p className="text-xs text-gray-400">Qty: 1</p>
                </div>
              </div>

              {/* Billing Details */}
              <div className="space-y-4 border-t border-[#f0e4d4] pt-6 text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800 font-sans">
                    ৳{product.price}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-800 font-sans">
                    ৳100
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#f0e4d4]">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-[#c4a052] font-sans">
                    ৳
                    {(Number(String(product.price).replace(/,/g, '')) || 0) +
                      100}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-[11px] text-gray-400 leading-relaxed italic">
                * Payment will be collected upon delivery (Cash on Delivery)
              </p>

              <button className="w-full mt-8 bg-[#6b3131] hover:bg-[#522525] text-white py-4 rounded-2xl font-bold transition-all shadow-lg">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
