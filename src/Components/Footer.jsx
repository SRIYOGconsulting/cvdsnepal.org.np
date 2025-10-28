import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitch,
  Twitter,
  Github,
} from "lucide-react";
import logo from "../assets/Broad-Press-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-16 px-6 sm:px-6 lg:px-8 border-t border-gray-200">
  {/* Top Section (Logo + Description + 4 Columns) */}
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between">
    {/* Left Section */}
    <div className="w-full lg:w-[45%] mb-10 lg:mb-0">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={logo}
          alt="BroadPress Logo"
          className="h-14 w-auto object-contain"
        />
        <span className="text-[#0B5D5E] text-3xl font-semibold tracking-wide">
          BroadPress
        </span>
      </div>

      {/* Description */}
      <p className="font-semibold mb-3 text-[15px]">
        Blazing Fast Next Gen Corporate CMS
      </p>
      <p className="text-[15px] leading-relaxed text-gray-700 mb-3 text-justify">
        BroadPress is a next-generation web platform crafted to empower
        organizations across various sectors.
      </p>
      <p className="text-[15px] leading-relaxed text-gray-700 text-justify">
        Whether it’s managing academic portals, running global corporate
        sites, driving social causes, or representing diverse businesses,
        BroadPress delivers flexibility, speed, and enterprise-grade
        security for all.
      </p>
    </div>

    {/* Right Section (4 Columns) */}
    <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10">
      {/* Browse More */}
      <div>
        <h3 className="font-bold mb-4 text-[16px] tracking-wide">Browse More</h3>
        <ul className="space-y-[12px] text-[15px]">
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/notice">Notice</Link></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="font-bold mb-4 text-[16px] tracking-wide">Resources</h3>
        <ul className="space-y-[12px] text-[15px]">
          <li>Appeal</li>
          <li><Link to="/partners">Partners</Link></li>
          <li><Link to="/messages">Message</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/qr">QR</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="font-bold mb-4 text-[16px] tracking-wide">Support</h3>
        <ul className="space-y-[12px] text-[15px]">
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/trelloboard">TrelloBoard</Link></li>
          <li><Link to="/impact">Social Impact</Link></li>
          <li><Link to="/activities">Activities</Link></li>
        </ul>
      </div>

      {/* Organisation */}
      <div>
        <h3 className="font-bold mb-4 text-[16px] tracking-wide">Organisation</h3>
        <ul className="space-y-[12px] text-[15px]">
          <li><Link to="donate">Donate Now</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/projects">Our Projects</Link></li>
          <li><Link to="/donars">Donors</Link></li>
          <li><Link to="/volunter">Volunteer</Link></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Icons + Subscribe (Second Row) */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-12 gap-6">
    {/* Social Icons */}
    <div className="flex gap-5 text-gray-600 mb-4 md:mb-0">
      <Twitter className="w-5 h-5 cursor-pointer hover:text-[#0B5D5E]" />
      <Facebook className="w-5 h-5 cursor-pointer hover:text-[#0B5D5E]" />
      <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#0B5D5E]" />
      <Youtube className="w-5 h-5 cursor-pointer hover:text-[#0B5D5E]" />
      <Twitch className="w-5 h-5 cursor-pointer hover:text-[#0B5D5E]" />
      <Github className="w-5 h-5 cursor-pointer hover:text-[#0B5D5E]" />
    </div>

    {/* Subscribe box aligned right */}
    <div className="flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your eMail address"
        className="border border-gray-400 rounded-md px-4 py-2 w-full sm:w-80 md:w-96 text-[15px] font-medium outline-none bg-white placeholder:text-gray-500"
      />
      <button className="border border-gray-400 text-gray-800 text-[16px] font-semibold rounded-md px-6 py-2 w-full sm:w-auto hover:bg-[#1F2B6C] hover:text-white transition">
        Subscribe
      </button>
    </div>
  </div>

  {/* Bottom Section*/}
  <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-200 text-[13px] text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
    <p>
      © 2025 <span className="font-medium">CVDS Nepal</span> | All Rights Reserved. Built With :
      <a href="https://broadpress.org" target="_blank" className="text-[#0B5D5E] font-semibold cursor-pointer hover:underline"> BroadPress</a>
    </p>
    <div className="flex flex-wrap justify-center gap-2">
      <span className="hover:underline cursor-pointer">Terms of Service</span>
      <span>|</span>
      <span className="hover:underline cursor-pointer">Privacy Policy</span>
      <span>|</span>
      <span className="hover:underline cursor-pointer">Disclaimer</span>
    </div>
  </div>
</footer>

  );
};

export default Footer;
