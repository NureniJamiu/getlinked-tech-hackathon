import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="flex items-center justify-center px-12 md:px-22 lg:px-44 h-[calc(100vh-66px)]">
      <div className="flex flex-col  md:flex-row md:items-center gap-72">
        {/* flex one */}
        <div className="flex-1">
          <h2 className="text-2xl font-clash text-[#D434FE]">Get in touch</h2>
          <div className="flex flex-col gap-5 my-5">
            <p className="w-32">Contact Information</p>
            <p className="w-32">27,Alara Street Yaba 100012 Lagos State</p>
            <p className="w-64">Call Us : 07067981819</p>
            <p className="w-64">
              We are open from Monday-Friday 08:00am - 05:00pm
            </p>
          </div>
          <span className="text-[#D434FE]">Share on</span>
          <div className="flex items-center mt-2 gap-2">
            <Instagram size={20} />
            <X size={20} />
            <Facebook size={20} />
            <Linkedin size={20} />
          </div>
        </div>
        {/* flex two  */}
        <div className="flex-1 text-center">
          <div className="w-[450px] h-[450px] rounded-lg shadow-lg bg-white bg-opacity-5 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <h2 className="text-left font-clash text-lg text-[#D434FE]">
                Questions or need assistance? <br /> Let{"'"}s talk about it
              </h2>
              <div className="w-72 ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm mt-6 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm mt-6 focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="border border-[#fff] bg-inherit py-2 px-5 rounded w-full text-sm mt-6 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
