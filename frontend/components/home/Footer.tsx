"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">TransCare</h3>
            <p className="text-sm text-gray-300">
              Your comprehensive guide to gender-affirming healthcare and
              community support.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-indigo-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TransCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
