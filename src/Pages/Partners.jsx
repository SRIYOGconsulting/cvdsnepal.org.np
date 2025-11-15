import React from "react";

const Partners = () => {
  const partners = [
  {
      name: "SRIYOG Consulting",
      heading: "Expert IT Solutions Provider",
      link: "https://sriyog.com/",
      image: "/assets/images/projects/sriyog-placeholder.png",
    },
    {
      name: "Aramex",
      heading: "Global Logistics & Shipping Partner",
      link: "https://broadpress.org/",
      image: "/assets/images/projects/aramex-placeholder.png",
    },
    {
      name: "Internet Nepal",
      heading: "Reliable Internet Services",
      link: "https://broadpress.org/",
      image: "/assets/images/projects/internet-nepal-placeholder.png",
    },
    {
      name: "Aqua World",
      heading: "Premium Water Solutions & Services",
      link: "https://broadpress.org/",
      image: "/assets/images/projects/aqua-world-placeholder.png",
    },
    {
      name: "Oho Cake",
      heading: "Artisan Cakes & Bakery Delights",
      link: "https://ohocake.com/?store_locations=kathmandu",
      image: "/assets/images/projects/oho-cake-placeholder.png",
    },
    {
      name: "Daraz",
      heading: "Leading E-commerce Marketplace",
      link: "https://broadpress.org/",
      image: "/assets/images/projects/daraz-placeholder.png",
    },
    {
      name: "SNG Solution",
      heading: "Innovative Tech Solutions",
      link: "https://sngsolution.com/",
      image: "/assets/images/projects/sng-solution-placeholder.png",
    },
    {
      name: "Ghaila Oil",
      heading: "Trusted Fuel & Lubricant Provider",
      link: "https://broadpress.org/",
      image: "/assets/images/projects/ghaila-oil-placeholder.png",
    },
    {
      name: "BK Masala",
      heading: "Authentic Spices & Flavors",
      link: "https://www.bkmasala.com.np/",
      image: "/assets/images/projects/bk-masala-placeholder.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Top Section - BroadPress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Section */}
        <div className="text-justify">
          <h2 className="font-bold text-lg text-black mb-4">
            The CVDS Nepal website is proudly powered by{" "}
            <span className="text-[#1F2B6C]">BroadPress CMS.</span>
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            BroadPress was designed with one clear mission: to make managing and
            publishing website content as intuitive as creating it. Built
            specifically for businesses, it features a component-based
            architecture, ready-to-use templates, and performance optimized for
            dynamic, enterprise-grade websites.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            By choosing BroadPress, CVDS Nepal benefits from a streamlined
            content management process, faster website updates, and a consistent
            digital experience. Like many forward-thinking organizations, CVDS
            Nepal leverages BroadPress to connect with its audience more
            efficiently and effectively, on a platform built for scalability and
            impact.
          </p>

          <a
            href="https://broadpress.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="outline outline-1 outline-gray-400 text-[#1F2B6C] px-6 py-2 rounded-md text-sm hover:bg-gray-200 transition inline-block"
          >
            Browse More
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/assets/images/projects/placeholder2.png"
            alt="BroadPress CMS illustration"
            className="rounded-md max-w-full h-auto"
          />
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center min-h-[250px] p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow" // Added justify-center here to vertically center content below the logo
          >
            {/* Partner Logo */}
            <div className="mb-4 flex-shrink-0">
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                className="rounded-md object-contain mx-auto" // Added mx-auto here for explicit horizontal centering of logo
                style={{ width: "80%", height: "auto", maxHeight: "180px" }}
              />
            </div>
            {/* Partner Name */}
            <h3 className="text-gray-800 text-sm font-medium mb-2">
              {partner.name}
            </h3>
            {/* Partner Heading */}
            <p className="text-gray-600 text-xs mb-4">{partner.heading}</p>{" "}
            {/* Removed flex-1 here to prevent unnecessary expansion, allowing natural centering via justify-center */}
            {/* Browse More Button */}
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="outline outline-1 outline-gray-400 text-[#1F2B6C] px-6 py-1 rounded-md text-sm hover:bg-gray-200 transition inline-block no-underline self-center" // Added self-center here for button alignment consistency
              aria-label={`Visit ${partner.name} website`}
            >
              Browse More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
