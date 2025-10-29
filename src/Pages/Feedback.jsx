import React, { useState } from "react";

const Feedback = () => {
  const [formdata, setFormData] = useState({
    name: "",
    organization: "",
    position: "",
    email: "",
    phone: "",
    rating: "",
    experience: "",
    satisfaction: "",
    recommend: "",
    suggestions: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      organization: "",
      position: "",
      email: "",
      phone: "",
      rating: "",
      experience: "",
      satisfaction: "",
      recommend: "",
      suggestions: "",
    })

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(()=> setSubmitted(false), 5000)
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-['Inter']">
      <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm">
        {/* Submission success message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 shadow-sm text-center animate-fade-in">
            <p className="text-sm font-medium">
              Thank you! Your feedback has been submitted successfully.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F2B6C]">
              CVDS Nepal Feedback Form
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your feedback helps us improve our services and strengthen our
              impact. Please take a moment to share your experience.
            </p>
          </header>

          {/* Personal Information Section */}
          <section className="p-6 rounded-lg shadow-sm border border-gray-100">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formdata.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Organization *
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formdata.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                />
              </div>

              {/* Position */}
              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Position *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formdata.position}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formdata.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Experience & Feedback Section */}
          <section className="p-6 rounded-lg shadow-sm border border-gray-100">

            {/* Rating & Satisfaction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Rate your overall experience *
                </label>
                <select
                  name="rating"
                  value={formdata.rating}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="5">Excellent</option>
                  <option value="4">Very Good</option>
                  <option value="3">Good</option>
                  <option value="2">Fair</option>
                  <option value="1">Poor</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-2 text-gray-700">
                  Level of satisfaction *
                </label>
                <select
                  name="satisfaction"
                  value={formdata.satisfaction}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
                >
                  <option value="">--Select--</option>
                  <option value="Highly Satisfied">Highly Satisfied</option>
                  <option value="Satisfied">Satisfied</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Dissatisfied">Dissatisfied</option>
                </select>
              </div>
            </div>

            {/* Experience Textarea */}
            <div className="mb-6">
              <label className="font-medium block mb-2 text-gray-700">
                Describe your experience with CVDS Nepal *
              </label>
              <textarea
                name="experience"
                value={formdata.experience}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Write your feedback here..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
              ></textarea>
            </div>

            {/* Recommend */}
            <div className="mb-6">
              <label className="font-medium block mb-2 text-gray-700">
                Would you recommend CVDS Nepal to others? *
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="recommend"
                    value="Yes"
                    checked={formdata.recommend === "Yes"}
                    onChange={handleChange}
                    required
                    className="text-[#1F2B6C] focus:ring-[#1F2B6C]"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="recommend"
                    value="No"
                    checked={formdata.recommend === "No"}
                    onChange={handleChange}
                    required
                    className="text-[#1F2B6C] focus:ring-[#1F2B6C]"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <label className="font-medium block mb-2 text-gray-700">
                Any suggestions for improvement?
              </label>
              <textarea
                name="suggestions"
                value={formdata.suggestions}
                onChange={handleChange}
                rows="3"
                placeholder="Your suggestions..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F2B6C] focus:outline-none"
              ></textarea>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#1F2B6C] hover:bg-[#162050] text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
