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
import img1 from "../assets/female.png";
import img2 from "../assets/male.png";
import childM from "../assets/male-child.png";
import childF from "../assets/female-child.png"
import Header from "../Components/Header";
import newHeroImage from "../assets/homepageherobanner.jpg";
import img3 from "../assets/blog1.jpg";
import img5 from "../assets/home1.jpg";
import img6 from "../assets/home2.jpg";


// ScrollToTop Component (Fixed Scroll Restoration Issue)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);
  return null;
};


// FIXED Home page sections Latest Update, Hero Section, and Support layout
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden min-h-screen">
      <img
        src={newHeroImage}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-full object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start  px-6 md:px-16 lg:px-24 text-white">
        <h1 className="text-xl lg:text-4xl font-bold mb-4 px-20">
          Turning Challenges into <br /> Opportunities for All
          <br />
        </h1>
        <h3
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-[#f2eeec] px-4 sm:px-10 lg:px-20"
          style={{ fontSize: "18px" }}
        >
          Adding the Wheel in Wheelchair, Restoring Dignity
        </h3>
        <br />
        <br />
        <Link to="/donate">
          <button className="bg-[#d9d9d9] px-3 py-1 text-black font-semibold hover:bg-blue-500 transition rounded-[0.5vw] mx-20">
            Donate Now
          </button>
        </Link>
      </div>
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 shadow"
      >
        <ChevronLeft size={28} className="text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 shadow"
      >
        <ChevronRight size={28} className="text-gray-800" />
      </button>
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
            desc: "Children in our programs are up to 40% more likely to finish secondary education",
            icon: <Star />,
          },
          {
            stat: "4,000",
            desc: "Assisted children spend an average of 4,000 hours in nurturing programs",
            icon: <Heart />,
          },
          {
            stat: "75%",
            desc: "Children are 75% more likely to become leaders in their communities",
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
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { img: childF, name: "Aarati Lama" },
          { img: childM, name: "Bishal Thapa" },
          { img: childF, name: "Sita Magar" },
          { img: childM, name: "Ramesh Shrestha" },
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
              <Link
                to="/gallery"
                className="inline-block w-full text-center border border-black py-2 rounded hover:bg-black hover:text-white transition"
              >
                View Donors
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        <Link to="/gallery">
          <button className="border border-black px-6 py-2 rounded hover:bg-blue-500  hover:text-white transition">
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
          With CVDS-Nepal, your support is used wisely to help children and
          victims across Nepal.
        </p>

        {[ 
          {
            title: "Secure Donations",
            desc: "We use industry-standard encryption to protect your data.",
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
          src={img2}
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
      title: "Empowering Children with Special Needs",
      desc: "CVDS works to support children with disabilities by providing inclusive education and resources.",
      img: img3,
      link: "/about",
      date: "Oct 10, 2025",
    },
    {
      title: "Community Outreach: Chepang Network",
      desc: "CVDS engages local communities to empower marginalized groups and ensure child rights.",
      img: img5,
      link: "/activities",
      date: "Sep 20, 2025",
    },
    {
      title: "Art for Awareness: Eak Abhiyan",
      desc: "An initiative by CVDS to promote creativity among children and raise awareness on social issues.",
      img: img6,
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
                poverty — and what we can do together.
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




