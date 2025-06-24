import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import navIndicator from "/navIndicator.png"; // adjust the path

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/shop/sadfre" },
    { name: "CheckOut", path: "/checkout" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="w-full bg-[#FFF7ED] py-4 px-4 flex items-center justify-between relative z-20">
      {/* Logo or Brand (optional) */}
      <div className="flex items-center gap-2">
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#E63A04] mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#E63A04] mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#E63A04] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Optionally add a logo here */}
      </div>
      <img src="/main2.png" alt="" className="h-[30px] mx-auto block md:hidden" />
      {/* Nav Links */}
      <div
        className={`flex-1 flex flex-col md:flex-row md:items-center md:justify-center gap-6 pb-10 md:gap-10 tommy bg-[#FFF7ED] md:bg-transparent absolute md:static left-0 top-full md:top-auto w-full md:w-auto transition-all duration-300 z-10 ${
          menuOpen ? "block " : "hidden md:flex"
        }`}
      >
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <div
              key={link.name}
              className="relative flex flex-col items-center"
            >
              <Link
                to={link.path}
                className={`text-[16px] font-semibold ${
                  isActive ? "text-[#E63A04]" : "text-[#A08383]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
              {isActive && (
                <img
                  src={navIndicator}
                  alt="indicator"
                  className="absolute top-6 w-4 h-2 hidden md:block"
                />
              )}
            </div>
          );
        })}
        <div className="h-10 relative hidden md:flex items-center ml-2">
          <img src="/cart.png" alt="cart" className="h-8" />
          <div className="absolute w-3 h-3 bg-[#333333] text-[10px] p-[4px] flex justify-center items-center rounded-full text-white top-0 right-0">
            0
          </div>
        </div>
      </div>
      {/* Cart Icon */}
    </nav>
  );
}
