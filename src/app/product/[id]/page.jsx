'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import {
  ShoppingCart,
  Heart,
  ChevronLeft,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
} from 'lucide-react';
import { products } from '../../../data/products';

export default function ProductDetails({ params }) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);

  // State for selections
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('Cream');
  const [quantity, setQuantity] = useState(1);

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
    <div className="min-h-screen bg-white pb-20 font-sans">
      <div className="container mx-auto px-6 py-10">
        {/* Breadcrumb & Back */}
        <div className="flex flex-col gap-4 mb-8">
          <nav className="text-sm text-gray-400 flex gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            /
            <Link
              href={`/category/${product.category}`}
              className="hover:underline capitalize"
            >
              {product.category}
            </Link>{' '}
            /<span className="text-gray-600">{product.title}</span>
          </nav>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-[#c4a052] font-medium"
          >
            <ChevronLeft size={20} /> Back
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-[40px] w-full aspect-[4/5] object-cover shadow-sm"
            />
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            <span className="bg-[#5c2d2d] text-white px-4 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              {product.category}
            </span>

            <h1 className="text-5xl font-serif font-bold text-[#2d1a1a]">
              {product.title}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed">
              Comfortable cotton atar for everyday elegance, featuring subtle
              embroidery patterns.
            </p>

            <div className="text-[#c4a052] text-5xl font-bold">
              ৳{product.price}
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Select Size</h3>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-[#c4a052] border-[#c4a052] text-white'
                        : 'border-gray-200 text-gray-600 hover:border-[#c4a052]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Select Color</h3>
              <div className="flex gap-3">
                {['White', 'Cream', 'Light Blue'].map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 rounded-xl border font-medium transition-all ${
                      selectedColor === color
                        ? 'bg-[#c4a052] border-[#c4a052] text-white'
                        : 'border-gray-200 text-gray-600 hover:border-[#c4a052]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Toggle */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Quantity</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-200 rounded-xl px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-500 hover:text-black"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-10 text-center font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-500 hover:text-black"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <span className="text-gray-400 font-medium">In Stock</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex-[2] bg-[#e6b36e] hover:bg-[#d4a05d] text-white py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <Link href={`/order/${product.id}`} className="flex-1">
                <button className="w-full bg-[#6b3131] hover:bg-[#522525] text-white py-4 px-8 rounded-2xl font-bold transition-all">
                  Order Now
                </button>
              </Link>
              <button className="p-4 border border-gray-200 rounded-2xl hover:bg-gray-50">
                <Heart size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-3 gap-4 py-8 px-6 bg-[#fdfaf5] rounded-[30px] border border-[#f5ece0]">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="text-[#c4a052]" size={24} />
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Free Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-x border-[#f0e4d4]">
                <ShieldCheck className="text-[#c4a052]" size={24} />
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Secure Payment
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="text-[#c4a052]" size={24} />
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Easy Returns
                </span>
              </div>
            </div>

            {/* Product Details List */}
            <div className="pt-6 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#2d1a1a]">
                Product Details
              </h3>
              <ul className="space-y-3">
                {[
                  '100% pure cotton',
                  'Breathable fabric',
                  'Machine washable',
                  'Durable stitching',
                ].map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4a052]" />{' '}
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {suggestions.length > 0 && (
          <div className="pt-24">
            <h2 className="text-4xl font-serif font-bold mb-12 text-[#2d1a1a]">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {suggestions.map(item => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[30px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[450px] w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-[#f87171] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        -18%
                      </span>
                      <span className="bg-[#e6b36e] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <h4 className="mt-6 text-xl font-serif font-bold group-hover:text-[#c4a052]">
                    {item.title}
                  </h4>
                  <span className="text-[#c4a052] text-lg font-bold">
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
