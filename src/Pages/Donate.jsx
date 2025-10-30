import { useState } from "react";
import { Heart, Search } from "lucide-react";
import img from "../assets/placeholder2.png";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(25000);
  const [frequency, setFrequency] = useState("once");

  const amounts = [200000, 120000, 50000, 25000, 12000, 6000];

//  Donors Data
  const donors = [
    {
      name: "Alexis Thomas",
      phone: "9801234567",
      address: "Kamalpokhari",
      city: "Kathmandu",
      amount: 5000,
      date: "Mar 01, 2025",
    },
    {
      name: "Sophia Lawson",
      phone: "9812345678",
      address: "Baneshwor",
      city: "Kathmandu",
      amount: 1000,
      date: "Feb 27, 2025",
    },
    {
      name: "Abdur Young",
      phone: "9823456789",
      address: "Pokhara",
      city: "Kaski",
      amount: 500,
      date: "Feb 25, 2025",
    },
  ];

  // Calculate Totals
  const totalDonors = donors.length;
  const totalDonation = donors.reduce((sum, donor) => sum + donor.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/*LEFT SIDE - DONATE FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border flex flex-col justify-between">
          <div>
            {/* Frequency Toggle */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 mb-6 gap-2">
              <button
                className={`flex-1 py-2 rounded-lg border ${
                  frequency === "once"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setFrequency("once")}
              >
                One-time
              </button>
              <button
                className={`flex-1 py-2 rounded-lg border flex items-center justify-center space-x-1 ${
                  frequency === "monthly"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setFrequency("monthly")}
              >
                <Heart size={16} />
                <span>Monthly</span>
              </button>
            </div>

            {/* Suggested Amounts */}
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              Your generous donation
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`border rounded-lg py-2 text-sm sm:text-base ${
                    selectedAmount === amt
                      ? "bg-indigo-100 border-indigo-600 text-indigo-600 font-semibold"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Rs {amt.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="flex items-center border rounded-lg mb-4 overflow-hidden">
              <span className="px-2 text-gray-500 text-sm sm:text-base">Rs</span>
              <input
                type="number"
                className="flex-1 p-2 outline-none text-sm sm:text-base"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
              <select className="p-2 border-l bg-gray-50">
                <option>NPR</option>
                <option>USD</option>
              </select>
            </div>

            {/* Dedicate Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">
                Dedicate this donation
              </label>
            </div>
          </div>

          {/* Donate Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold mt-4 text-sm sm:text-base">
            Donate {frequency === "monthly" ? "Monthly" : "Now"}
          </button>
        </div>

        {/*RIGHT SIDE - IMAGE & INFO*/}
        <div className="flex flex-col">
          <img
            src={img}
            alt="Donate visual"
            className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-xl shadow mb-6"
          />

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
            Support CVDS-Nepal and Empower Lives
          </h2>

          <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
            Conflict Victim and Disabled Society-Nepal (CVDS-Nepal) is a
            nonprofit social organization established in 2005 with a mission to
            enhance opportunities and uplift the livelihood of conflict victims
            and children with disabilities (CWDs) in Nepal. With the realization
            that love, harmony, and peace are essential for enhancing the life
            of our target groups, CVDS aims to gradually eradicate societal
            prejudice and unfavorable opinions about them.
          </p>

          <p className="text-gray-600 text-sm text-justify mt-4 leading-relaxed">
            CVDS is planning to run a vocational school project to support
            thousands of persons with disabilities and other marginalized
            groups. The organization focuses on promoting the livelihood of
            1,000 persons with disabilities and marginalized people over the
            next 10 years, creating sustainable opportunities and a better
            future.
          </p>
        </div>

        {/* DONORS LIST SECTION */}
        <div className="w-full col-span-full bg-white py-10 mt-12 rounded-lg shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2B6C] tracking-wide text-center md:text-left">
                Donor List
              </h2>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto">
                <select className="border border-gray-300 rounded-lg p-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-[#1F2B6C] w-full sm:w-auto">
                  <option>This Year: 2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>

                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by donor name"
                    className="border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm w-full focus:outline-none focus:border-[#1F2B6C]"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto border border-gray-100 rounded-lg">
              <table className="w-full text-xs sm:text-sm text-left min-w-[600px]">
                <thead className="bg-[#1F2B6C] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Full Name</th>
                    <th className="p-3 font-semibold">Phone Number</th>
                    <th className="p-3 font-semibold">Address</th>
                    <th className="p-3 font-semibold">City</th>
                    <th className="p-3 font-semibold text-right">
                      Donation Amount
                    </th>
                    <th className="p-3 font-semibold text-center">
                      Donation Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {donors.map((donor, i) => (
                    <tr
                      key={i}
                      className={`border-t border-gray-100 ${
                        i % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-[#E8ECF5]/50 transition-colors`}
                    >
                      <td className="p-3 font-medium text-gray-800">
                        {donor.name}
                      </td>
                      <td className="p-3 text-gray-700">{donor.phone}</td>
                      <td className="p-3 text-gray-700">{donor.address}</td>
                      <td className="p-3 text-gray-700">{donor.city}</td>
                      <td className="p-3 text-right text-gray-700">
                        NPR {donor.amount.toLocaleString()}
                      </td>
                      <td className="p-3 text-center text-gray-700">
                        {donor.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="grid gap-4 md:hidden">
              {donors.map((donor, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4"
                >
                  <h3 className="text-lg font-semibold text-[#1F2B6C] mb-2">
                    {donor.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Phone:</span> {donor.phone}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Address:</span>{" "}
                    {donor.address}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">City:</span> {donor.city}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Amount:</span> NPR{" "}
                    {donor.amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Date:</span> {donor.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals Summary */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 text-sm font-semibold">
              <span className="bg-[#E8ECF5] text-[#1F2B6C] px-4 py-1.5 rounded-full">
                Total donors: {totalDonors}
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full">
                Total donation: NPR {totalDonation.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
