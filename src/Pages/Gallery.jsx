
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; //  corrected
 // Import lightbox styles
// images from zip folder
import gallery1 from "/assets/images/gallery/gallery1.jpg";
import gallery2 from "/assets/images/gallery/gallery2.jpg";
import gallery3 from "/assets/images/gallery/gallery3.jpg";
import gallery4 from "/assets/images/gallery/gallery4.jpg";
import gallery5 from "/assets/images/gallery/gallery5.jpg";
import gallery6 from "/assets/images/gallery/gallery6.jpg";
import gallery7 from "/assets/images/gallery/gallery7.jpg";
import gallery8 from "/assets/images/gallery/gallery8.jpg";
import gallery9 from "/assets/images/gallery/gallery9.jpg";
import gallery10 from "/assets/images/gallery/gallery10.jpg";
import gallery11 from "/assets/images/gallery/gallery11.jpg";
import gallery12 from "/assets/images/gallery/gallery12.jpg";
import gallery13 from "/assets/images/gallery/gallery13.jpg";
import gallery14 from "/assets/images/gallery/gallery14.jpg";
import gallery15 from "/assets/images/gallery/gallery15.jpg";
import gallery16 from "/assets/images/gallery/gallery16.jpg";
import gallery17 from "/assets/images/gallery/gallery17.jpg";
import gallery18 from "/assets/images/gallery/gallery18.jpg";
import gallery19 from "/assets/images/gallery/gallery19.jpg";
import gallery20 from "/assets/images/gallery/gallery20.jpg";
import gallery21 from "/assets/images/gallery/gallery21.jpg";
import gallery22 from "/assets/images/gallery/gallery22.jpg";
import gallery23 from "/assets/images/gallery/gallery23.jpg";
import gallery24 from"/assets/images/gallery/gallery24.jpg";
import gallery25 from"/assets/images/gallery/gallery25.jpg";
import gallery26 from"/assets/images/gallery/gallery26.jpg";
import gallery27 from"/assets/images/gallery/gallery27.jpg";
import gallery28 from"/assets/images/gallery/gallery28.jpg";
import gallery29 from"/assets/images/gallery/gallery29.jpg";
import gallery30 from"/assets/images/gallery/gallery30.jpg";


const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0); // used for Lightbox index
  const [open, setOpen] = useState(false); //  Lightbox open state
  
   

   // ===== 3 Organized Sections =====
  const section1 = [
    { img: gallery1, desc: "Community awareness event in Kathmandu Valley." },
    { img: gallery2, desc: "Our volunteers conducting door-to-door visits." },
    { img: gallery3, desc: "Health outreach program at a local school." },
    { img: gallery4, desc: "Women empowerment discussion session." },
    { img: gallery5, desc: "Community meeting to plan rural initiatives." },
    { img: gallery6, desc: "Distribution of educational materials." },
  ];

  const section2 = [
    { img: gallery7, desc: "Volunteer training and briefing session." },
    { img: gallery8, desc: "Group of youth leaders at a leadership camp." },
    { img: gallery9, desc: "Volunteers supporting education drives." },
    { img: gallery10, desc: "Tree plantation by CVDS team." },
    { img: gallery11, desc: "Health and sanitation awareness rally." },
    { img: gallery12, desc: "Cultural celebration during social week." },
  ];

  // Remaining 18 images for the tile gallery section
  const tileGallery = [
    { img: gallery13, desc: "Green Earth initiative participation." },
    { img: gallery14, desc: "Local clean-up campaign volunteers." },
    { img: gallery15, desc: "Village meeting discussing development goals." },
    { img: gallery16, desc: "Children’s learning and art event." },
    { img: gallery17, desc: "Environmental sustainability awareness." },
    { img: gallery18, desc: "Food distribution to families in need." },
    { img: gallery19, desc: "Climate action workshop with students." },
    { img: gallery20, desc: "Volunteers painting awareness messages." },
    { img: gallery21, desc: "Youth training for digital literacy." },
    { img: gallery22, desc: "Community-driven environmental pledge." },
    { img: gallery23, desc: "Waste segregation project in schools." },
    { img: gallery24, desc: "Solar power awareness session." },
    { img: gallery25, desc: "Tree planting day with local schools." },
    { img: gallery26, desc: "Health volunteers providing care." },
    { img: gallery27, desc: "Art competition focusing on sustainability." },
    { img: gallery28, desc: "Children participating in nature walk." },
    { img: gallery29, desc: "Eco-friendly campaign closing ceremony." },
    { img: gallery30, desc: "CVDS Nepal annual event celebration." },
  ];

    const allImages = [
    ...section1.map((i) => ({ src: i.img })),
    ...section2.map((i) => ({ src: i.img })),
    ...tileGallery.map((i) => ({ src: i.img })),
  ]; //  format required by yet-another-react-lightbox
  
  const handleImageClick = (image, desc) => {
    setSelectedImage(image);
    setSelectedDesc(desc);
  };


  return (
    <div className="min-h-screen bg-white text-gray-900 max-w-6xl mx-auto px-6 py-16">
     

       {/* ===== Section 1 ===== */}
      <section className="mb-20">
        <h2 className="text-2xl font-extrabold mb-8 text-[#1F2B6C] text-left">
          Community Engagement & Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed: 3-column layout */}
          {section1.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer border-4 border-transparent hover:border-[#1F2B6C] transition-all duration-300"
             onClick={() => { setPhotoIndex(index); setOpen(true); }} // pass index
            >
              {/* Increased image height for larger display */}
              <img
                src={item.img}
                alt={`Section 1 - ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Description overlay on hover */}
              {/* Changed: description aligned top-left instead of center */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-start text-left p-4">
                <span className="text-white text-sm font-medium">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Section 2 ===== */}
      <section className="mb-20">
        <h2 className="text-2xl font-extrabold mb-8 text-[#1F2B6C] text-left">
          Volunteer Programs & Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed: 3-column layout */}
          {section2.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer border-4 border-transparent hover:border-[#1F2B6C] transition-all duration-300"
               onClick={() => { setPhotoIndex(section1.length + index); setOpen(true); }} //  offset by section1.length
            >
              <img
                src={item.img}
                alt={`Section 2 - ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Changed: description aligned top-left */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-start text-left p-4">
                <span className="text-white text-sm font-medium">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Final Section: Environmental & Awareness Gallery ===== */}
<section>
  <h2 className="text-2xl font-extrabold mb-8 text-[#1F2B6C] text-left">
    Environmental & Awareness Gallery
  </h2>

  {/* Changed layout: grid instead of columns, for even alignment */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {tileGallery.map((item, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl group cursor-pointer border-4 border-transparent hover:border-[#1F2B6C] transition-all duration-300"
          onClick={() => { setPhotoIndex(index); setOpen(true); }} // pass index
      >
        {/* Fixed height for equal alignment */}
        <img
          src={item.img}
          alt={`Tile ${index + 1}`}
          className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Hover overlay */}
         {/* Changed: description aligned top-left */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-start text-left p-4">
                <span className="text-white text-sm font-medium">{item.desc}</span>
              </div>
      </div>
    ))}
  </div>
</section>


      {/* New Lightbox for React 18 */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={allImages}
          index={photoIndex}
          carousel={{ finite: false }}
        />
      

      )}

    </div>
  );
};

export default Gallery;






