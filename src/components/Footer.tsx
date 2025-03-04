"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    // For this example, we'll just simulate a successful subscription
    setSubscriptionStatus("success");
    setEmail("");
    setTimeout(() => setSubscriptionStatus("idle"), 3000);
  };

  return (
    <footer className="bg-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">
              SS Jewelry Store
            </h3>
            <p className="text-white">Exquisite jewelry for every occasion</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-yellow-500 text-lg font-semibold mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white hover:text-black">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-yellow-500 text-lg font-semibold mb-2">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
            <form onSubmit={handleSubscribe} className="mt-4">
              <h5 className="text-sm font-semibold mb-2">
                Subscribe to our newsletter
              </h5>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 text-gray-900 placeholder-gray-500 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus === "success" && (
                <p className="mt-2 text-green-400 text-sm">
                  Thank you for subscribing!
                </p>
              )}
              {subscriptionStatus === "error" && (
                <p className="mt-2 text-red-400 text-sm">
                  An error occurred. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <p>&copy; 2025 SS Jewelry Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
