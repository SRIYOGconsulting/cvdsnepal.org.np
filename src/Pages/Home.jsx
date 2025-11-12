import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Heart,
  Users,
  Star,
  Lock,
  Megaphone,
  HeartHandshake,
} from "lucide-react";

import Header from "../Components/Header.jsx";

// ScrollToTop Component (Fixed Scroll Restoration Issue)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);
  return null;
};

// FIXED Home page sections Latest Update, Hero Section, and Support layout



//made responsive
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/images/projects/homepageherobanner.jpg",
    "/assets/images/projects/Homepageherobanner2.jpg",
    "/assets/images/projects/Homepageherobanner3.jpg",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slide Image */}
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-4 sm:px-6 md:px-16 lg:px-24 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
          Empowering Lives, <br /> Restoring Hope
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl mb-4 sm:mb-6 max-w-full sm:max-w-xl lg:max-w-2xl text-[#f2eeec]">
          Together, we create opportunities for conflict victims and persons with disabilities to live with dignity.
        </h3>

        <Link to="/donate">
          <button className="bg-[#d9d9d9] text-black font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-blue-500 transition">
            Donate Now
          </button>
        </Link>
      </div>

      
    </div>
  );
};

const ImpactSection = () => (
  <div className="bg-white text-black py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Your Support Makes a True Difference
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            stat: "40%",
            desc: "Individuals with disabilities supported through rehabilitation and skill-building programs.",
            // changed content
            icon: <Star />,
          },
          {
            stat: "4,000",
            desc: "Districts reached with community inclusion and advocacy initiatives.",
            // changed content
            icon: <Heart />,
          },
          {
            stat: "75%",
            desc: "Committed to creating inclusive opportunities across Nepal.",
            // changed content
            icon: <Users />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 rounded hover:bg-gray-100 transition"
          >
            <div className="text-3xl font-bold mb-2">{item.stat}</div>
            <p className="text-sm mb-2 max-w-sm">{item.desc}</p>
            <div className="text-gray-700">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SponsorSection = () => (
  <div className="bg-white text-black py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Support a Child Today
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-8 max-w-3xl mx-auto">
        Help children living with disabilities and conflict victims build
        brighter futures.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            img: "/assets/images/projects/female-child.png",
            name: "Aarati Lama",
          },
          {
            img: "/assets/images/projects/male-child.png",
            name: "Bishal Thapa",
          },
          {
            img: "/assets/images/projects/female-child.png",
            name: "Sita Magar",
          },
          {
            img: "/assets/images/projects/male-child.png",
            name: "Ramesh Shrestha",
          },
        ].map((child, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={child.img}
              alt={child.name}
              className="w-54 h-54 flex justify-center items-center px-10 py-5 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{child.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Nepal</p>
              <Link to="/donors">
                <button className="inline-block w-full text-center py-2 rounded bg-[#1F2B6C] text-white hover:bg-[#159EEC] font-normal transition">
                  View Donors
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        <Link to="/donate">
          <button className="px-6 py-2 rounded bg-[#1F2B6C] text-white hover:bg-[#159EEC] font-normal transition">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  </div>
);




const ConfidenceSection = () => (
  <div className="bg-white text-black py-16 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Give With Confidence
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          Every donation directly contributes to rehabilitation, education, and
          empowerment of conflict victims and persons with disabilities.
          {/* changed content */}
        </p>

        {[
          {
            title: "Secure Donations",
            desc: "We ensure every rupee is used responsibly with clear financial reporting and real community outcomes.",
            icon: <Lock />,
          },
          {
            title: "Transparent Impact",
            desc: "Every donation is tracked with detailed reports.",
            icon: <BarChart3 />,
          },
          {
            title: "Trusted Partners",
            desc: "We collaborate with verified organizations to maximize impact.",
            icon: <Heart />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start space-x-3 p-3 border border-gray-200 rounded mb-4"
          >
            <div className="p-2 border rounded-full">{item.icon}</div>
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Smaller Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/assets/images/projects/placeholder2.png"
          alt="Confidence"
          className="rounded-lg w-[80%] md:w-full"
        />
      </div>
    </div>
  </div>
);

const NewsSection = () => {
  const posts = [
    {
      title: "Inclusive Education for Children with Disabilities",
      desc: "CVDS Nepal continues its mission to provide access to quality education for children with disabilities through special education classes, physiotherapy, and personalized learning support.",
      img: "/assets/images/projects/placeholder2.png",
      link: "/about",
      date: "Oct 10, 2025",
    },
    {
      title: "Empowering Marginalized Communities in Rural Nepal",
      desc: "Through our Chepang Network initiative, CVDS reaches remote communities to support persons with disabilities and promote awareness about rights, inclusion, and livelihood opportunities.",
      img: "/assets/images/projects/placeholder2.png",
      link: "/activities",
      date: "Sep 20, 2025",
    },
    {
      title: "Art for Awareness: Eak Abhiyan",
      desc: "CVDS organized 'Eak Abhiyan' a platform encouraging children with disabilities to express themselves through art while spreading messages of hope, equality, and social inclusion.",
      img: "/assets/images/projects/placeholder2.png",
      link: "/support",
      date: "Aug 15, 2025",
    },
  ];

  return (
    <div className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-[#1F2B6C]">
          Our Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="border border-[#1F2B6C] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col h-full"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-sm text-[#1F2B6C] mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-3 text-[#1F2B6C]">
                    {post.title}
                  </h3>
                  <p className="text-sm text-black mb-4">{post.desc}</p>
                </div>
                <Link
                  to={post.link}
                  className="font-semibold text-[#1F2B6C] hover:underline flex items-center mt-2"
                >
                  Read More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ActionSection = () => (
  <div className="bg-white text-black py-10 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-[#1F2B6C]">
        Your Turn — Take Action
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 border border-[#1F2B6C] rounded-lg hover:shadow-md transition h-full">
          <div className="p-3 border border-[#1F2B6C] rounded-full mb-6">
            <Users size={36} className="text-[#1F2B6C]" />
          </div>
          <div className="flex flex-col flex-1 justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1F2B6C]">
                Why Inclusion Matters
              </h3>
              <p className="text-sm text-black mb-6 max-w-xs">
                Learn how disability and conflict exclusion remain key causes of
                poverty and what we can do together.
              </p>
            </div>
            <Link
              to="/objectives"
              className="font-semibold text-white bg-[#1F2B6C] px-6 py-2 rounded hover:bg-blue-500 transition"
            >
              See Why
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 border border-[#1F2B6C] rounded-lg hover:shadow-md transition h-full">
          <div className="p-3 border border-[#1F2B6C] rounded-full mb-6">
            <Megaphone size={36} className="text-[#1F2B6C]" />
          </div>
          <div className="flex flex-col flex-1 justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1F2B6C]">
                Join a Campaign
              </h3>
              <p className="text-sm text-black mb-6 max-w-xs">
                Advocate for the rights of children and families with
                disabilities by joining one of our active campaigns.
              </p>
            </div>
            <Link
              to="/activities"
              className="font-semibold text-white bg-[#1F2B6C] px-6 py-2 rounded hover:bg-blue-500  transition"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 border border-[#1F2B6C] rounded-lg hover:shadow-md transition h-full">
          <div className="p-3 border border-[#1F2B6C] rounded-full mb-6">
            <HeartHandshake size={36} className="text-[#1F2B6C]" />
          </div>
          <div className="flex flex-col flex-1 justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1F2B6C]">
                Donate Today
              </h3>
              <p className="text-sm text-black mb-6 max-w-xs">
                Your contribution helps restore dignity and provide support to
                children and families in crisis.
              </p>
            </div>
            <Link
              to="/donate"
              className="font-semibold text-white bg-[#1F2B6C] px-6 py-2 rounded hover:bg-blue-500  transition"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <ScrollToTop />
      <Header />

      <HeroSection />
      <ImpactSection />
      <SponsorSection />
      <ConfidenceSection />
      <NewsSection />
      <ActionSection />
    </div>
  );
};

export default Home;
