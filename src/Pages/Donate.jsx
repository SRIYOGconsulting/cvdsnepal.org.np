import { useState, useEffect } from "react";
import { Heart,Search } from "lucide-react";
import img1 from "../assets/images.jpg";


export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(25000);
  const [frequency, setFrequency] = useState("once");

  const amounts = [200000, 120000, 50000, 25000, 12000, 6000];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
    
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ===== LEFT SIDE - DONATE FORM ===== */}
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
            <p className="text-gray-600 mb-3 text-sm sm:text-base">Your generous donation</p>
            <div className="grid grid--2 sm:grid-cols-3 gap-2 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`border rounded-lg py-2 text-sm sm:text-base  ${
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

        {/* ===== RIGHT SIDE - IMAGE (Equal size) ===== */}
        <div className="flex flex-col">
          <img
            src={img1}
            alt="Donate visual"
            className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-xl shadow mb-6"
          />

          {/* Subheading */}
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








      </div>

      


      
    </div>
  );
}



