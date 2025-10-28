import React from 'react'
import { appData } from '../constants'
import { useOutletContext } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";



const Contactus = () => {
  const { organizationName, pathname } = useOutletContext();
  return (
    <div className="bg-gray-50 min-h-screen  max-w-5xl mx-auto px-4 py-12" >
       {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
           {appData.organizationName}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’re here to help! Get in touch with us and we’ll respond as soon as
          possible.
        </p>
      </div>
      <div>
        {/* Fixed: Corrected iframe attributes - referrerPolicy & allowFullScreen */}
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.636738758784!2d85.44933267546811!3d27.72850007617052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb052f80a28783%3A0x31997672e2ca2d2d!2sConflict%20victim%20and%20disabled%20society!5e0!3m2!1sen!2snp!4v1760454686904!5m2!1sen!2snp"
  style={{ width: "100%", height: "500px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div><br/>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white shadow-lg rounded-2xl p-10">
        {/* Left Side Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you shortly.
            We’re excited to hear from you!
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href='tel:+9779851160868'>{appData.phone1 || "+977-9851160868"}</a>
              
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href='mailto:info@cvdsnepal.org.np'>{appData.email1 || "info@cvdsnepal.org.np"}</a>
              
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              {appData.municipality} Municipality-{appData.wardno} <br/>
              {appData.address1}, {appData.address2}, {appData.city|| "Kathmandu"}, {appData.country || "Nepal"}
            </li>
          </ul>
        </div>

        {/* Right Side Form */}
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            

            <input
              type="number"
              placeholder="Contact Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onKeyDown={(e) => {
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault(); 
                }
              }}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // FIXED Restricted ContactUs phone number input to numeric values only

                
    // Limit to max 10 digits
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
              }}
            />
       
      
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contactus;



