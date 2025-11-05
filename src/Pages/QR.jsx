import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Globe,
  MapPin,
  LogIn,
  Heart,
  QrCode,
} from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Payment QR",
    icon: <QrCode className="w-10 h-10 text-indigo-600" />,
    image: "/assets/images/Qr/payment.jpg",
    link: "#payment",
    description: "Scan to pay or support CVDS Nepal directly.",
  },
  {
    id: 2,
    title: "Facebook",
    icon: <Facebook className="w-10 h-10 text-blue-600" />,
    image: "/assets/images/Qr/facebook.jpg",
    link: "https://www.facebook.com/cvdsnepal",
    description: "Follow our latest updates and community events.",
  },
  {
    id: 3,
    title: "Donate Locally",
    icon: <Heart className="w-10 h-10 text-green-600" />,
    image: "/assets/images/Qr/local.jpg",
    link: "tel:+9779852024365",
    description: "Support local projects and initiatives in Nepal.",
  },
  {
    id: 4,
    title: "Donate International",
    icon: <Globe className="w-10 h-10 text-purple-600" />,
    image:"/assets/images/Qr/international.jpg",
    link: "mailto:info@cvdsnepal.com",
    description: "Partner with us globally to create impact.",
  },
  {
    id: 5,
    title: "Dashboard Login",
    icon: <LogIn className="w-10 h-10 text-emerald-600" />,
    image: "/assets/images/Qr/dashboard.jpg",
    link: "https://dashboard.cvdsnepal.com",
    description: "Access internal dashboard and reports securely.",
  },
  {
    id: 6,
    title: "Map",
    icon: <MapPin className="w-10 h-10 text-red-600" />,
    image: "/assets/images/Qr/map.jpg",
    link: "https://www.google.com/maps/place/CVDS+Nepal/",
    description: "Find our main office location on Google Maps.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const QR = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          CVDS Nepal
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering communities through technology, education, and support.  
          Explore our key resources below.
        </p>
      </motion.div>

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center justify-between bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-96 h-[28rem] mx-auto"
          >
            <div className="pt-8 flex flex-col items-center">
              
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-64 h-64 object-contain mb-4 rounded-md shadow-sm"
                />
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm px-4">{card.description}</p>
            </div>
            <div className="pb-10">{card.icon}</div>
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 text-center text-gray-800"
      >
        <div className="flex justify-center gap-4 items-center mb-2 flex-wrap">
          <Phone className="w-5 h-5" />
          <a href="tel:9779851160868">+977 9851160868</a>
          <Mail className="w-5 h-5" />
          <a href="mailto:info@cvdsnepal.org.np">info@cvdsnepal.org.np</a>
        </div>
        <a
          href="https://www.cvdsnepal.com"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 underline font-medium hover:text-indigo-700 transition"
        >
          www.cvdsnepal.org.np
        </a>
      </motion.footer>
    </section>
  );
};

export default QR;
