'use client';

import React, { useState } from 'react';
import { Eye, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    category: 'Atar',
    title: 'Royal Silk Atar',
    description:
      'Elegant royal silk atar with intricate embroidery, perfect for special occasions and...',
    price: 4500,
    oldPrice: 5500,
    discount: '-18%',
    isFeatured: true,
    colors: ['Ivory', 'Gold'],
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
  },
  {
    id: 2,
    category: 'Atar',
    title: 'Classic Cotton Atar',
    description:
      'Comfortable cotton atar for everyday elegance, featuring subtle embroidery patterns.',
    price: 2800,
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['White', 'Cream'],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800',
  },
  {
    id: 3,
    category: 'Atar',
    title: 'Premium Linen Atar',
    description:
      'Luxurious linen atar with modern cut, combining tradition with contemporary style.',
    price: 3800,
    oldPrice: 4200,
    discount: '-10%',
    isFeatured: true,
    colors: ['Beige', 'Navy'],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800',
  },
  {
    id: 4,
    category: 'Winter',
    title: 'Wedding Collection Atar',
    description:
      'Exquisite wedding atar with heavy zari work and premium silk fabric.',
    price: 8500,
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['Royal Blue', 'Burgundy'],
    image:
      'https://images.unsplash.com/photo-1598454444233-9dc334394ed3?q=80&w=800',
  },
];

const filterOptions = ['All', 'Atar', 'Panjabi', 'Winter'];

export default function ProductSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter(p => p.category === activeFilter);

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#d4af37] font-medium tracking-[0.2em] uppercase text-sm">
            Handpicked For You
          </span>
          <h2 className="text-5xl font-serif font-bold text-[#2d2d2d] mt-2 mb-6">
            Our Products
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Each piece is crafted with care, combining traditional techniques
            with contemporary styles for the modern gentleman.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 mb-12">
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-8 py-2 rounded-lg border transition-all duration-300 ${
                activeFilter === option
                  ? 'bg-[#d4af37] border-[#d4af37] text-white shadow-lg'
                  : 'border-gray-200 text-gray-600 hover:border-[#d4af37]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group">
              {/* Image Container */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden bg-[#f3f3f3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount && (
                    <span className="bg-[#e63946] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.discount}
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-[#d4af37] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-3">
                  <button className="flex items-center gap-2 bg-[#d4af37] text-white px-4 py-2 rounded-md hover:bg-[#b8962d] transition-all transform translate-y-4 group-hover:translate-y-0">
                    <Eye size={18} />
                    <span className="text-sm font-medium">View</span>
                  </button>
                  <button className="flex items-center gap-2 bg-[#4a1d1d] text-white px-4 py-2 rounded-md hover:bg-[#331414] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75">
                    <ShoppingCart size={18} />
                    <span className="text-sm font-medium">Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-6 space-y-2">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-[#d4af37] text-xl font-bold">
                    ৳{product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ৳{product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-[13px] text-gray-500">
                  <span className="font-semibold text-gray-400">Colors:</span>{' '}
                  {product.colors.join(', ')} +1
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
