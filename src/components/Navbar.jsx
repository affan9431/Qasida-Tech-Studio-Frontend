import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center bg-[#F5F9EE]/70 backdrop-blur-md p-4 rounded-xl z-50">
      {/* Logo */}
      <Link to="/">
        <img
          src="/images/logo (2).png"
          alt="Qasida Tech Studio Logo"
          className="h-10 w-10 object-cover"
        />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-9">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="text-[#737272] hover:text-black transition"
            >
              {item.name}
            </Link>
          </li>
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
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90%] bg-[#F5F9EE]/90 backdrop-blur-md rounded-xl flex flex-col items-center gap-4 p-4 transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-40 opacity-0 pointer-events-none"
        }`}
      >
        {links.map((item) => (
          <li key={item.name} className="w-full text-center">
            <Link
              to={item.path}
              className="text-[#737272] hover:text-black transition block"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
