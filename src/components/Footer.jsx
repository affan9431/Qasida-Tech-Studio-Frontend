import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#F5F9EE] text-gray-700 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo or Name */}
        <div className="flex items-center gap-2">
          <img src="/images/logo (2).png" alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg">Qasida Tech Studio</span>
        </div>

        {/* Center: Links */}
        <ul className="flex gap-6 text-sm">
          {["Home", "About", "Contact"].map((item) => (
            <Link to={`/app/${item.toLowerCase()}`}>
              <li
                key={item}
                className="hover:text-black transition cursor-pointer"
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>

        {/* Right: Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Qasida Tech Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
