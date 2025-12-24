import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4a1d1d] text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#d4af37]">
              Zaffran
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Experience the essence of traditional South Asian elegance with
              our premium collection of handcrafted attire and fragrances.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Atar Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Panjabi Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Winter Wear
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold border-b border-white/10 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold border-b border-white/10 pb-2">
              Store Info
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#d4af37] mt-1 shrink-0" />
                <span>
                  123 Elegance Street, Banani
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#d4af37] shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#d4af37] shrink-0" />
                <span>info@zaffran.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Zaffran. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
