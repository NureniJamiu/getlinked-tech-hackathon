import React from "react";
import Navbar from "@/components/Navbar";
import flare from "../../../public/purple-flare.png";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar className="hidden md:block" />
      <main className="relative flex items-center justify-center px-12 md:px-22 lg:px-44 md:h-[calc(100vh-66px)] overflow-hidden">
        <Image
          src={flare}
          alt="flare"
          width={700}
          height={700}
          className="absolute bottom-44 right-24 md:-bottom-52 -z-20 md:-right-64 opacity-50"
        />
        <div className="flex flex-col  md:flex-row md:items-center gap-72">
          {/* flex one */}
          <div
            className="hidden md:block flex-1 "
            data-aos="fade-right"
            data-aos-duration="1500"
          >
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
              <FaInstagram size={20} />
              <RiTwitterXFill size={20} />
              <FaFacebookF size={20} />
              <FaLinkedinIn size={20} />
            </div>
          </div>
          {/* flex two  */}
          <div
            className="flex-1 text-center"
            // data-aos="fade-left"
            // data-aos-duration="1500"
          >
            <div className="w-[450px] h-auto py-10 rounded-lg md:shadow-lg md:bg-white md:bg-opacity-5 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Link
                  href="/"
                  className="md:hidden self-start bg-gradient-to-b from-purple-500 to-pink-500 rounded-full p-[2px] cursor-pointer"
                  // onClick={goBack}
                >
                  <div className=" bg-[#150E28] rounded-full p-1">
                    <MdKeyboardArrowLeft size={18} />
                  </div>
                </Link>
                <h2 className="text-left font-clash text-lg text-[#D434FE] mt-8 md:mt-0">
                  Questions or need assistance? <br /> Let{"'"}s talk about it
                </h2>
                <p className="md:hidden text-sm w-[280px] text-left mt-3">
                  Email us below to any question related to our event
                </p>
                <ContactForm />
                <div className="md:hidden mt-8">
                  <span className="text-[#D434FE]">Share on</span>
                  <div className="flex items-center mt-2 gap-2">
                    <Link href="https://instagram.com">
                      <FaInstagram size={20} />
                    </Link>
                    <Link href="https://x.com">
                      <RiTwitterXFill size={20} />
                    </Link>
                    <Link href="https://facebook.com">
                      <FaFacebookF size={20} />
                    </Link>
                    <Link href="https://linkedin.com">
                      <FaLinkedinIn size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
