import React from "react";



const Appeal = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      {/* White Card Container */}
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto shadow-md min-h-screen">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/projects/cvdslogo.png"
            alt="CVDS Logo"
            className="w-32 sm:w-40 md:w-48 object-contain"
          />
        </div>

        {/* First two paragraphs - full width */}
        <div className="text-justify mb-6">
          <p className="mb-4">
            <strong>Conflict Victim and Disabled Society (CVDS) Nepal</strong> is
            a non-profit organization committed to empowering individuals affected
            by conflict and persons with disabilities across Nepal. Our mission is
            to promote inclusion, equality, and social justice through
            community-driven programs and sustainable development initiatives.
          </p>

          <p className="mb-4">
            CVDS Nepal focuses on helping people rebuild their lives by providing
            access to rehabilitation, education, healthcare, and livelihood
            opportunities. We believe that every individual deserves dignity and
            the chance to live an independent and meaningful life regardless of
            their background or physical condition.
          </p>
        </div>

        {/* Urgent Appeal Paragraph */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-8 text-justify">
          <p className="text-red-700 font-semibold">
            Urgent Appeal: Thousands of conflict victims and persons with disabilities 
            in Nepal are still struggling to access basic healthcare, education, and livelihood support. 
            Your immediate support can make a life-changing difference. Please consider contributing today.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mb-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Donate Now
          </button>
        </div>

        {/* Remaining content with image */}
        <div className="flex flex-wrap md:flex-nowrap items-start gap-8">
          {/* Text Section */}
          <div className="w-full md:w-3/5 text-justify">
            <p className="mb-4">
              Since our establishment, we have worked hand in hand with local
              communities, government agencies, and partner organizations to address
              the needs of conflict victims and people with disabilities. Through
              skill training, awareness campaigns, and advocacy, we strive to remove
              social barriers and build a more inclusive society.
            </p>

            <p className="mb-4">
              Our team is made up of passionate individuals who are deeply dedicated
              to humanitarian values. We continue to expand our reach across rural
              and urban areas of Nepal, bringing hope and opportunity to those who
              need it most.
            </p>

            {/* Signature Section */}
            <div className="border-t border-gray-300 pt-4 mt-8">
              <p className="font-semibold">
                Conflict Victim and Disabled Society (CVDS) Nepal
              </p>
              <p className="text-sm">Kathmandu, Nepal</p>
              <p className="text-sm">Email: info@cvdsnepal.org</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-end">
            <img
             src="/assets/images/projects/male.png"
              alt="Appeal"
              className="rounded-2xl w-36 sm:w-44 md:w-52 lg:w-60 object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Appeal;
