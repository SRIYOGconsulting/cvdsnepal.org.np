import React, { useState } from "react";
// Added state to show a submission message like modern forms
const VolunterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); //  Simulate form submission
  };

  const areas = [
    "Community Outreach",
    "Education",
    "Women Empowerment",
    "Environmental Awareness",
    "Social Media / Content Creation",
    "Fundraising",
    "Admin & Operations",
    "Research & Documentation",
  ];

  const computerSkills = [
    "MS Word",
    "Excel",
    "PowerPoint",
    "Canva",
    "Photoshop",
    "Google Docs/Sheets/Drive",
  ];
  const socialMedia = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

  const StandardInput = ({
    label,
    id,
    type = "text",
    className = "",
    required = false,
    ...props
  }) => (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F2B6C] focus:border-[#1F2B6C] transition-colors"
        {...props}
      />
    </div>
  );

  const StandardTextarea = ({
    label,
    id,
    rows = 4,
    className = "",
    required = false,
    ...props
  }) => (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F2B6C] focus:border-[#1F2B6C] resize-vertical min-h-[80px] transition-colors"
        {...props}
      />
    </div>
  );

  const CheckboxOption = ({ children, className = "" }) => (
    <label
      className={`inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm ${className}`}
    >
      <input
        type="checkbox"
        className="w-4 h-4 text-[#1F2B6C] bg-gray-100 border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
      />
      <span className="text-sm font-medium text-gray-700">{children}</span>
    </label>
  );

  const RadioOption = ({ children, name, value }) => (
    <label className="inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <input
        type="radio"
        name={name}
        value={value}
        className="w-4 h-4 text-[#1F2B6C] bg-gray-100 border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
      />
      <span className="text-sm font-medium text-gray-700">{children}</span>
    </label>
  );

  return (
    <div className="bg-white text-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-['Inter']">
      {/*Added centered card with shadow */}
      <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm">
        {/*  Submission success message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 shadow-sm animate-fade-in">
            <p className="text-sm font-medium">
              Thank you! Your application has been submitted successfully. We
              will review it and get back to you soon.
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <header className="text-center mb-8">
            {/* Corrected spelling and modern styling */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F2B6C]">
              VOLUNTER APPLICATION FORM
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Let’s know your area of interest to offer volunteer opportunities.
              We will get back to you with updates upon receiving this form.
            </p>
          </header>

          {/* PERSONAL INFORMATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Added reusable input styling */}
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Full Name"
              required
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Date of Birth (DD/MM/YYYY)"
              type="date"
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Gender"
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Phone Number"
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Email Address"
              type="email"
              required
            />
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              rows="2"
              placeholder="Residential Address"
            ></textarea>
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Emergency Contact Name"
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
              placeholder="Emergency Contact Number"
            />
          </div>

          {/* EDUCATIONAL BACKGROUND */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              EDUCATIONAL BACKGROUND
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Current Qualification"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Institution Name"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Course/Major"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Year/Semester"
              />
              <textarea
                className="border border-gray-300 rounded-md p-2 w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                rows="2"
                placeholder="Previous Qualifications (if any)"
              ></textarea>
            </div>
          </section>

          {/* VOLUNTEER DETAILS */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              VOLUNTEER DETAILS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Preferred Start Date"
                type="date"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Preferred Duration (e.g., 4 weeks, 2 months)"
              />
            </div>

            {/*  Availability */}
            <div className="mb-6">
              <p className="font-medium text-gray-700 mb-2">Availability:</p>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Full-time
                </label>
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Part-time
                </label>
              </div>
            </div>

            {/*  Mode of volunteering */}
            <div className="mb-6">
              <p className="font-medium text-gray-700 mb-2">
                Mode of Volunteering:
              </p>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  On-site
                </label>
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Remote
                </label>
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Hybrid
                </label>
              </div>
            </div>

            {/* Preferred Areas */}
            <div className="mb-6">
              <p className="font-medium mb-2 text-gray-700">
                Preferred Area(s) of Volunteering (tick all that apply):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {areas.map((area, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2"
                placeholder="Other"
              />
            </div>
          </section>

          {/*Motivation & Experience, Technical Skills, References, Declaration */}

          {/* MOTIVATION & EXPERIENCE */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              MOTIVATION & EXPERIENCE
            </h2>
            <StandardTextarea
              label="Why do you want to volunteer with our NGO? (100–200 words)"
              id="motivation"
              rows={4}
              className="mb-6"
            />
            <StandardTextarea
              label="Do you have any relevant skills or past experience?"
              id="skills_experience"
              rows={2}
              className="mb-6"
            />
            <StandardInput
              label="Languages Known"
              id="languages_known"
              className="mb-6"
            />
            <p className="mb-2 text-gray-700">
              Are you comfortable working with vulnerable communities?
            </p>
            <div className="flex gap-6 mb-4">
              <RadioOption name="vulnerable" value="yes">
                Yes
              </RadioOption>
              <RadioOption name="vulnerable" value="no">
                No
              </RadioOption>
            </div>
            <StandardTextarea
              label="If no or unsure, please explain:"
              id="vulnerable_explain"
              rows={2}
            />
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              TECHNICAL SKILLS (Optional)
            </h2>
            <p className="font-medium mb-2 text-gray-700">Computer Skills:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {computerSkills.map((skill, i) => (
                <CheckboxOption key={i}>{skill}</CheckboxOption>
              ))}
            </div>

            <p className="font-medium mb-2 text-gray-700">Social Media:</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialMedia.map((site, i) => (
                <CheckboxOption key={i}>{site}</CheckboxOption>
              ))}
            </div>

            <StandardInput
              label="Other tools or skills"
              id="other_technical_skills"
            />
          </section>

          {/* REFERENCES */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              REFERENCES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="font-medium mb-2 text-[#1F2B6C] text-sm">
                  Reference 1:
                </p>
                <StandardInput label="Name" id="ref1_name" />
                <StandardInput label="Contact Number" id="ref1_phone" />
                <StandardInput label="Relation" id="ref1_relation" />
              </div>
              <div className="space-y-4">
                <p className="font-medium mb-2 text-[#1F2B6C] text-sm">
                  Reference 2 (optional):
                </p>
                <StandardInput label="Name" id="ref2_name" />
                <StandardInput label="Contact Number" id="ref2_phone" />
                <StandardInput label="Relation" id="ref2_relation" />
              </div>
            </div>
          </section>

          {/* DECLARATION */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              DECLARATION
            </h2>
            <p className="mb-4 text-gray-700">
              I hereby declare that all the information provided above is true
              and correct to the best of my knowledge.
            </p>
            <p className="mb-4 text-gray-700">
              I understand that this is a voluntary internship and may not
              include any financial compensation.
            </p>

            <label className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#1F2B6C] bg-gray-100 border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                required
              />
              <span className="text-sm font-medium text-gray-700">I Agree</span>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StandardInput
                label="Upload Signature"
                id="upload_signature"
                type="file"
              />
              <StandardInput label="Date" id="declaration_date" type="date" />
            </div>
          </section>
          {/* Submit Button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#1F2B6C] hover:bg-[#162050] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#1F2B6C]/25 transition-all duration-300 transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VolunterForm;
