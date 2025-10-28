import React, { useEffect } from "react";
import { appData } from "../constants";
import img1 from "../assets/vocational.jpg"; 
import img2 from "../assets/home1.jpg";

const About = () => {

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col px-4 sm:px-8 md:px-12">

      {/* ========== SECTION About Us ========== */}
      <section className="flex flex-col lg:flex-row w-full min-h-screen max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full h-[300px] lg:h-auto py-10">
          <img
            src={img1}
            alt="About CVDS Nepal"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col px-8 py-8 fade-in opacity-0 translate-y-6 transition-all duration-700 text-justify rounded-lg ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            People with disability are the most vulnerable and marginalized group
            of people. They live in isolation, segregation, disparagement,
            poverty, and dependence on charity. They are victims of community
            misconceptions and stigmas denying them their basic rights.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conflict Victim and Disable Society ({appData.organizationName}) is
            located at {appData.municipality} Municipality-{appData.wardno},{" "}
            {appData.address1}, {appData.address2}, {appData.city}. The
            organization has been supporting people with disabilities in Nepal
            since {appData.established}, providing food, clothes, shelter, and
            rehabilitation services.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full w-fit transition-all duration-300 shadow-md hover:shadow-lg">
            Join with us
          </button>
        </div>
      </section>

      {/* ========== SECTION Who We Are & Why Choose Us ========== */}
      <section className="py- bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 fade-in opacity-0 translate-y-6 transition-all duration-700 text-justify py-12">
          {/* Who We Are */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a non-profit organization dedicated to improving the lives
              of people with disabilities and conflict victims across Nepal.
              Through rehabilitation, education, and empowerment programs, we
              strive to integrate them into the mainstream of national
              development.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Our experienced team of caregivers, therapists, and educators
              provides continuous support to help individuals gain independence
              and dignity. We are driven by compassion, equality, and a belief in
              the power of inclusive growth.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION Digital Transformation (Vision & Mission Style) ========== */}
      <section className="flex flex-col lg:flex-row-reverse w-full min-h-screen max-w-6xl mx-auto">
        {/* Image */}
        <div className="lg:w-1/2 lg:h-auto lg:mb-0">
          <img
            src={img2}
            alt="Digital Transformation"
            className="w-full h-full object-cover rounded-lg overflow-hidden py-20"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 w-full flex flex-col px-8 py-16 fade-in opacity-0 translate-y-6 transition-all duration-700 text-justify">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Digital Transformation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our vision is to make children with disabilities capable of leading
            independent lives, empowering them through education, therapy, and
            skill development. We believe in creating a world where disability
            does not define one’s potential.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to remove social bias and provide equal opportunities
            through music, art, and education — helping every child reach their
            fullest potential and contribute to Nepal’s inclusive development.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
