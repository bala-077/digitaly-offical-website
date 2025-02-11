import  { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import contact_page from "../images/contact-page.png";
import FooterSection from "./FooterSection";

const ConnectionForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
    <div className="min-h-screen bg-slate-800 flex items-center justify-center px-5 py-20 lg:px-20">
      <div className="max-w-screen-xl shadow-lg sm:rounded-lg flex flex-col md:flex-row w-full">
        {/* Left Section with Image */}
        <div className="hidden md:flex flex-col flex-1 bg-slate-900 items-center justify-center p-8">
          <img
            src={contact_page}
            alt="contact-page"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section with Content and Form */}
        <div className="flex-1 bg-slate-900 p-5 sm:p-8 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-green-500 mb-2">
              Digitaly
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Enter your details to contact us
            </p>
          </div>
          <div className="w-full mt-8">
            <div className="mx-auto max-w-md flex flex-col gap-6">
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-200 placeholder-gray-100 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-200 placeholder-gray-100 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                type="email"
                placeholder="Enter your email"
              />

              {/* Phone Input with Slate Background and White Text */}
              <div className="w-full">
                <PhoneInput
                  country={"in"} // Default country (India)
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "100%",
                    height: "45px",
                    fontSize: "16px",
                    backgroundColor: "#1E293B", // Slate-800
                    color: "white",
                    border: "1px solid #4B5563", // Slate-600
                    borderRadius: "8px",
                    paddingLeft: "50px",
                  }}
                  buttonStyle={{
                    backgroundColor: "#334155", // Slate-700
                    borderRadius: "8px 0 0 8px",
                  }}
                  dropdownStyle={{
                    backgroundColor: "#1E293B", // Slate-800
                    color: "white",
                    
                  }}
                  containerStyle={{ width: "100%" }}
                />
              </div>

              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-200 placeholder-gray-100 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your queries"
              />
              <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-white w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-indigo-700 focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
    </>
  );
};

export default ConnectionForm;
