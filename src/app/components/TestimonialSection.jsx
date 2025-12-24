import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rafiq Ahmed',
    location: 'Dhaka',
    avatar: 'https://i.pravatar.cc/150?u=rafiq', // Replace with real images
    rating: 5,
    comment:
      'The quality of the atar I purchased exceeded my expectations. The fabric is premium and the embroidery work is exquisite. Will definitely order again!',
  },
  {
    id: 2,
    name: 'Karim Hassan',
    location: 'Chittagong',
    avatar: 'https://i.pravatar.cc/150?u=karim',
    rating: 5,
    comment:
      'Ordered a panjabi set for Eid and received so many compliments. The fit was perfect and the delivery was super fast. Highly recommend Zaffran!',
  },
  {
    id: 3,
    name: 'Imran Ali',
    location: 'Sylhet',
    avatar: 'https://i.pravatar.cc/150?u=imran',
    rating: 5,
    comment:
      'Best traditional wear store online! The winter sherwani I bought is both warm and stylish. Customer service was also very helpful.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#fdfbf7] py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#d4af37] font-medium tracking-[0.2em] uppercase text-sm">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2d2d]">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group border border-transparent hover:border-[#f3e5b5]"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote
                  size={48}
                  className="text-[#f3e5b5] transition-colors group-hover:text-[#d4af37]"
                  fill="currentColor"
                />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 italic text-lg leading-relaxed mb-8 flex-grow">
                "{review.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform group-hover:scale-110">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#2d2d2d] text-lg leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
