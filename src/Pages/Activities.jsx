import React from "react";
  



import img from "../assets/placeholder2.png";

const Activities = () => {
  const activities = [
    {
      title: "Rehabilitation Services",
      description:
        "Providing physical therapy and prosthetic support for conflict-injured individuals to regain mobility and independence.",
      image: img,
      alt: "Rehabilitation image",
    },
    {
      title: "Psychological Support",
      description:
        "Counseling and trauma therapy programs to help victims process PTSD and rebuild emotional resilience.",
      image: img,
      alt: "Psychological support image",
    },
    {
      title: "Vocational Training",
      description:
        "Skill-building workshops (e.g., crafts, IT) tailored for disabled youth, leading to employment opportunities.",
      image: img,
      alt: "Vocational training image",
    },
    {
      title: "Education Access",
      description:
        "Inclusive schooling and literacy programs for disabled children from conflict zones, bridging educational gaps.",
      image: img,
      alt: "Education access image",
    },
    {
      title: "Community Integration",
      description:
        "Social events and awareness campaigns to reduce stigma and foster inclusive communities.",
      image: img,
      alt: "Community integration image",
    },
    {
      title: "Advocacy & Rights",
      description:
        "Legal aid and policy advocacy to secure rights and government support for disabled conflict victims.",
      image: img,
      alt: "Advocacy and rights image",
    },
    {
      title: "Health & Nutrition",
      description:
        "Medical check-ups and nutrition drives to address secondary health issues from disabilities and displacement.",
      image: img,
      alt: "Health and nutrition image",
    },
    {
      title: "Infrastructure Development",
      description:
        "We plan to acquire our own facility to provide children with disabilities a safe and fully equipped environment for learning and living.",
      image: img,
      alt: "Infrastructure development image",
    },
    {
      title: "Community Outreach Expansion",
      description:
        "We aim to extend our outreach programs to more rural areas, ensuring children with disabilities receive proper care, education, and social support.",
      image: img,
      alt: "Community outreach expansion image",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-6 text-center py-12">
        <h2 className="text-xl font-semibold mb-4">
          {"CVDS Nepal"} Activities
        </h2>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
          Recreational activities include hobbies such as painting, gardening,
          reading, or gaming, which provide relaxation and enjoyment. Physical
          activities like running, yoga, or sports promote health and
          well-being. In professional environments, team-building activities
          such as workshops, games, or retreats strengthen communication and
          collaboration among employees.
        </p>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          For children, activities are essential for cognitive and social
          development, ranging from simple arts and crafts to interactive
          learning games. Outdoor activities like hiking, camping, or cycling
          offer both adventure and a connection with nature. Each type of
          activity serves a distinct purpose, enriching lives by enhancing
          skills, promoting health, fostering relationships, or simply offering
          a break from routine.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-sm flex flex-col h-[480px] overflow-hidden"
            >
              {/* Image Section - Fixed height to match text area */}
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Text Section - Equal height to image, with gray border on top and subtle bottom rounding */}
              <div className="flex-1 flex flex-col justify-between p-4 border-t border-gray-200 rounded-b-md">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date().toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-black leading-relaxed py-3">
                    {activity.description}
                  </p>
                  <button className=" inline-block self-center text-black bg-white px-3 py-1.5 rounded border border-gray-300">
                  Read More
                </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;