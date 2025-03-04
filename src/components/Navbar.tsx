"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItemsCount(
      cart.reduce(
        (total: number, item: { quantity: number }) => total + item.quantity,
        0
      )
    );
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-pink-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1668902224071-e5fb23354d25?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="SS Jewelry Store Logo"
              width={100}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-yellow-500">
              SS Jewelry
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex-grow max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find your perfect piece..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-5 w-5 text-black" />
                </button>
              </div>
            </form>
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-yellow-500 hover:text-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-yellow-500 hover:text-green-300"
                >
                  Our Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-yellow-500 hover:text-green-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-yellow-500 hover:text-green-300"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-yellow-500 hover:text-green-300 relative"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-green-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find your perfect piece..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </form>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block text-gray-600 hover:text-green-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block text-gray-600 hover:text-green-300"
                >
                  Our Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-600 hover:text-green-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-600 hover:text-green-300"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block text-gray-600 hover:text-green-300 relative"
                >
                  <ShoppingCart className="h-6 w-6 inline-block mr-2" />
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
