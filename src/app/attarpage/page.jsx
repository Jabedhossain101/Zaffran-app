import React from 'react';
import { Eye, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    category: 'ATAR',
    title: 'Royal Silk Atar',
    description:
      'Elegant royal silk atar with intricate embroidery, perfect for special occasions and...',
    price: '4,500',
    oldPrice: '5,500',
    discount: '-18%',
    isFeatured: true,
    colors: ['Ivory', 'Gold'],
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
  },
  {
    id: 2,
    category: 'ATAR',
    title: 'Classic Cotton Atar',
    description:
      'Comfortable cotton atar for everyday elegance, featuring subtle embroidery patterns.',
    price: '2,800',
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['White', 'Cream'],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800',
  },
  {
    id: 3,
    category: 'ATAR',
    title: 'Premium Linen Atar',
    description:
      'Luxurious linen atar with modern cut, combining tradition with contemporary style.',
    price: '3,800',
    oldPrice: '4,200',
    discount: '-10%',
    isFeatured: true,
    colors: ['Beige', 'Navy'],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800',
  },
  {
    id: 4,
    category: 'ATAR',
    title: 'Wedding Collection Atar',
    description:
      'Exquisite wedding atar with heavy zari work and premium silk fabric.',
    price: '8,500',
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['Royal Blue', 'Burgundy'],
    image:
      'https://images.unsplash.com/photo-1598454444233-9dc334394ed3?q=80&w=800',
  },
];

const AtarCollectionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Page Header Section (The Maroon Header) */}
      <section className="bg-[#4a1d1d] py-20 md:py-32 px-6 text-center">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Atar Collection
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light">
              Discover our exquisite range of Atar-inspired traditional wear
            </p>
          </div>
        </div>
      </section>

      {/* 2. Product Grid Section */}
      <section className="py-16 px-6 container mx-auto">
        {/* Product Count Label */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm font-medium">4 products</p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Box */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f3f3f3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount && (
                    <span className="bg-[#e63946] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      {product.discount}
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-[#d4af37] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      Featured
                    </span>
                  )}
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-2">
                  <button className="flex items-center gap-2 bg-[#d4af37] text-white px-4 py-2 rounded-md hover:bg-[#b8962d] transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <Eye size={16} />
                    <span className="text-xs font-semibold uppercase">
                      View
                    </span>
                  </button>
                  <button className="flex items-center gap-2 bg-[#4a1d1d] text-white px-4 py-2 rounded-md hover:bg-[#331414] transition-all transform translate-y-2 group-hover:translate-y-0 delay-75 shadow-lg">
                    <ShoppingCart size={16} />
                    <span className="text-xs font-semibold uppercase">Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info Below Image */}
              <div className="mt-5 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed h-8">
                  {product.description}
                </p>

                {/* Price Area */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[#d4af37] text-xl font-bold font-sans">
                    ৳{product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-xs font-sans">
                      ৳{product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Color Variations */}
                <div className="text-[11px] text-gray-500 pt-1">
                  <span className="font-semibold text-gray-400">Colors:</span>{' '}
                  {product.colors.join(', ')} +1
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AtarCollectionPage;
