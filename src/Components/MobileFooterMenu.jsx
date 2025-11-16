import React from "react";
import { Link, useLocation } from "react-router-dom";

const MobileFooterMenu = () => {
  const location = useLocation();

  const menuItems = [
    {
      label: "Home",
      path: "/",
      icon: "/assets/images/footer-icons/home.svg",
    },
    {
      label: "About",
      path: "/about",
      icon: "/assets/images/footer-icons/about.svg",
    },
    {
      label: "Donate",
      path: "/donate",
      icon: "/assets/images/footer-icons/donate.svg",
    },
    {
      label: "Team",
      path: "/team",
      icon: "/assets/images/footer-icons/team.svg",
    },
    {
      label: "Contact",
      path: "/contact",
      icon: "/assets/images/footer-icons/contact.svg",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#f3eded] shadow-lg border-t border-gray-300 z-50 md:hidden">
      <div className="flex items-center justify-between px-5 py-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className="flex flex-col items-center w-full"
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`h-7 w-7 ${isActive ? "opacity-100" : "opacity-60"}`}
              />
              <span
                className={`text-[12px] mt-1 font-medium ${
                  isActive ? "text-[#1F2B6C]" : "text-gray-700"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFooterMenu;
