import { Link, useLocation } from "react-router-dom";
import navIndicator from "/navIndicator.png"; // adjust the path

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "New Arrival", path: "/new-arrival" },
    { name: "Category", path: "/category" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="flex justify-center gap-10 bg-[#FFF7ED] py-4">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <div key={link.name} className="relative tommy flex flex-col items-center">
            <Link
              to={link.path}
              className={`text-[16px] font-semibold ${
                isActive ? "text-[#E63A04]" : "text-[#A08383]"
              }`}
            >
              {link.name}
            </Link>
            {isActive && (
              <img
                src={navIndicator}
                alt="indicator"
                className="absolute bottom-4 w-4 h-2"
              />
            )}
          </div>
        );
      })}
      <div className="h-10 relative">
      <img src="/cart.png" alt="" className="h-8" />
      <div className="absolute w-3 h-3 bg-[#333333] text-[10px] p-[4px] flex justify-center items-center rounded-full text-white top-0 right-0">0</div>
      </div>
    </nav>
  );
}
