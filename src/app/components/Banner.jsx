'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    category: 'Cultural Heritage',
    title: 'Panjabi Collection',
    description:
      'Embrace tradition with our handcrafted panjabi collection featuring exquisite embroidery.',
    image:
      'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=2000', // Replace with your image
    color: 'bg-[#4a1d1d]',
  },
  {
    id: 2,
    category: 'Premium Fragrance',
    title: 'Atar Collection',
    description:
      'Experience the essence of luxury with our premium, long-lasting organic atar oils.',
    image:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000',
    color: 'bg-[#1d2a4a]',
  },
  {
    id: 3,
    category: 'Seasonal Wear',
    title: 'Winter Collection',
    description:
      'Stay warm and stylish with our premium winter shawls and handcrafted outerwear.',
    image:
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=2000',
    color: 'bg-[#2d3a2d]',
  },
];

export default function Banner() {
  return (
    <div className="relative group w-full h-[600px] md:h-[750px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className="h-full w-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-110 group-active:scale-100"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />{' '}
                {/* Dark overlay */}
              </div>

              {/* Content Container */}
              <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
                <div className="max-w-2xl space-y-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider text-[#d4af37]">
                    {slide.category}
                  </span>

                  <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight">
                    {slide.title.split(' ')[0]} <br />
                    <span className="font-light italic">
                      {slide.title.split(' ')[1]}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-8 py-4 bg-[#d4af37] hover:bg-[#b8962d] text-black font-semibold rounded-md transition-all duration-300">
                      Explore Collection
                    </button>
                    <button className="px-8 py-4 border border-white hover:bg-white hover:text-black font-semibold rounded-md transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <button className="button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all opacity-0 group-hover:opacity-100">
          <ChevronLeft size={24} />
        </button>
        <button className="button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all opacity-0 group-hover:opacity-100">
          <ChevronRight size={24} />
        </button>

        {/* Custom Pagination (Bottom Bars) */}
        <div className="custom-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 !w-auto"></div>
      </Swiper>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #d4af37 !important;
          width: 60px;
        }
      `}</style>
    </div>
  );
}
