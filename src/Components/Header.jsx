
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
    isHomePage && !scrolled
      ? "bg-transparent text-white shadow-none"
      : "bg-white text-[#1F2B6C] shadow-md"
  }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Activities", path: "/activities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo (responsive & clickable) */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
         src="/assets/images/projects/cvdslogo.png"
            alt="CVDS Logo"
            className={`h-10 sm:h-12 md:h-[63px] ml-2 sm:ml-4 rounded-lg cursor-pointer ${
              isHomePage && !scrolled ? "brightness-200" : ""
            }`}
          />
        </Link>
            
        {/*  Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((item, i) => {
            const active = location.pathname === item.path;
            const linkClasses = active
              ? isHomePage && !scrolled
                ? "text-[#00D1FF]"
                : "text-[#159EEC]"
              : isHomePage && !scrolled
              ? "text-white hover:text-[#00D1FF]"
              : "text-[#1F2B6C] hover:text-[#159EEC]";

            return (  
              <li key={i}>
                <Link
                  to={item.path}
                  className={`transition ${linkClasses}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/*  Desktop Donate Button */}
        <button
          onClick={() => navigate("/donate")}
          className={`hidden md:block font-semibold px-6 py-2 rounded-md transition ${
            isHomePage && !scrolled
              ? "border border-white text-white hover:bg-white hover:text-black"
              : "bg-[#1F2B6C] text-white hover:bg-[#159EEC]"
          }`}
        >
          Donate
        </button>

        {/*  Hamburger Menu Button (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl ml-3 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/*  Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            className={`absolute top-full left-0 w-full flex flex-col items-center bg-white lg:hidden shadow-md transition-all duration-300 ${
              isHomePage && !scrolled ? "text-[#1F2B6C]" : "text-[#1F2B6C]"
            }`}
          >
            <ul className="flex flex-col w-full text-center py-4 space-y-3">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="block py-2 hover:bg-gray-100"
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    navigate("/donate");
                    setMenuOpen(false);
                  }}
                  className="w-[90%] mx-auto bg-[#1F2B6C] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#159EEC] transition"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
