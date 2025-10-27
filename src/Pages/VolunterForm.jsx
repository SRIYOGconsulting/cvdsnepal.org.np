import React from "react";

const VolunteerForm = () => {
  return (
    <div className="bg-white text-black min-h-screen py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-10 border-b-2 border-black pb-3">
          VOLUNTER APPLICATION FORM
        </h1>

        {/* PERSONAL INFORMATION */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            PERSONAL INFORMATION
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input className="border border-black p-2" placeholder="Full Name" />
            <input className="border border-black p-2" placeholder="Date of Birth (DD/MM/YYYY)" />
            <input className="border border-black p-2" placeholder="Gender" />
            <input className="border border-black p-2" placeholder="Phone Number" />
            <input className="border border-black p-2" placeholder="Email Address" />
            <textarea
              className="border border-black p-2 md:col-span-2"
              rows="2"
              placeholder="Residential Address"
            ></textarea>
            <input className="border border-black p-2" placeholder="Emergency Contact Name" />
            <input className="border border-black p-2" placeholder="Emergency Contact Number" />
          </div>
        </section>

        {/* EDUCATIONAL BACKGROUND */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            EDUCATIONAL BACKGROUND
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input className="border border-black p-2" placeholder="Current Qualification" />
            <input className="border border-black p-2" placeholder="Institution Name" />
            <input className="border border-black p-2" placeholder="Course/Major" />
            <input className="border border-black p-2" placeholder="Year/Semester" />
            <textarea
              className="border border-black p-2 md:col-span-2"
              rows="2"
              placeholder="Previous Qualifications (if any)"
            ></textarea>
          </div>
        </section>

        {/* VOLUNTEER DETAILS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            VOLUNTEER DETAILS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input className="border border-black p-2" placeholder="Preferred Start Date" />
            <input
              className="border border-black p-2"
              placeholder="Preferred Duration (e.g., 4 weeks, 2 months)"
            />
          </div>

          <div className="mt-6">
            <p className="font-medium">Availability:</p>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#1F2B6C]" /> Full-time
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#1F2B6C]" /> Part-time
              </label>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-medium">Mode of Volunteering:</p>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#1F2B6C]" /> On-site
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#1F2B6C]" /> Remote
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#1F2B6C]" /> Hybrid
              </label>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-medium mb-2">
              Preferred Area(s) of Volunteering (tick all that apply):
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Community Outreach",
                "Education",
                "Women Empowerment",
                "Environmental Awareness",
                "Social Media / Content Creation",
                "Fundraising",
                "Admin & Operations",
                "Research & Documentation",
              ].map((area, i) => (
                <label key={i} className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-[#1F2B6C]" /> {area}
                </label>
              ))}
              <input
                className="border border-black p-2 md:col-span-2"
                placeholder="Other: __________________________________________"
              />
            </div>
          </div>
        </section>

        {/* MOTIVATION & EXPERIENCE */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            MOTIVATION & EXPERIENCE
          </h2>
          <p className="mb-2">Why do you want to volunteer with our NGO? (100–200 words)</p>
          <textarea className="border border-black p-2 w-full mb-4" rows="4"></textarea>

          <p className="mb-2">Do you have any relevant skills or past experience?</p>
          <textarea className="border border-black p-2 w-full mb-4" rows="2"></textarea>

          <input className="border border-black p-2 w-full mb-4" placeholder="Languages Known" />

          <p className="mb-2">
            Are you comfortable working with vulnerable communities?
          </p>
          <div className="flex gap-6 mb-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="vulnerable" className="accent-[#1F2B6C]" /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="vulnerable" className="accent-[#1F2B6C]" /> No
            </label>
          </div>
          <textarea
            className="border border-black p-2 w-full"
            rows="2"
            placeholder="If no or unsure, please explain:"
          ></textarea>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            TECHNICAL SKILLS (Optional)
          </h2>
          <p className="font-medium mb-2">Computer Skills:</p>
          <div className="grid md:grid-cols-3 gap-2 mb-4">
            {["MS Word", "Excel", "PowerPoint", "Canva", "Photoshop", "Google Docs/Sheets/Drive"].map(
              (skill, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#1F2B6C]" /> {skill}
                </label>
              )
            )}
          </div>

          <p className="font-medium mb-2">Social Media:</p>
          <div className="flex flex-wrap gap-6 mb-4">
            {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((site, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#1F2B6C]" /> {site}
              </label>
            ))}
          </div>

          <input className="border border-black p-2 w-full" placeholder="Other tools or skills" />
        </section>

        {/* REFERENCES */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            REFERENCES
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium mb-2">Reference 1:</p>
              <input className="border border-black p-2 w-full mb-2" placeholder="Name" />
              <input className="border border-black p-2 w-full mb-2" placeholder="Contact Number" />
              <input className="border border-black p-2 w-full" placeholder="Relation" />
            </div>
            <div>
              <p className="font-medium mb-2">Reference 2 (optional):</p>
              <input className="border border-black p-2 w-full mb-2" placeholder="Name" />
              <input className="border border-black p-2 w-full mb-2" placeholder="Contact Number" />
              <input className="border border-black p-2 w-full" placeholder="Relation" />
            </div>
          </div>
        </section>

        {/* DECLARATION */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-black pb-1">
            DECLARATION
          </h2>
          <p className="mb-4">
            I hereby declare that all the information provided above is true and correct to the best of my knowledge.
          </p>
          <p className="mb-4">
            I understand that this is a voluntary internship and may not include any financial compensation.
          </p>

          <label className="flex items-center gap-2 mb-6">
            <input type="checkbox" className="accent-[#1F2B6C]" /> I Agree
          </label>

          <div className="grid md:grid-cols-2 gap-6">
            <input className="border border-black p-2" placeholder="Upload Signature" />
            <input className="border border-black p-2" placeholder="Date" />
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center mt-10">
          <button className="bg-[#1F2B6C] text-white px-6 py-2 font-medium hover:bg-[#162050] transition">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
