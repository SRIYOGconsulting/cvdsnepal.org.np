import React from "react";
import { appData } from "../constants";



const OurTeam = () => {
  const teamMembers = [
     { name: "Full Name", role: "Vice President", image: "/assets/images/projects/female.png" },
  { name: "Full Name", role: "Secretary", image: "/assets/images/projects/male.png" },
  { name: "Full Name", role: "Joint Secretary", image: "/assets/images/projects/female.png" },
  { name: "Full Name", role: "Treasurer", image: "/assets/images/projects/male.png" },
  { name: "Full Name", role: "Executive Member", image: "/assets/images/projects/male.png" },
  { name: "Full Name", role: "Executive Member", image: "/assets/images/projects/female.png" },
  { name: "Full Name", role: "Executive Member", image: "/assets/images/projects/male.png" },
  { name: "Full Name", role: "Executive Member", image: "/assets/images/projects/male.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* President Section */}
      <div className="rounded-lg mb-10 border border-gray-300 bg-gray-50 p-6 sm:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* President Image and Info */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <img
              src="/assets/images/projects/male.png"
              alt="President"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-center">
              Full Name
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 text-center">
              President
            </p>
          </div>

          {/* About Section */}
          <div className="flex-1 text-justify">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
              About CDVS Nepal
            </h1>
            <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
              People with disability are the most vulnerable and marginalized
              group of people. They live in isolation, segregation,
              disparagement, poverty and virtual dependence on charity and even
              pity. They are the victim of the community misconception and
              stigmas denying them of their inalienable and recognized rights.
              <br />
              <br />
              Conflict Victim and Disable Society ({appData.organizationName}) is
              located at {appData.municipality} Municipality-{appData.wardno},{" "}
              {appData.address1}, {appData.address2}, {appData.city}. This
              organization has been supporting people with disability in Nepal
              since {appData.established}, providing food, clothes, shelter, and
              basic care through the Rehabilitation Center for Children with
              disability due to Cerebral Palsy (CP) project.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <p className="text-gray-900 font-medium">
                Follow CDVS Nepal on social media:
              </p>
              <div className="flex gap-3">
                <img
                  src="/assets/images/projects/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
                <img
                  src="/assets/images/projects/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-3 object-cover"
            />
            <h2 className="text-base sm:text-lg font-semibold">
              {member.name}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
