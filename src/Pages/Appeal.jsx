// import React from "react";



// const Appeal = () => {
//   return (
//     <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
//       {/* White Card Container */}
//       <div className="bg-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto shadow-md min-h-screen">
        
        

//         {/* First two paragraphs - full width */}
//         <div className="text-justify mb-6">
//           <p className="mb-4">
//             <strong>Conflict Victim and Disabled Society (CVDS) Nepal</strong> is
//             a non-profit organization committed to empowering individuals affected
//             by conflict and persons with disabilities across Nepal. Our mission is
//             to promote inclusion, equality, and social justice through
//             community-driven programs and sustainable development initiatives.
//           </p>

//           <p className="mb-4">
//             CVDS Nepal focuses on helping people rebuild their lives by providing
//             access to rehabilitation, education, healthcare, and livelihood
//             opportunities. We believe that every individual deserves dignity and
//             the chance to live an independent and meaningful life regardless of
//             their background or physical condition.
//           </p>
//         </div>

//         {/* Urgent Appeal Paragraph */}
//         <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-8 text-justify">
//           <p className="text-red-700 font-semibold">
//             Urgent Appeal: Thousands of conflict victims and persons with disabilities 
//             in Nepal are still struggling to access basic healthcare, education, and livelihood support. 
//             Your immediate support can make a life-changing difference. Please consider contributing today.
//           </p>
//         </div>

      
//         {/* Remaining content with image */}
//         <div className="flex flex-wrap md:flex-nowrap items-start gap-8">
//           {/* Text Section */}
//           <div className="w-full md:w-3/5 text-justify">
//             <p className="mb-4">
//               Since our establishment, we have worked hand in hand with local
//               communities, government agencies, and partner organizations to address
//               the needs of conflict victims and people with disabilities. Through
//               skill training, awareness campaigns, and advocacy, we strive to remove
//               social barriers and build a more inclusive society.
//             </p>

//             <p className="mb-4">
//               Our team is made up of passionate individuals who are deeply dedicated
//               to humanitarian values. We continue to expand our reach across rural
//               and urban areas of Nepal, bringing hope and opportunity to those who
//               need it most.
//             </p>

//             {/* Signature Section */}
//             <div className="border-t border-gray-300 pt-4 mt-8">
//               <p className="font-semibold">
//                 Conflict Victim and Disabled Society (CVDS) Nepal
//               </p>
//               <p className="text-sm">Kathmandu, Nepal</p>
//               <p className="text-sm">Email: cvdsnepal@yahoo.com</p>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-2/5 flex justify-end">
//             <img
//              src="/assets/images/projects/male.png"
//               alt="Appeal"
//               className="rounded-2xl w-36 sm:w-44 md:w-52 lg:w-60 object-cover"
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appeal;



import React from "react";
import { useNavigate } from "react-router-dom";

