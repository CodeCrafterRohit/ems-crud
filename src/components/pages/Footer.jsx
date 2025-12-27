import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-indigo-500">EMS</h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering organizations with seamless employee management
              solutions. Streamline your workflow today.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-indigo-500" />
                <span>
                  React Warriors,
                  <br />
                  Extra-Minded Legends, Code Kutch.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-indigo-500" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <span>support@emsdemo.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block pb-1">
              Feedback
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none text-gray-300 placeholder-gray-500"
              />
              <textarea
                placeholder="Your Message"
                rows="2"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none text-gray-300 placeholder-gray-500 resize-none"
              ></textarea>
              <button className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
                Send <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
