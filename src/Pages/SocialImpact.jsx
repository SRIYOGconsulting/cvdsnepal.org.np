import React, { useState } from "react";
import { Search, Users, Calendar, MapPin } from "lucide-react";



const socials = [
  {
    id: 1,
    title: "Entrepreneurship Training for Marginalized Groups",
    image: "/assets/images/projects/placeholder2.png",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    members: ["John Doe", "Jane Smith", "Sita Rai"],
    description:
      "Supporting entrepreneurship training for socially marginalized.",
    country: "Nepal",
 
  },
  {
    id: 2,
    title: "Local Development Collaboration",
    image: "/assets/images/projects/placeholder2.png",
    startDate: "Feb 2023",
    endDate: "Nov 2023",
    members: ["Ram Thapa", "Sita Lama"],
    description: "Collaborating with local development programs.",
    country: "Nepal",
    
  },
  {
    id: 3,
    title: "Private Donor Support for Entrepreneurship",
    image:"/assets/images/projects/placeholder2.png",
    startDate: "Mar 2023",
    endDate: "Oct 2023",
    members: ["Anil Gurung", "Maya KC"],
    description:
      "Private donors supporting community entrepreneurship initiatives.",
    country: "Nepal",
  
  },
  {
    id: 4,
    title: "Access to Quality Educationt",
    image:"/assets/images/projects/placeholder2.png",
    startDate: "Jan 2024",
    endDate: "Ongoing",
    members: ["Rita Sharma", "Bishal Khadka"],
    description: "Ensuring access to quality education for marginalized children.",
    country: "Nepal",
   
  },
  {
    id: 5,
    title: "Vocational Training & Microfinance for Women",
    image:"/assets/images/projects/placeholder2.png",
    startDate: "Mar 2024",
    endDate: "Ongoing",
    members: ["Nirmala Gurung", "Puja BK"],
    description:
      "Providing vocational training and microfinance support to women.",
    country: "Nepal",
  
  },
  {
    id: 6,
    title: "Renewable Energy Promotion",
    image: "/assets/images/projects/placeholder2.png",
    startDate: "May 2024",
    endDate: "Ongoing",
    members: ["Bikram Rana", "Sita Rai"],
    description: "Promoting renewable energy solutions in rural areas.",
    country: "Nepal",
    
  },
  {
    id: 7,
    title: "Healthcare Access in Remote Areas",
    image: "/assets/images/projects/placeholder2.png",
    startDate: "Apr 2024",
    endDate: "Ongoing",
    members: ["Anita KC", "Ramesh Shrestha"],
    description: "Improving access to healthcare in remote communities.",
    country: "Nepal",
    
  },
  {
    id: 8,
    title: "Youth Entrepreneurship Support",
    image: "/assets/images/projects/placeholder2.png",
    startDate: "Jun 2024",
    endDate: "Ongoing",
    members: ["Ram Shrestha", "Sita KC"],
    description: "Supporting young entrepreneurs with training and funding.",
    country: "Nepal",
    
  },
  {
    id: 9,
    title: "Organic & Sustainable Farming",
    image: "/assets/images/projects/placeholder2.png",
    startDate: "Jul 2024",
    endDate: "Ongoing",
    members: ["Bishal Rana", "Pooja Sharma"],
    description: "Promoting organic and sustainable farming practices.",
    country: "Nepal",
 
  },
];

const SocialImpact = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImpacts = socials.filter((social) =>
    social.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
        Social Impacts
      </h1>
      <p className="mb-10 text-center text-gray-600 max-w-2xl mx-auto">
        CVDS-Nepal prioritizes socially marginalized, backward caste, women, and extremely poor conflict victim & PWD groups for its entrepreneurship training programs.
      </p>

      {/* Search */}
      <div className="mb-10 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F2B6C] bg-white text-gray-800 shadow-md"
          />
        </div>
      </div>

      {/* Project Cards 3x3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImpacts.map((social) => (
          <div
            key={social.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
          >
            <div className="relative">
              <img
                src={social.image}
                alt={social.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {social.title}
              </h4>
              <p className="text-gray-600 mb-4 line-clamp-3">{social.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{social.members.length} Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{social.country}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>
                  {social.startDate} - {social.endDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialImpact;
