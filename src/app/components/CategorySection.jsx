import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Atar',
    description: 'Traditional long garments with elegant designs',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000', // Change image as needed
    link: '#',
  },
  {
    id: 2,
    title: 'Panjabi',
    description: 'Classic kurta sets for every occasion',
    image:
      'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=1000',
    link: '#',
  },
  {
    id: 3,
    title: 'Winter Collection',
    description: 'Warm and luxurious seasonal wear',
    image:
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=1000',
    link: '#',
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#fdfbf7] py-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2d2d] mb-4">
            Shop By Category
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Explore our carefully curated of traditional South Asian attire,
            crafted with premium fabrics and timeless designs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(item => (
            <div
              key={item.id}
              className="group relative h-[500px] w-full overflow-hidden rounded-[30px] cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Gradient Overlay - Image er upore text futiye tolar jonno */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Area */}
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <h3 className="text-3xl font-serif font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:text-white transition-colors group/btn"
                >
                  Shop Now
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-2"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
