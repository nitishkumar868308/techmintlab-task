import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="https://techmintlab.com/assets/images/logo.png"
              alt="Logo"
              className="w-18 h-18 object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/portfolio" className="hover:text-yellow-400 transition">
            Portfolio
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
          >
            Contact Us Now
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden text-gray-900 px-4 py-3 flex flex-col gap-3">
          <Link
            to="/"
            className="hover:text-yellow-400 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-yellow-400 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className="bg-yellow-400 text-center px-5 py-2   text-black rounded-full font-medium hover:bg-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
