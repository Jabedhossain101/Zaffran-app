import React from 'react';
import { Eye, ShoppingCart, Search, ShoppingBag, User } from 'lucide-react';

const winterProducts = [
  {
    id: 1,
    category: 'WINTER',
    title: 'Wool Blend Sherwani',
    description:
      'Warm wool blend sherwani with quilted lining, perfect for winter weddings.',
    price: '6,800',
    oldPrice: null,
    discount: null,
    isFeatured: true,
    colors: ['Charcoal', 'Brown'],
    image:
      'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=800',
  },
  {
    id: 2,
    category: 'WINTER',
    title: 'Velvet Panjabi',
    description:
      'Luxurious velvet panjabi for cold weather occasions, featuring subtle sheen.',
    price: '4,500',
    oldPrice: '5,200',
    discount: '-13%',
    isFeatured: false,
    colors: ['Burgundy', 'Forest Green'],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800',
  },
  {
    id: 3,
    category: 'WINTER',
    title: 'Tweed Nehru Jacket',
    description:
      'Classic tweed Nehru jacket that pairs perfectly with any kurta or panjabi.',
    price: '3,500',
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['Grey', 'Brown'],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800',
  },
  {
    id: 4,
    category: 'WINTER',
    title: 'Pashmina Shawl Set',
    description:
      'Exquisite pashmina shawl with matching atar, handwoven with traditional patterns.',
    price: '7,500',
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['Natural', 'Ivory'],
    image:
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800',
  },
];

const WinterCollectionPage = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7]">

      <header className="bg-[#333e48] py-24 md:py-36 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            Winter Collection
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light">
            Stay warm in style with our premium winter traditional wear
          </p>
        </div>
      </header>

      {/* 3. Product Grid Section */}
      <main className="py-16 px-6 container mx-auto">
        <div className="mb-10">
          <span className="text-gray-400 text-sm font-medium">4 products</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {winterProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isFeatured && (
                    <span className="bg-[#d4af37] text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                      Featured
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-[#e63946] text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                  <button className="flex items-center gap-2 bg-[#d4af37] text-white px-5 py-2.5 rounded-xl hover:bg-[#b8962d] transition-all transform translate-y-4 group-hover:translate-y-0">
                    <Eye size={18} />
                    <span className="text-xs font-bold">View</span>
                  </button>
                  <button className="flex items-center gap-2 bg-[#4a1d1d] text-white px-5 py-2.5 rounded-xl hover:bg-[#331414] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75">
                    <ShoppingCart size={18} />
                    <span className="text-xs font-bold">Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed h-10">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 pt-3">
                  <span className="text-[#d4af37] text-2xl font-bold">
                    ৳{product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ৳{product.oldPrice}
                    </span>
                  )}
                </div>

                <div className="text-[12px] text-gray-500 pt-1">
                  <span className="font-semibold text-gray-400">Colors:</span>{' '}
                  {product.colors.join(', ')} +1
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WinterCollectionPage;
