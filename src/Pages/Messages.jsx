import React, {  useEffect } from "react";


const Message = () => {
  return (
    <div className="min-h-screen text-gray-800">

      {/* Gray Background Section (no image) */}
      <div className="max-w-5xl mx-auto mt-10">
        {/* fixed the widht and height of placeholder here  */}
        <div className="relative bg-gray-300 w-full h-[430px] flex justify-end items-end p-10">
          <div className="text-right">
            <h3 className="text-2xl font-bold text-black">Name of President</h3>
            <p className="text-sm text-gray-700">Designation</p>
          </div>
          
        </div>

        {/* Message Text Section */}
        <div className="mt-10 px-6 md:px-0">
          <p className="font-semibold mb-4">Message from the President</p>
          <p className="mb-4">Dear Visitors,</p>

          <p className="mb-4 text-justify">
            It is with great pride and sincere appreciation that I welcome you
            to the official website of CVDS Nepal. In today’s rapidly
            evolving world, staying connected, transparent, and purpose-driven
            is more important than ever. This digital space is more than just an
            introduction to our organization - it is a window into our values,
            our people, and our ongoing commitment to excellence.
          </p>

          <p className="mb-4 text-justify">
            Since our founding, CVDS Nepal has been guided by a clear
            mission: to deliver meaningful impact through innovation,
            integrity, and a deep understanding of the needs of those we serve.<br/><br/>
            Every decision we make, every project we undertake, and every
            partnership we build is driven by this mission.
          </p>

          <p className="mb-4 text-justify">
            As President, I am incredibly proud of how far we’ve come. Our team
            is composed of dedicated professionals who bring not only skill and
            experience, but also passion and heart to everything they do.
          </p>

          <div className="grid grid-cols-3 gap-20 my-8">
            <div className="bg-gray-200 h-60 w-45 rounded-lg"></div>
            <div className="bg-gray-200 h-60 w-45 rounded-lg"></div>
            <div className="bg-gray-200 h-60 w-45 rounded-lg"></div>
          </div>

          <p className="mb-4 text-justify">
            Together, we have cultivated a culture that values continuous
            improvement, collaboration, and above all, a steadfast commitment to
            quality and service.
          </p>

          <p className="mb-4 text-justify">
            Looking ahead, we remain focused on growth that is sustainable,
            inclusive, and future-ready. Whether that means embracing new
            technologies, expanding our outreach, or deepening our community
            impact, we are prepared to meet the challenges and opportunities of
            tomorrow with confidence and resilience.
          </p>

          <p className="mb-4 text-justify">
            To our valued clients, partners, employees, and supporters — thank
            you for being part of our story. And to those visiting us for the
            first time, I invite you to explore our site, learn more about our
            work, and consider how we might collaborate for mutual success.
          </p>

          <p>
            We are excited about what the future holds and are honored to have
            you with us on this journey.<br/>
            Warm regards,
          </p>

          <div className="mt-8 mb-10">
            <p>___________________________</p>
            <p>[President’s Full Name]</p>
            <p>President, CVDS Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
