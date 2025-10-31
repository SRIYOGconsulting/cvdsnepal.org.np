import React from "react";
import { Building } from "lucide-react";


// Added new placeholder image
import  img from "../assets/placeholder2.png";

const timelineData = [
  {
    year: "1993",
    title: "Started in a Small Office, Kathmandu",
    description:
      "Conflict Victims Disabled Society (CVDS Nepal) began its journey to support individuals affected by conflict, focusing on inclusion and empowerment.",
    image: img,
  },
  {
    year: "2005",
    title: "Expanding Community Rehabilitation",
    description:
      "Initiated rehabilitation programs in rural areas to improve access to healthcare and education for persons with disabilities.",
    image: img,
  },
  {
    year: "2012",
    title: "Recognized as a Leading NGO",
    description:
      "CVDS Nepal was recognized nationally for its impactful work and collaboration with multiple social welfare organizations.",
    image: img,
  },
  {
    year: "2020",
    title: "Digital Empowerment Programs",
    description:
      "Launched skill-based training and awareness campaigns across Nepal to strengthen sustainable livelihoods for conflict victims.",
    image: img,
  },
];

const Timeline = () => {
  return (
    <div className="bg-white text-gray-900 py-20 px-6 md:px-16 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest text-gray-800 relative inline-block">
          OUR JOURNEY
          <span className="block w-20 h-[2px] bg-[#1F2B6C] mx-auto mt-3" />
        </h2>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
          <div className="w-px h-full bg-[#1F2B6C] opacity-90" />
        </div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative mb-24 flex flex-col md:flex-row ${
                isLeft ? "" : "md:flex-row-reverse"
              } items-center md:items-start`}
            >
              {/* Center icon circle */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#1F2B6C] text-white rounded-full p-4 shadow-md">
                  <Building size={20} />
                </div>
              </div>

              {/* Year + Text */}
              <div
                className={`md:w-1/2 w-full px-4 ${
                  isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                }`}
              >
                <p className="text-gray-600 text-lg font-medium mb-4">
                  {item.year}
                </p>
                <div className="p-1 relative">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Image section */}
              <div
                className={`md:w-1/2 w-full mt-10 md:mt-0 px-4 ${
                  isLeft ? "md:pl-16" : "md:pr-16"
                }`}
              >
                <div className="relative bg-[#f5f5f5] rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 before:content-[''] before:absolute before:-left-4 before:top-6 before:w-0 before:h-0 before:border-t-[10px] before:border-t-transparent before:border-b-[10px] before:border-b-transparent before:border-r-[16px] before:border-r-[#f5f5f5]">
                  {/* image */}
                  <div className="p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* caption */}
                  <div className="px-6 pb-6 text-center">
                    <p className="text-gray-800 text-lg font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
