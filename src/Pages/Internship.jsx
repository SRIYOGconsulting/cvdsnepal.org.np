import React from "react";

const VolunteerForm = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">
        NGO VOLUNTEER APPLICATION FORM
      </h2>

      {/* 2-column layout */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Sections 1, 3, 5 */}
        <div className="space-y-10">
          {/* 1. PERSONAL INFORMATION */}
          <section>
            <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
              1. PERSONAL INFORMATION
            </h3>
            <div className="space-y-3">
              <label className="block">
                Full Name:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Date of Birth (DD/MM/YYYY):
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Gender:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Phone Number:
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Email Address:
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Residential Address:
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  rows="2"
                />
              </label>

              <label className="block">
                Emergency Contact Name:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Emergency Contact Number:
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
            </div>
          </section>

          {/* 3. VOLUNTEER DETAILS */}
          <section>
            <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
              3. VOLUNTEER DETAILS
            </h3>
            <div className="space-y-3">
              <label className="block">
                Preferred Start Date:
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Preferred Duration (e.g., 4 weeks, 2 months):
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <fieldset>
                <legend className="font-medium mb-1">Availability:</legend>
                <label className="mr-4 inline-flex items-center">
                  <input type="checkbox" className="mr-1" /> Full-time
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-1" /> Part-time
                </label>
              </fieldset>

              <fieldset>
                <legend className="font-medium mb-1">Mode of Volunteering:</legend>
                <label className="mr-4 inline-flex items-center">
                  <input type="checkbox" className="mr-1" /> On-site
                </label>
                <label className="mr-4 inline-flex items-center">
                  <input type="checkbox" className="mr-1" /> Remote
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-1" /> Hybrid
                </label>
              </fieldset>

              <p className="font-medium mt-3">
                Preferred Area(s) of Volunteering (tick all that apply):
              </p>
              <div className="grid grid-cols-2 gap-1">
                {[
                  "Community Outreach",
                  "Education",
                  "Women Empowerment",
                  "Environmental Awareness",
                  "Social Media / Content Creation",
                  "Fundraising",
                  "Admin & Operations",
                  "Research & Documentation",
                ].map((item) => (
                  <label key={item} className="inline-flex items-center">
                    <input type="checkbox" className="mr-1" /> {item}
                  </label>
                ))}
              </div>

              <label className="block mt-2">
                Other:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
            </div>
          </section>

          {/* 5. TECHNICAL SKILLS */}
          <section>
            <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
              5. TECHNICAL SKILLS (Optional)
            </h3>
            <fieldset className="mb-2">
              <legend className="font-medium mb-1">Computer Skills:</legend>
              {[
                "MS Word",
                "Excel",
                "PowerPoint",
                "Canva",
                "Photoshop",
                "Google Docs/Sheets/Drive",
              ].map((skill) => (
                <label key={skill} className="inline-flex items-center mr-4">
                  <input type="checkbox" className="mr-1" /> {skill}
                </label>
              ))}
            </fieldset>

            <fieldset className="mb-2">
              <legend className="font-medium mb-1">Social Media:</legend>
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
                <label key={platform} className="inline-flex items-center mr-4">
                  <input type="checkbox" className="mr-1" /> {platform}
                </label>
              ))}
            </fieldset>

            <label className="block">
              Other tools or skills:
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                rows="2"
              />
            </label>
          </section>
        </div>

        {/* RIGHT COLUMN: Sections 2, 4, 6 */}
        <div className="space-y-10">
          {/* 2. EDUCATIONAL BACKGROUND */}
          <section>
            <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
              2. EDUCATIONAL BACKGROUND
            </h3>
            <div className="space-y-3">
              <label className="block">
                Current Qualification:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Institution Name:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Course/Major:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Year/Semester:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Previous Qualifications (if any):
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  rows="2"
                />
              </label>
            </div>
          </section>

          {/* 4. MOTIVATION & EXPERIENCE */}
          <section>
            <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
              4. MOTIVATION & EXPERIENCE
            </h3>
            <label className="block">
              Why do you want to volunteer with our NGO? (100–200 words)
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                rows="3"
              />
            </label>

            <label className="block">
              Do you have any relevant skills or past experience?
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                rows="2"
              />
            </label>

            <label className="block">
              Languages Known:
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>

            <fieldset>
              <legend className="font-medium mb-1">
                Are you comfortable working with vulnerable communities?
              </legend>
              <label className="inline-flex items-center mr-4">
                <input type="radio" name="comfort" className="mr-1" /> Yes
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="comfort" className="mr-1" /> No
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 mt-2"
                placeholder="If no or unsure, please explain..."
                rows="2"
              />
            </fieldset>
          </section>

          {/* 6. REFERENCES */}
          <section>
            <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
              6. REFERENCES
            </h3>
            <div className="space-y-3">
              <p className="font-medium">Reference 1:</p>
              <label className="block">
                Name:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Contact Number:
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Relation:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <p className="font-medium mt-4">Reference 2 (optional):</p>
              <label className="block">
                Name:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Contact Number:
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>

              <label className="block">
                Relation:
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
            </div>
          </section>
        </div>

        {/* SECTION 7 - Full width */}
        <div className="md:col-span-2 mt-8">
          <h3 className="font-semibold mb-3 border-b pb-1 text-gray-800">
            7. DECLARATION
          </h3>
          <p className="mb-3 text-gray-700">
            I hereby declare that all the information provided above is true
            and correct to the best of my knowledge.
          </p>
          <p className="mb-3 text-gray-700">
            I understand that this is a voluntary role and may not include any
            financial compensation.
          </p>

          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> I Agree
          </label>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              Upload Signature:
              <input type="file" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" />
            </label>
            <label className="block">
              Date:
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
