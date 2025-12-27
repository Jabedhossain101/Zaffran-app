'use client';

import React, { use } from 'react';
import Link from 'next/link';
import {
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronLeft,
} from 'lucide-react';
import { products } from '../../../data/products';

export default function ProductDetails({ params }) {
  const { id } = use(params); // ✅ IMPORTANT FIX

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Product not found
      </div>
    );
  }

  const suggestions = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-6 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4af37] mb-8"
        >
          <ChevronLeft size={20} /> Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <img
            src={product.image}
            className="rounded-3xl aspect-[4/5] object-cover"
          />

          <div className="space-y-6">
            <span className="bg-[#4a1d1d] text-white px-4 py-1 rounded-full text-xs">
              {product.category}
            </span>

            <h1 className="text-4xl font-serif font-bold">{product.title}</h1>

            <p className="text-gray-500">{product.description}</p>

            <div className="flex gap-4 items-center">
              <span className="text-[#d4af37] text-4xl font-bold">
                ৳{product.price}
              </span>
              {product.oldPrice && (
                <span className="line-through text-gray-400">
                  ৳{product.oldPrice}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-[#d4af37] py-4 text-white rounded-xl font-bold">
                <ShoppingCart className="inline mr-2" /> Add to Cart
              </button>
              <button className="p-4 border rounded-xl">
                <Heart />
              </button>
            </div>

            <ul className="pt-6 space-y-2">
              {product.details.map((d, i) => (
                <li key={i} className="text-gray-600">
                  • {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="pt-20">
            <h2 className="text-3xl font-serif font-bold mb-8">
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestions.map(item => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="group"
                >
                  <img
                    src={item.image}
                    className="h-[350px] w-full object-cover rounded-2xl"
                  />
                  <h4 className="mt-4 font-serif font-bold group-hover:text-[#d4af37]">
                    {item.title}
                  </h4>
                  <span className="text-[#d4af37] font-bold">
                    ৳{item.price}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
