import React from "react";

const Message = () => {
  return (
    <div className="min-h-screen text-gray-800">

      {/* Gray Background Section (header/placeholder for image) */}
      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Placeholder with responsive padding and rounded corners */}
        <div className="relative bg-gray-300 w-full h-[300px] sm:h-[400px] md:h-[430px] flex justify-end items-end p-4 sm:p-6 md:p-10 rounded-xl">
          <div className="text-right">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Yub Raj Thapa</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">President, CVDS Nepal</p>
          </div>
        </div>

        {/* Message Text Section */}
        <div className="mt-10 px-2 sm:px-4 md:px-0">
          <p className="font-semibold mb-4 text-lg sm:text-xl">Message from the President</p>

          {/* First Paragraph */}
          <p className="mb-6 text-justify text-sm sm:text-base md:text-base leading-relaxed">
            Dear Visitors, it is with great pride and gratitude that I welcome you to the official website of CVDS Nepal. My journey began on March 23rd, 1973, in Hasanpur VDC, Bhojpur district, Nepal, as the second of six siblings. From a young age, I was determined to excel in my studies, attending Shree Jan Seva Lower Secondary School near my home. Life, however, presented many challenges. After grade 7, I walked four hours daily through jungles and hilly terrain to attend Shree Sagarmatha Secondary School, often without food or money for basic needs. In grade 9, severe back pain left me unable to walk properly, and despite visits to traditional healers and Ayurvedic clinics, my condition worsened until I became paralyzed. In moments of despair, I even contemplated taking my life, but a neighbor intervened, giving me the chance to pursue proper medical treatment. Through perseverance and the support of volunteers and political leaders, I traveled to Kathmandu, received physiotherapy at Khagendra New Life Center, gradually regained mobility, and continued my studies, ultimately passing the School Leaving Certificate (SLC) examinations despite initial setbacks. I later worked to gain professional experience, continued college studies for three years, and recognized the widespread deprivation faced by children and adults with disabilities. Along with friends, I founded CVDS Nepal, registered under the NGO Registration Act and affiliated with the Social Welfare Council, taking on the role of founder president. Throughout this journey, I built a family through inter-caste marriage and was blessed with a son who is now in class 9.
          </p>

          {/* Second Paragraph */}
          <p className="mb-6 text-justify text-sm sm:text-base md:text-base leading-relaxed">
            Today, CVDS Nepal is dedicated to supporting vulnerable populations through residential rehabilitation, physiotherapy, special education, regular health checkups, and capacity-building programs. Our team of nine committed staff currently supports fifty children, providing care, education, and opportunities to thrive. We aim to expand our impact to 1,000 persons with disabilities and marginalized individuals across Nepal, fostering sustainable livelihoods, health, and education opportunities. This vision is only possible with the collaboration, generosity, and support of compassionate individuals and organizations who share our mission. I invite all visitors to explore our work, understand the impact of our initiatives, and consider joining us in transforming communities and providing dignity, opportunity, and care for every individual. Together, we can make lasting, meaningful change. With sincere gratitude and warm regards, Yub Raj Thapa.
          </p>

          {/* Three Boxes with content below each */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            
            {/* Box 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 h-60 w-full rounded-lg"></div>
              <p className="mt-4 text-center text-sm sm:text-base md:text-base leading-relaxed">
                <strong>Rehabilitation Services:</strong> Providing physiotherapy, mobility support, and residential rehabilitation for persons with disabilities to improve their quality of life.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 h-60 w-full rounded-lg"></div>
              <p className="mt-4 text-center text-sm sm:text-base md:text-base leading-relaxed">
                <strong>Education & Skill Training:</strong> Offering special education classes, vocational training, and capacity-building programs for children and adults with disabilities.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 h-60 w-full rounded-lg"></div>
              <p className="mt-4 text-center text-sm sm:text-base md:text-base leading-relaxed">
                <strong>Community Outreach:</strong> Empowering marginalized communities through health camps, awareness programs, and livelihood support initiatives across Nepal.
              </p>
            </div>

          </div>

          {/* Closing Section aligned to left */}
          <div className="mt-8 mb-10 text-left">
            <p>___________________________</p>
            <p>Yub Raj Thapa</p>
            <p>President, CVDS Nepal</p>
            <p>Facebook: cvdsnepal / Yubraj Thapa Bairagi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
