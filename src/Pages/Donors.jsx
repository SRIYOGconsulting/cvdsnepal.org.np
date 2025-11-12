import React, { useState } from "react";
import { Search } from "lucide-react";







// Sample top donors data
const topDonors = [
  
  { name: "Alexis Thomas", total: "Rs52,000", image: "/assets/images/projects/male.png" },
  { name: "Mario Garcia", total: "Rs25,000", image: "/assets/images/projects/male.png" },
  { name: "Sophia Lawson", total: "Rs551,000", image: "/assets/images/projects/female.png" },
  { name: "Abdur Young", total: "Rs20,000", image: "/assets/images/projects/male.png" },
  { name: "Maya Nolan", total: "Rs41,000", image: "/assets/images/projects/female.png" },
  { name: "John Doe", total: "Rs30,000", image: "/assets/images/projects/male.png" },
  { name: "Jane Smith", total: "Rs15,000", image: "/assets/images/projects/female.png" },
  { name: "Sita Rai", total: "Rs50,900", image: "/assets/images/projects/female.png" },
];

// Full donor list (for table)
const donors = [
  {
    name: "Alexis Thomas",
    city: "Kathmandu",
    style: "Occasional",
    donationType: "One-Time",
    date: "Mar 01, 2025",
    amount: "Rs 25,000",
  },
  {
    name: "Mario Garcia",
    city: "Lalitpur",
    style: "Monthly",
    donationType: "Subscription",
    date: "Feb 27, 2025",
    amount: "Rs 20,000",
  },
  {
    name: "Sophia Lawson",
    city: "Bhaktapur",
    style: "Occasional",
    donationType: "Event Support",
    date: "Feb 24, 2025",
    amount: "Rs 51,000",
  },
  {
    name: "Abdur Young",
    city: "Pokhara",
    style: "Occasional",
    donationType: "Charity",
    date: "Feb 23, 2025",
    amount: "Rs 20,200",
  },
  {
    name: "Maya Nolan",
    city: "Biratnagar",
    style: "Monthly",
    donationType: "Sponsorship",
    date: "Feb 23, 2025",
    amount: "Rs 41,000",
  },
];

const Donars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("2025");
  const [styleFilter, setStyleFilter] = useState("All");
  // fixed filtering logic
  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (styleFilter === "All" || donor.style === styleFilter) &&
      donor.date.includes(yearFilter)
  );


  // NEW: Calculate total amount from filtered donors
  const totalAmount = filteredDonors.reduce((sum, donor) => {
    const numeric = parseFloat(donor.amount.replace(/[^\d.-]/g, ""));
    return sum + numeric;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* ===== Top Donors Section ===== */}
      <h2
        className="text-3xl font-extrabold text-[#1F2B6C] mb-6 text-center
      "
      >
        Top Donors
      </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-12 px-4">
  {topDonors.map((donor, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center min-h-[250px] sm:min-h-[280px] transition-transform hover:scale-105"
      style={{
        backgroundColor: "oklch(0.95 0 0)",
      }}
    >
      <img
        src={donor.image}
        alt={donor.name}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mb-3 object-cover"
      />
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">{donor.name}</h2>
      <p className="text-sm sm:text-base md:text-lg text-black font-semibold">{donor.total}</p>
    </div>
        ))}
      </div>

      {/* ===== Donor List Section ===== */}
      <div className="w-full bg-white py-12 mt-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto p-8">
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-extrabold text-[#1F2B6C] tracking-wide">
               Top Donors List
            </h2>
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

          {/* ===== Desktop Table View ===== */}
          {/* Added "hidden md:block" to show only on desktop */}
          <div className="hidden md:block overflow-x-auto border border-gray-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#1F2B6C] text-white">
                <tr>
                  <th className="p-3 font-semibold">Donor Name</th>
                  <th className="p-3 font-semibold">City</th>
                  <th className="p-3 font-semibold text-center">
                    Donation Type
                  </th>
                  <th className="p-3 font-semibold text-right">
                    Date of Donation
                  </th>
                  <th className="p-3 font-semibold text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.map((donor, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-[#E8ECF5]/50 transition-colors`}
                  >
                    <td className="p-3 font-medium text-gray-800">
                      {donor.name}
                    </td>
                    <td className="p-3 text-gray-700">{donor.city}</td>
                    <td className="p-3 text-gray-700 text-center">
                      {donor.donationType}
                    </td>
                    <td className="p-3 text-gray-700 text-right">
                      {donor.date}
                    </td>
                    <td className="p-3 text-gray-800 font-semibold text-center">
                      {donor.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== Mobile Card View ===== */}
          {/*  Added "md:hidden" so it appears only on mobile */}
          <div className="grid gap-4 md:hidden">
            {filteredDonors.map((donor, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4"
              >
                <h3 className="text-lg font-semibold text-[#1F2B6C] mb-2">
                  {donor.name}
                </h3>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">City:</span> {donor.city}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Donation Type:</span>{" "}
                  {donor.donationType}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Date:</span> {donor.date}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Amount:</span> {donor.amount}
                </p>
              </div>
            ))}
          </div>

         
          {/*  CHANGED: Display total amount instead of total donors */}
          <div className="mt-6 text-right">
            <span className="bg-[#E8ECF5] text-[#1F2B6C] px-4 py-1.5 rounded-full text-sm font-semibold">
              Total amount: Rs {totalAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donars;
