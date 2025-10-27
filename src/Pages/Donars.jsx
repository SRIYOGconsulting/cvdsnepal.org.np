import React, { useState } from "react";
import { Search } from "lucide-react";

// Sample donor images 
import maleImage from "../assets/male.png";
import femaleImage from "../assets/female.png";

// Sample top donors data
const topDonors = [
  { name: "Alexis Thomas", total: "Rs250.00", image: maleImage },
  { name: "Mario Garcia", total: "Rs238.00", image: maleImage },
  { name: "Sophia Lawson", total: "Rs510.00", image: femaleImage },
  { name: "Abdur Young", total: "Rs202.00", image: maleImage },
  { name: "Maya Nolan", total: "Rs4,181.57", image: femaleImage },
  { name: "John Doe", total: "Rs300.00", image: maleImage },
  { name: "Jane Smith", total: "Rs150.00", image: femaleImage },
  { name: "Sita Rai", total: "Rs500.00", image: femaleImage },
];

// Full donor list (for table)
const donors = [
  { name: "Alexis Thomas", total: "Rs250.00", last: "Rs250.00", date: "Mar 01, 2025", style: "Occasional" },
  { name: "Mario Garcia", total: "Rs238.00", last: "Rs20.00", date: "Feb 27, 2025", style: "Occasional" },
  { name: "Sophia Lawson", total: "Rs510.00", last: "Rs500.00", date: "Feb 24, 2025", style: "Occasional" },
  { name: "Abdur Young", total: "Rs202.00", last: "Rs100.00", date: "Feb 23, 2025", style: "Occasional" },
  { name: "Maya Nolan", total: "Rs4,181.57", last: "Rs383.00", date: "Feb 23, 2025", style: "Occasional" },
];

const Donars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("2025");
  const [styleFilter, setStyleFilter] = useState("All");

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (styleFilter === "All" || donor.style === styleFilter) &&
      donor.date.includes(yearFilter)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* ===== Top Donors Section ===== */}
      <h2 className="text-3xl font-extrabold text-[#1F2B6C] mb-6">Top Donors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {topDonors.map((donor, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
          >
            <img
              src={donor.image}
              alt={donor.name}
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
            <h3 className="text-lg font-semibold">{donor.name}</h3>
            <p className="text-[#1F2B6C] font-semibold">{donor.total}</p>
          </div>
        ))}
      </div>

      {/* ===== Donor List Section ===== */}
      <div className="w-full bg-white py-12 mt-12">
        <div className="max-w-6xl mx-auto p-8">

          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-extrabold text-[#1F2B6C] tracking-wide">Donor List</h2>
            <div className="flex flex-wrap items-center gap-3">

              <select
                className="border border-gray-300 rounded-lg p-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-[#1F2B6C]"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>

              <select
                className="border border-gray-300 rounded-lg p-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-[#1F2B6C]"
                value={styleFilter}
                onChange={(e) => setStyleFilter(e.target.value)}
              >
                <option>All</option>
                <option>Occasional</option>
                <option>Monthly</option>
              </select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by donor name"
                  className="border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm w-52 md:w-64 focus:outline-none focus:border-[#1F2B6C]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

            </div>
          </div>

          {/* Donor Table */}
          <div className="overflow-x-auto border border-gray-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#1F2B6C] text-white">
                <tr>
                  <th className="p-3 font-semibold">Donor Name</th>
                  <th className="p-3 font-semibold">Member ID</th>
                  <th className="p-3 font-semibold text-right">Total Donations</th>
                  <th className="p-3 font-semibold text-right">Last Donation</th>
                  <th className="p-3 font-semibold text-center">Donated On</th>
                  <th className="p-3 font-semibold text-center">Giving Style</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.map((donor, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-[#E8ECF5]/50 transition-colors`}
                  >
                    <td className="p-3 font-medium text-gray-800">{donor.name}</td>
                    <td className="p-3 text-[#1F2B6C] font-semibold">Assign ID</td>
                    <td className="p-3 text-gray-700 text-right">{donor.total}</td>
                    <td className="p-3 text-gray-700 text-right">{donor.last}</td>
                    <td className="p-3 text-gray-700 text-center">{donor.date}</td>
                    <td className="p-3 text-gray-700 text-center">{donor.style}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Donors */}
          <div className="mt-6 text-right">
            <span className="bg-[#E8ECF5] text-[#1F2B6C] px-4 py-1.5 rounded-full text-sm font-semibold">
              Total donors: {filteredDonors.length}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donars;