const Appeal = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      {/* White Card Container */}
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto shadow-md">

        {/* Introductory Section (Full-width Text, No Image) */}
        <div className="text-justify mb-12 space-y-4">
          <p>
            <strong>Conflict Victim and Disabled Society (CVDS) Nepal</strong> is a non-profit organization committed to empowering individuals affected by conflict and persons with disabilities across Nepal. Our mission is to promote inclusion, equality, and social justice through community-driven programs and sustainable development initiatives.
          </p>
          <p>
            CVDS Nepal focuses on helping people rebuild their lives by providing access to rehabilitation, education, healthcare, and livelihood opportunities. We believe that every individual deserves dignity and the chance to live an independent and meaningful life regardless of their background or physical condition.
          </p>
          <p>
            Since our establishment, we have worked hand in hand with local communities, government agencies, and partner organizations to address the needs of conflict victims and people with disabilities. Through skill training, awareness campaigns, and advocacy, we strive to remove social barriers and build a more inclusive society.
          </p>
          <p>
            Our team is made up of passionate individuals who are deeply dedicated to humanitarian values. We continue to expand our reach across rural and urban areas of Nepal, bringing hope and opportunity to those who need it most.
          </p>
        </div>

        {/* Chairman Message Section (Text Left, Image Right) */}
        <div className="flex flex-wrap md:flex-nowrap items-start gap-8 mb-12">
          {/* Text Section */}
          <div className="w-full md:w-3/5 text-justify space-y-4">
            <h3 className="text-xl font-bold">A Message from the Chairman</h3>
            <p>Dear Friends and Compassionate Supporters, Namaste!</p>
            <p>
              I am Yub Raj Thapa, founder and president of Conflict Victim and Disable Society-Nepal. Today, I write to you not just as the head of an organization, but as someone who has walked the difficult path that many of our beneficiaries still walk today.
            </p>
            <p>
              Years ago, I was paralyzed from the waist down, abandoned by hope, and nearly consumed by despair. I understand the pain of being denied dignity and the darkness when society turns its back on you because your body doesn't work like others'. Yet, I also know the transformative power of a helping hand extended at the right moment. These small acts of compassion changed my life, and today, through CVDS-Nepal, we extend that same hand to those who need it most.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <img
              src="/assets/images/projects/male.png"
              alt="Chairman"
              className="rounded-2xl w-full max-w-[260px] object-cover"
            />
          </div>
        </div>

        {/* Continue with Urgent Appeal and other sections as before */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-12 text-justify">
          <p className="text-red-700 font-semibold mb-4">
            Urgent Appeal: Thousands of conflict victims and persons with disabilities in Nepal are still struggling to access basic healthcare, education, and livelihood support. Your immediate support can make a life-changing difference. Please consider contributing today.
          </p>
          <p>
            Our facility is stretched beyond capacity. We have children sleeping on mats because we lack proper beds. We ration supplies because our resources are limited. We turn away desperate families because we simply cannot accommodate everyone who needs us.
          </p>
        </div>

        {/* Support & Mission Section */}
<div className="mb-12">
  <h3 className="text-2xl font-bold mb-6 text-gray-800">Together, We Can Make a Difference</h3>
  
  <p className="mb-4 text-gray-700">
    Every child, every individual, deserves the chance to thrive. With your support, we can extend hope and create lasting impact for those who need it most. Here’s how your contribution can help:
  </p>
  
  <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
    <li>Expand our facilities to accommodate more children and provide a safe, nurturing environment</li>
    <li>Recruit additional qualified staff to ensure personalized care and attention</li>
    <li>Provide state-of-the-art medical equipment and assistive devices for better healthcare</li>
    <li>Offer comprehensive vocational and skills training programs to foster independence</li>
    <li>Reach remote and underserved communities that rarely receive support</li>
  </ul>
  
  <p className="mb-4 text-gray-700">
    Your donation is more than financial support it’s a commitment to valuing every life, empowering individuals, and creating a society where disability does not limit potential.
  </p>

  <p className="font-semibold text-gray-800">
    Please contribute today. Whether it’s $10 or $10,000, every gift directly transforms lives and brings hope to those who need it most.
  </p>
</div>


     {/* How to Donate Section */}
<div className="mb-12">
  <h3 className="text-2xl font-bold mb-6 text-gray-800">How You Can Make an Impact</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Bank Transfer */}
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold mb-3 text-gray-800">Bank Transfer</h4>
      <p className="text-gray-700 mb-2">
        <strong>Account Name:</strong> Conflict Victim and Disable Society Nepal
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Account Number:</strong> 30107010011377
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Bank:</strong> Global IME Bank Ltd., Sankhu Branch, Kathmandu, Nepal
      </p>
      <p className="text-gray-700 mb-2">
        <strong>SWIFT Code:</strong> GLBBNPKA
      </p>
     
    </div>

    {/* Online Donation */}
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold mb-3 text-gray-800">Online Donation</h4>
      <p className="text-gray-700 mb-2">Support us via PayPal or other online payment methods.</p>
      <p className="text-gray-700">
        
      </p>
    </div>

    {/* Contact Directly */}
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold mb-3 text-gray-800">Contact Us Directly</h4>
      <p className="text-gray-700 mb-1"><strong>Name:</strong> Yub Raj Thapa, President, CVDS-Nepal</p>
      <p className="text-gray-700 mb-1"><strong>Email:</strong> cvdsnepal@yahoo.com</p>
      <p className="text-gray-700"><strong>Phone:</strong> +977-9851160868 </p>
    </div>

    {/* Visit Us */}
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold mb-3 text-gray-800">Visit Us</h4>
      <p className="text-gray-700">
        Shankharapur Municipality-6, Shalambutar, Shakhu, Kathmandu, Nepal
      </p>
    </div>
  </div>
</div>


        {/* Footer & Donate Now Button */}
        <div className="text-center mt-8">
          <p className="font-semibold">Conflict Victim and Disabled Society (CVDS) Nepal</p>
          <p>Kathmandu, Nepal</p>
 
          <button
            onClick={() => navigate("/donate")}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appeal;
