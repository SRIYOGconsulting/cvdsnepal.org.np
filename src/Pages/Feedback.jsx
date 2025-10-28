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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md mb-10">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-[#1F2B6C]">
          CVDS Nepal Feedback Form
        </h2>

        {/*Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="font-medium block mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="font-medium block mb-1">Organization *</label>
            <input
              type="text"
              name="organization"
              value={formdata.organization}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Position */}
          <div>
            <label className="font-medium block mb-1">Position *</label>
            <input
              type="text"
              name="position"
              value={formdata.position}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium block mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-medium block mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="font-medium block mb-1">
              Rate your overall experience *
            </label>
            <select
              name="rating"
              value={formdata.rating}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">--Select--</option>
              <option value="5">Excellent</option>
              <option value="4">Very Good</option>
              <option value="3">Good</option>
              <option value="2">Fair</option>
              <option value="1">Poor</option>
            </select>
          </div>

          {/* Satisfaction Level */}
          <div>
            <label className="font-medium block mb-1">
              Level of satisfaction *
            </label>
            <select
              name="satisfaction"
              value={formdata.satisfaction}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">--Select--</option>
              <option value="Highly Satisfied">Highly Satisfied</option>
              <option value="Satisfied">Satisfied</option>
              <option value="Neutral">Neutral</option>
              <option value="Dissatisfied">Dissatisfied</option>
            </select>
          </div>
        </div>

        {/*Full Width Fields */}
        {/* Experience */}
        <div>
          <label className="font-medium block mb-1">
            Describe your experience with CVDS Nepal *
          </label>
          <textarea
            name="experience"
            value={formdata.experience}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Write your feedback here..."
            className="w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        {/* Recommend */}
        <div>
          <label className="font-medium block mb-1">
            Would you recommend CVDS Nepal to others? *
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="recommend"
                value="Yes"
                checked={formdata.recommend === "Yes"}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="recommend"
                value="No"
                checked={formdata.recommend === "No"}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <label className="font-medium block mb-1">
            Any suggestions for improvement?
          </label>
          <textarea
            name="suggestions"
            value={formdata.suggestions}
            onChange={handleChange}
            rows="3"
            placeholder="Your suggestions..."
            className="w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#1F2B6C] hover:bg-[#159EEC] text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
