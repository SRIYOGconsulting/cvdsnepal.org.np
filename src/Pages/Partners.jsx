import { useState } from "react";


// designed according to the desin provided in issue
import  img2 from "../assets/placeholder2.png";
import  img1 from "../assets/placeholder1.png";

const Partners = () => {
  const partners = [
    { name: "SRIYOG Consulting", link: "#" },
    { name: "Aramex", link: "#" },
    { name: "WiFi Nepal", link: "https://wifinepal.com.np/" },
    { name: "Aqua World", link: "#" },
    { name: "Oho Cake", link: "https://ohocake.com/" },
    { name: "Daraz", link: "#" },
    { name: "SNG Solution", link: "#" },
    { name: "Ghaila Oil", link: "https://www.facebook.com/GhailaOil/" },
    { name: "BK Masala", link: "https://www.bkmasala.com.np/" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Top Section - BroadPress */}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Section */}
        <div className="text-justify">
          <h2 className="font-bold text-lg text-black mb-4">
            The CVDS Nepal website is proudly powered by <span className="text-[#1F2B6C]">BroadPress CMS.</span>
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            BroadPress was designed with one clear mission: to make managing and publishing
            website content as intuitive as creating it. Built specifically for businesses,
            it features a component-based architecture, ready-to-use templates, and performance
            optimized for dynamic, enterprise-grade websites.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            By choosing BroadPress, CVDS Nepal benefits from a streamlined content management
            process, faster website updates, and a consistent digital experience. Like many
            forward-thinking organizations, CVDS Nepal leverages BroadPress to connect with its
            audience more efficiently and effectively, on a platform built for scalability and impact.
          </p>
          <button className="outline outline-1 outline-gray-400 text-[#1F2B6C] px-6 py-2 rounded-md text-sm hover:bg-gray-200 transition">
            Browse More
          </button>
        </div>

        {/* Image Placeholder */}
        <div><img src={img2} alt="placeholder2.png" className=" rounded-md"/></div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {partners.map((partner, index) => (
          <div key={index} className="text-center">
            {/* changed h-40 to h-52 */}
            <div><img src={img1} alt="placeholder1.png" className="rounded-md mb-4"/></div>
            <h3 className="text-gray-800 text-sm mb-3">{partner.name}</h3>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="outline outline-1 outline-gray-400 text-[#1F2B6C] px-6 py-1 rounded-md text-sm hover:bg-gray-200 transition inline-block"
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
