import React from "react";
const Activities = () => {

  const startDate = new Date("2025-01-01"); // starting reference date
const dayGap = 35; // 35 days gap between activities
  const activities = [
    {
      title: "Rehabilitation Services",
      description:
        "Providing physical therapy and prosthetic support for conflict-injured individuals to regain mobility and independence.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Rehabilitation image",
      date: new Date(startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Psychological Support",
      description:
        "Counseling and trauma therapy programs to help victims process PTSD and rebuild emotional resilience.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Psychological support image",
       date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Vocational Training",
      description:
        "Skill-building workshops (e.g., crafts, IT) tailored for disabled youth, leading to employment opportunities.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Vocational training image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Education Access",
      description:
        "Inclusive schooling and literacy programs for disabled children from conflict zones, bridging educational gaps.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Education access image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Community Integration",
      description:
        "Social events and awareness campaigns to reduce stigma and foster inclusive communities.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Community integration image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Advocacy & Rights",
      description:
        "Legal aid and policy advocacy to secure rights and government support for disabled conflict victims.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Advocacy and rights image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Health & Nutrition",
      description:
        "Medical check-ups and nutrition drives to address secondary health issues from disabilities and displacement.",
      image:"/assets/images/projects/placeholder2.png",
      alt: "Health and nutrition image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Infrastructure Development",
      description:
        "We plan to acquire our own facility to provide children with disabilities a safe and fully equipped environment for learning and living.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Infrastructure development image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    },
    {
      title: "Community Outreach Expansion",
      description:
        "We aim to extend our outreach programs to more rural areas, ensuring children with disabilities receive proper care, education, and social support.",
      image: "/assets/images/projects/placeholder2.png",
      alt: "Community outreach expansion image",
      date: new Date(startDate.setDate(startDate.getDate() + dayGap)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
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

         <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
          Our special education classes provide tailored learning experiences through interactive games, arts and crafts, and sensory activities that support cognitive and social development. Daily living skills training, personal care assistance, and vocational workshops strengthen self-reliance and prepare individuals for meaningful participation in society. Additionally, we offer psychological support, community integration events, and advocacy programs to ensure holistic development and inclusion for every individual.
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
    <p className="text-xs text-gray-500 mb-2">{activity.date}</p>
    <p className="text-sm text-black leading-relaxed py-3">
      {activity.description}
    </p>
    <button className="inline-block self-center text-black bg-white px-3 py-1.5 rounded border border-gray-300">
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