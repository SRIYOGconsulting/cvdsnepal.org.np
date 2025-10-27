import React from "react";
import { Phone, Mail } from "lucide-react";  
import bankLogo from "../assets/bank.jpg";    
import qrImage from "../assets/qr.jpg";  
import { appData } from "../constants";

const Payment = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ===== Left: Bank Details ===== */}
        <div className="text-gray-800 space-y-3">
          <img src={bankLogo} alt="CVDS Nepal Logo" className="w-44 mb-5" />

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Bank Account Details
          </h2>

          <p><strong>Bank Name:</strong> CVDS Nepal</p>
          <p><strong>Account Name:</strong> {appData.organizationName}</p>
          <p><strong>Account Number:</strong> Account Number</p>
          <p><strong>Branch:</strong> Kathmandu</p>
          <p><strong>SWIFT CODE:</strong> SwiftCode</p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-black underline"
            >
              www.cvdsnepal.com
            </a>
          </p>

          <p className="pt-8 text-2xl text-gray-900">
            <strong>PAN Number:</strong> *********
          </p>
        </div>

        {/* ===== Right: QR Code Section ===== */}
        <div className="flex flex-col justify-center items-center border border-black rounded-3xl p-8 h-[600px] w-[340px] mx-auto shadow-sm">
          
          {/* Bank logo above QR */}
          <img src={bankLogo} alt="CVDS Nepal Logo" className="w-32 mb-4" />

          <img
            src={qrImage}
            alt="Payment QR"
            className="w-60 h-60 object-contain mb-6"
          />

          <div className="text-center text-black font-semibold space-y-2">
            <p className="text-lg">CVDS Nepal</p>
            <p>Account No: Account Number</p>
            <p>Branch: Kathmandu</p>
            <p>Bank: CVDS Nepal</p>

            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:9779851160868">+977 9851160868</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@cvdsnepal.com">info@cvdsnepal.com</a>
              </div>
            </div>

            <a
              href="www.cvdsnepal.org.np"
              target="_blank"
              rel="noreferrer"
              className="text-black underline block pt-2 font-medium"
            >
              www.cvdsnepal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
