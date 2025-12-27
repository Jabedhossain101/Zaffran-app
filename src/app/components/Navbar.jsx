'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, X, ShoppingBag, User, Menu } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 md:px-6 py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-serif font-bold text-[#C9974C]">
          Zaffran
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <Link href="/" className="text-[#C9974C]">
            Home
          </Link>
          <Link href="/attarpage" className="hover:text-[#C9974C]">
            Atar
          </Link>
          <Link href="/panjabipage" className="hover:text-[#C9974C]">
            Panjabi
          </Link>
          <Link href="/winter" className="hover:text-[#C9974C]">
            Winter
          </Link>
          <Link href="/contact" className="hover:text-[#C9974C]">
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          {isSearchOpen ? (
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm w-56 focus:outline-none border-[#C9974C]"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex p-2 hover:bg-gray-100 rounded-full"
            >
              <Search size={22} />
            </button>
          )}

          {/* Cart */}
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingBag size={22} />
            <span className="badge badge-xs bg-[#C9974C] border-none absolute top-1 right-1"></span>
          </button>

          {/* Login (Desktop) */}
          <Link
            href="/login"
            className="hidden md:flex btn btn-sm bg-[#C9974C] hover:bg-[#b08340] text-white border-none px-5"
          >
            <User size={16} className="mr-1" /> Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t pt-4 space-y-4 text-gray-700 font-medium">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/"
            className="block px-4"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/attarpage"
            className="block px-4"
          >
            Atar
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/panjabipage"
            className="block px-4"
          >
            Panjabi
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/winter"
            className="block px-4"
          >
            Winter
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/contact"
            className="block px-4"
          >
            Contact
          </Link>

          <div className="px-4 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered input-sm w-full focus:outline-none border-[#C9974C]"
            />
          </div>

          <div className="px-4">
            <button className="w-full btn btn-sm bg-[#C9974C] hover:bg-[#b08340] text-white border-none">
              <User size={16} className="mr-1" /> Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
