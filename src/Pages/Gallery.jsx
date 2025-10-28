
import React, { useState } from "react";
// images from zip folder
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";
import gallery15 from "../assets/gallery15.jpg";
import gallery16 from "../assets/gallery16.jpg";
import gallery17 from "../assets/gallery17.jpg";
import gallery18 from "../assets/gallery18.jpg";
import gallery19 from "../assets/gallery19.jpg";
import gallery20 from "../assets/gallery20.jpg";
import gallery21 from "../assets/gallery21.jpg";
import gallery22 from "../assets/gallery22.jpg";
import gallery23 from "../assets/gallery23.jpg";

import gallery24 from"../assets/gallery24.jpg";
import gallery25 from"../assets/gallery25.jpg";
import gallery26 from"../assets/gallery26.jpg";
import gallery27 from"../assets/gallery27.jpg";
import gallery28 from"../assets/gallery28.jpg";
import gallery29 from"../assets/gallery29.jpg";
import gallery30 from"../assets/gallery30.jpg";


const Gallery = () => {
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
    gallery13, gallery14, gallery15, gallery16, gallery17, gallery18,
    gallery19, gallery20, gallery21, gallery22,gallery23,gallery24,
    gallery25,gallery26,gallery27, gallery28, gallery29, gallery30,
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 max-w-7xl mx-auto px-6 py-16">
      {/* ===== Header ===== */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-semibold mb-3">Our Gallery</h1>
        <p className="text-gray-600 text-lg">
          A collection of moments that tell our story clear, beautiful, and real.
        </p>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                Image {index + 1}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;







