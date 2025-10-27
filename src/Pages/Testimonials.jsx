import React from "react";
import img1 from "../assets/female.png";
import img2 from "../assets/male.png";

const Testimonials = () => {
  const testimonials = [
    {
      fullName: "Yub Raj Thapa",
      description:
        "CVDS-Nepal gave my son a new life. He couldn’t walk or speak properly, but after months of therapy and love at the rehabilitation center, he now smiles, plays, and even says a few words. I’m forever grateful.",
      image: img1,
      alt: "",
      testimony: "A Mother from Sankhu",
    },
    {
      fullName: "Sita Rai",
      description:
        "When I visited CVDS, I saw not just an organization, but a family. The children are cared for with love, and the dedication of the staff is truly inspiring. This is where hope lives.",
      image: img1,
      alt: "",
      testimony: "Kriti Sharma, Donor from Kathmandu",
    },
    {
      fullName: "Anil Gurung",
      description:
        "I was abandoned as a child and had nowhere to go. CVDS gave me food, education, and a home. Today, I work as a computer technician. Without CVDS, I wouldn’t be here.",
      image: img2,
      alt: "",
      testimony: "Former Beneficiary",
    },
    {
      fullName: "Maya KC",
      description:
        "The physiotherapy sessions at CVDS have made a huge difference in my daughter’s mobility. She couldn’t even sit before, and now she can stand with support. The team is a blessing.",
      image: img1,
      alt: "",
      testimony: "Parent of a Child with Cerebral Palsy",
    },
    {
      fullName: "Rita Sharma",
      description:
        "Volunteering at CVDS changed my life. These children have faced so much yet remain full of joy and resilience. It was an honor to be part of their journey, even for a short time.",
      image: img1,
      alt: "",
      testimony: "Nina Patel, Volunteer from UK",
    },
    {
      fullName: "Bikram Rana",
      description:
        "I’ve donated to many organizations, but CVDS stands out. They are transparent, accountable, and truly passionate about their mission. I trust them completely with my support.",
      image: img2,
      alt: "",
      testimony: "Ramesh Adhikari, Supporter",
    },
    {
      fullName: "Sita KC",
      description:
        "My brother, who has a disability, was always left behind. At CVDS, he was treated with dignity and given the chance to learn and grow. It changed our entire family’s life.",
      image: img1,
      alt: "",
      testimony: "Sibling of a Beneficiary",
    },
    {
      fullName: "Ramesh Shrestha",
      description:
        "I met the founder, Yub Raj Thapa, and was moved by his personal story. He turned his pain into purpose. That spirit flows through every corner of CVDS.",
      image: img2,
      alt: "",
      testimony: "Michael Lee, International NGO Representative",
    },
    {
      fullName: "Pooja Sharma",
      description:
        "As a doctor, I’ve worked with many organizations, but CVDS is special. They don’t just treat medical issues—they restore self-worth and dignity to children who need it most.",
      image: img1,
      alt: "",
      testimony: "Dr. Anjana Shrestha, Pediatric Specialist",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black max-w-6xl mx-auto px-4">
      {/*  Keep original heading and paragraphs */}
      <section className="max-w-5xl mx-auto px-6 text-center py-12">
        <h2 className="text-xl font-semibold mb-4">{"CVDS Nepal"} Testimonials</h2>
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

      {/*  Gallery-style grid layout */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto pb-20">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-54 h-54 flex justify-center items-center px-10 py-5 rounded-t-lg object-contain"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-blue-800 text-center">
                {item.fullName}
              </h3>
              
              <p className="text-sm text-gray-700 text-justify">
                {item.description}
              </p>
              <p className="text-sm text-gray-700 text-center pt-4 italic">
                – {item.testimony}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
