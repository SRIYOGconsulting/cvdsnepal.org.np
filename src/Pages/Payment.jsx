import React from "react";
import { Phone, Mail } from "lucide-react";

import { appData } from "../constants";

const Payment = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-8 sm:py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ===== Left: Bank Details ===== */}
        <div className="text-gray-800 space-y-3 text-center lg:text-left  ">
          <img
            src="/assets/images/Qr/bank.png"
            alt="CVDS Nepal Logo"
            className="w-48 sm:w-60 mb-5 mx-auto lg:mx-0 "
          />

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Bank Account Details
          </h2>
          {/* Updated bank details below */}
          <p>
            <strong>Bank Name:</strong> Global IME Bank Ltd.
          </p>
          <p>
            <strong>Account Name:</strong> Conflict Victim and Disable Society
            Nepal
          </p>
          <p>
            <strong>Account Number:</strong> 30107010011377
          </p>
          <p>
            <strong>Branch:</strong> Sankhu Branch, Kathmandu, Nepal
          </p>
          <p>
            <strong>SWIFT CODE:</strong> GLBBNPKA
          </p>
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
        <div className="flex flex-col justify-center items-center border border-black rounded-3xl p-6 sm:p-8 w-full max-w-sm mx-auto shadow-sm">
          {/* Bank logo above QR */}
          <img
            src="/assets/images/Qr/bank.png"
            alt="CVDS Nepal Logo"
            className="w-48 sm:w-60 mb-4 object-contain"
          />

          <img
            src="/assets/images/Qr/qr.jpg"
            alt="Payment QR"
            className="w-48 sm:w-60 h-auto object-contain mb-6"
          />

          <div className="text-center text-black font-semibold space-y-2 text-sm sm:text-base">
            {/*  Updated bank info below */}
            <p className="text-lg sm:text-xl">
              Conflict Victim and Disable Society Nepal
            </p>
            <p>Account No: 30107010011377</p>
            <p>Branch: Sankhu Branch, Kathmandu</p>
            <p>Bank: Global IME Bank Ltd.</p>

            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:9779851160868">+977 9851160868</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@cvdsnepal.org.np">info@cvdsnepal.org.np</a>
              </div>
            </div>

            <a
              href="www.cvdsnepal.org.np"
              target="_blank"
              rel="noreferrer"
              className="text-black underline block pt-2 font-medium"
            >
              www.cvdsnepal.org.np
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
