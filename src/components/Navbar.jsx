import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Contact"];

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center bg-[#F5F9EE]/70 backdrop-blur-md p-4 rounded-xl z-50">
      {/* Logo */}
      <div>
        <img
          src="/images/logo (2).png"
          alt="Logo"
          className="h-10 w-10 object-cover"
        />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-9">
        {links.map((item) => (
          <Link
            to={`/app/${item.toLowerCase()}`}
            key={item}
            className="text-[#737272] hover:text-black transition"
          >
            <li>{item}</li>
          </Link>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90%] bg-[#F5F9EE]/90 backdrop-blur-md rounded-xl flex flex-col items-center gap-4 p-4 transition-transform duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-40 opacity-0 pointer-events-none"
        }`}
      >
        {links.map((item) => (
          <Link
            to={`/app/${item.toLowerCase()}`}
            key={item}
            className="text-[#737272] hover:text-black transition w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
