"use client";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 border-t-4 border-yellow-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="flex text-9xl items-center space-x-2">
              <Image
                src="/event-in.png"
                alt="CineMax Logo"
                width={120}
                height={120}
              />
              <span className="text-2xl font-bold"></span>
            </Link>
            <p className="mt-3 text-gray-400">Enjoy Your Holiday With Us</p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-gray-400 text-2xl">
                <FaTwitter />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-gray-400 text-2xl">
                <FaInstagram />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-gray-400 text-2xl">
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} EVENT-IN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
