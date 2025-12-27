import React from 'react';
import { Eye, ShoppingCart } from 'lucide-react';

const panjabiProducts = [
  {
    id: 1,
    category: 'PANJABI',
    title: 'Traditional Panjabi Set',
    description:
      'Classic panjabi set with matching bottom, featuring traditional block print patterns.',
    price: '3,200',
    oldPrice: null,
    discount: null,
    isFeatured: true,
    colors: ['White', 'Off-White'],
    image:
      'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=800',
  },
  {
    id: 2,
    category: 'PANJABI',
    title: 'Designer Panjabi',
    description:
      'Contemporary designer panjabi with mandarin collar and contrast piping.',
    price: '4,200',
    oldPrice: '4,800',
    discount: '-13%',
    isFeatured: false,
    colors: ['Navy', 'Teal'],
    image:
      'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=800',
  },
  {
    id: 3,
    category: 'PANJABI',
    title: 'Casual Cotton Panjabi',
    description:
      'Lightweight cotton panjabi perfect for daily wear and casual occasions.',
    price: '1,800',
    oldPrice: null,
    discount: null,
    isFeatured: false,
    colors: ['Mustard', 'Sage'],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800',
  },
  {
    id: 4,
    category: 'PANJABI',
    title: 'Festive Panjabi',
    description:
      'Rich festive panjabi with heavy threadwork, ideal for Eid and special celebrations.',
    price: '5,500',
    oldPrice: null,
    discount: null,
    isFeatured: true,
    colors: ['Black/Gold', 'White/Silver'],
    image:
      'https://images.unsplash.com/photo-1598454444233-9dc334394ed3?q=80&w=800',
  },
];

const PanjabiCollectionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Section - Solid Goldish/Brown Theme */}
      <section className="bg-[#a68253] py-20 md:py-32 px-6 text-center">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
              Panjabi Collection
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light">
              Elegant traditional wear crafted with precision and love
            </p>
          </div>
        </div>
      </section>

      {/* 2. Products Grid Section */}
      <section className="py-16 px-6 container mx-auto">
        {/* Result Counter */}
        <div className="mb-10">
          <span className="text-gray-400 text-sm font-medium">4 products</span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {panjabiProducts.map(item => (
            <div key={item.id} className="group flex flex-col">
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f9f9f9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.isFeatured && (
                    <span className="bg-[#d4af37] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  {item.discount && (
                    <span className="bg-[#e63946] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                      {item.discount}
                    </span>
                  )}
                </div>

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                  <button className="flex items-center gap-2 bg-[#d4af37] text-white px-5 py-2.5 rounded-lg hover:bg-[#b8962d] transition-all transform translate-y-4 group-hover:translate-y-0 shadow-xl">
                    <Eye size={18} />
                    <span className="text-xs font-bold uppercase tracking-tighter">
                      View
                    </span>
                  </button>
                  <button className="flex items-center gap-2 bg-[#4a1d1d] text-white px-5 py-2.5 rounded-lg hover:bg-[#331414] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-xl">
                    <ShoppingCart size={18} />
                    <span className="text-xs font-bold uppercase tracking-tighter">
                      Add
                    </span>
                  </button>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="mt-6 space-y-2 px-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed h-10">
                  {item.description}
                </p>

                {/* Price Display */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-[#d4af37] text-2xl font-bold font-sans">
                    ৳{item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through text-sm font-sans">
                      ৳{item.oldPrice}
                    </span>
                  )}
                </div>

                {/* Color Information */}
                <div className="text-[12px] text-gray-500">
                  <span className="font-semibold text-gray-400">Colors:</span>{' '}
                  {item.colors.join(', ')} +1
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PanjabiCollectionPage;
