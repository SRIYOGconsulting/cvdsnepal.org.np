import React, { useState } from "react";
import { Search, Users, Calendar, MapPin } from "lucide-react";
import img from "../assets/placeholder2.png";

const casestudies = [
  {
    id: 1,
    title: "Child Rights",
    image: img,
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    members: ["John Doe", "Jane Smith", "Sita Rai"],
    description:
      "Supporting entrepreneurship training for socially marginalized.",
    country: "Nepal",
    theme: "Child Rights",
  },
  {
    id: 2,
    title: "Governance",
    image: img,
    startDate: "Feb 2023",
    endDate: "Nov 2023",
    members: ["Ram Thapa", "Sita Lama"],
    description: "Collaborating with local development programs.",
    country: "Nepal",
    theme: "Governance",
  },
  {
    id: 3,
    title: "Enterpreneurship",
    image: img,
    startDate: "Mar 2023",
    endDate: "Oct 2023",
    members: ["Anil Gurung", "Maya KC"],
    description:
      "Private donors supporting community entrepreneurship initiatives.",
    country: "Nepal",
    theme: "Entrepreneurship",
  },
  {
    id: 4,
    title: "Education",
    image: img,
    startDate: "Jan 2024",
    endDate: "Ongoing",
    members: ["Rita Sharma", "Bishal Khadka"],
    description: "Ensuring access to quality education for marginalized children.",
    country: "Nepal",
    theme: "Education",
  },
  {
    id: 5,
    title: "Gender Equality",
    image: img,
    startDate: "Mar 2024",
    endDate: "Ongoing",
    members: ["Nirmala Gurung", "Puja BK"],
    description:
      "Providing vocational training and microfinance support to women.",
    country: "Nepal",
    theme: "Gender Equality",
  },
  {
    id: 6,
    title: "Environment",
    image: img,
    startDate: "May 2024",
    endDate: "Ongoing",
    members: ["Bikram Rana", "Sita Rai"],
    description: "Promoting renewable energy solutions in rural areas.",
    country: "Nepal",
    theme: "Environment",
  },
  {
    id: 7,
    title: "Health",
    image: img,
    startDate: "Apr 2024",
    endDate: "Ongoing",
    members: ["Anita KC", "Ramesh Shrestha"],
    description: "Improving access to healthcare in remote communities.",
    country: "Nepal",
    theme: "Health",
  },
  {
    id: 8,
    title: "Enterpreneurship",
    image: img,
    startDate: "Jun 2024",
    endDate: "Ongoing",
    members: ["Ram Shrestha", "Sita KC"],
    description: "Supporting young entrepreneurs with training and funding.",
    country: "Nepal",
    theme: "Entrepreneurship",
  },
  {
    id: 9,
    title: "Agriculture",
    image: img,
    startDate: "Jul 2024",
    endDate: "Ongoing",
    members: ["Bishal Rana", "Pooja Sharma"],
    description: "Promoting organic and sustainable farming practices.",
    country: "Nepal",
    theme: "Agriculture",
  },
];

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = casestudies.filter((cases) =>
    cases.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
        Case Studies
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
        {filteredCaseStudies.map((cases) => (
          <div
            key={cases.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
          >
            <div className="relative">
              <img
                src={cases.image}
                alt={cases.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Theme badge - same color for all */}
              <span
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold bg-[#1F2B6C]"
              >
                {cases.theme}
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {cases.title}
              </h4>
              <p className="text-gray-600 mb-4 line-clamp-3">{cases.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{cases.members.length} Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{cases.country}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>
                  {cases.startDate} - {cases.endDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
