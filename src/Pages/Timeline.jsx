import React from "react";
import { Building } from "lucide-react";

const timelineData = [
  {
    year: "2005", // updated content
    title: "Establishment of CVDS Nepal", // updated content
    description:
      "Conflict Victim and Disable Society-Nepal (CVDS-Nepal) was founded with the mission to uplift the lives of conflict victims and children with disabilities across Nepal.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2007", // updated content
    title: "First Rehabilitation Initiative", // updated content
    description:
      "Began providing food, shelter, and medical care to children with physical and mental disabilities through early rehabilitation efforts in Kathmandu.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2010", // updated content
    title: "Cerebral Palsy Support Center", // updated content
    description:
      "Established the ‘Rehabilitation Center for Children with Disability due to Cerebral Palsy (CP)’ project, offering physiotherapy and educational support.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2013", // updated content
    title: "Partnership with Social Welfare Council", // updated content
    description:
      "Officially registered and affiliated with the Social Welfare Council of Nepal, strengthening its organizational framework and transparency.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2016", // updated content
    title: "Community Outreach & Awareness", // updated content
    description:
      "Expanded programs to rural municipalities, promoting awareness, education, and inclusion of persons with disabilities.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2019", // updated content
    title: "Educational & Therapeutic Expansion", // updated content
    description:
      "Introduced special education classes, physiotherapy sessions, and skills-based workshops to foster independence among children.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2022", // updated content
    title: "Digital Empowerment & Advocacy", // updated content
    description:
      "Initiated campaigns to raise awareness through online platforms, empowering individuals with disabilities through technology.", // updated content
    image: "/assets/images/projects/placeholder2.png",
  },
  {
    year: "2024", // updated content
    title: "Vocational and Livelihood Initiatives", // updated content
    description:
      "Launched a long-term project to establish a vocational school aimed at supporting 1,000 persons with disabilities and marginalized individuals within 10 years.", // updated content
    image: "/assets/images/projects/placeholder2.png",
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
                  isLeft
                    ? "md:pr-16 md:text-center" // changed: center instead of text-right for left side
                    : "md:pl-16 md:text-center" // changed: both sides now center-aligned for symmetry
                }`}
              >
                <p className="text-gray-600 text-lg font-medium mb-4">
                  {item.year}
                </p>

                <div className="p-1 relative max-w-md mx-auto">
                  {" "}
                  {/* changed: centered container for equal width */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-[17px]">
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
                  <div className="p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
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
