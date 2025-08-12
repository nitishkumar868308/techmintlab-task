import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between gap-10">
        {/* About Section */}
        <div className="md:w-1/4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            {/* Fixed logo size to standard Tailwind */}
            <img
              src="https://techmintlab.com/assets/images/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <h2 className="text-gray-500 text-sm  mb-4">info@techmintlab.com</h2>
          {/* Social Icons below address */}
          <div className="flex space-x-6 text-blue-600 text-xl justify-center md:justify-start">
            <a
              href="https://facebook.com/techmintlab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/techmintlab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/company/techmintlab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <a
                href="/services/mobile-app"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href="/services/web-dev"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="/services/desktop-software"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Desktop Software
              </a>
            </li>
            <li>
              <a
                href="/services/cloud-solutions"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Cloud Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <a
                href="/portfolio"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-red-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Get Tech Insights */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">
            Get Tech Insights
          </h3>
          <form className="flex mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-4 rounded-r-md flex items-center justify-center"
              aria-label="Send Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>

          <p className="text-gray-400 text-sm mb-1">📞 +91-7027944324</p>
          <p className="text-gray-400 text-sm mb-4">Karnal, Haryana, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-600 text-md select-none">
        &copy; {new Date().getFullYear()} TechMintLab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
