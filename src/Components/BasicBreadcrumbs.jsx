



import React from "react";
import { Link, useLocation } from "react-router-dom";

// Responsive Breadcrumb Header Section
const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Hide breadcrumbs on home page
  if (location.pathname === "/") return null;

  const pageTitleMap = {
    pastactivities: "Past Activities",
    upcomingactivities: "Upcoming Activities",
    support: "Support Us",
    partners: "Partners",
    messages: "Messages",
    videos: "Videos",
    faq: "FAQ",
    objectives: "Objectives",
    donate: "Donations",
    socialimpact: "Social Impact",
    casestudies: "Case Studies",
    tos: "Terms of Service",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
  };

  const formatName = (name) => {
    if (pageTitleMap[name.toLowerCase()]) {
      return pageTitleMap[name.toLowerCase()];
    }

    return name
      .replace(/([a-z])([A-Z])/g, "$1 $2") // split camelCase
      .replace(/-/g, " ") // replace hyphens with spaces
      .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize words
  };

  return (
    <section className="bg-[#1F2B6C] text-white mt-[72px] py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left break-words">
          {formatName(pathnames[pathnames.length - 1])}
        </h1>

        {/* Optional breadcrumb path for mobile (visible only if more than one level deep) */}
        {pathnames.length > 1 && (
          <nav className="mt-3 text-sm sm:text-base flex flex-wrap justify-center sm:justify-start gap-2 text-gray-200">
            <Link to="/" className="hover:underline hover:text-gray-100">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <React.Fragment key={to}>
                  <span>/</span>
                  {isLast ? (
                    <span className="text-gray-300">
                      {formatName(value)}
                    </span>
                  ) : (
                    <Link
                      to={to}
                      className="hover:underline hover:text-gray-100"
                    >
                      {formatName(value)}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
};

export default BasicBreadcrumbs;
