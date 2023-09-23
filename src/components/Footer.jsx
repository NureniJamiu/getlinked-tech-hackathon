import Link from "next/link";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  PhoneCall,
  X,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-[#100B20] h-auto px-10 md:px-20 lg:px-28 py-12 min-h-[180px] text-sm"
      data-aos={`fade-up`}
      data-aos-duration="1500"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* flex one */}
        <div className="flex-1">
          <Link href="/" className=" font-clash text-xl md:text-2xl">
            get<span className=" text-[#D434FE] ">linked</span>
          </Link>
          <p className="mt-3 mb-16">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <p>
            Terms of use <span className="text-[#D434FE] font-bold">|</span>{" "}
            Privacy Policy
          </p>
        </div>
        {/* flex two  */}
        <div className="flex-1 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h5 className="text-[#D434FE] font-semibold mb-3">Useful Links</h5>
            <ul className="flex flex-col  gap-3">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-[#D434FE]">Follow us</span>
              <div className="flex items-center gap-2">
                <Instagram size={20} />
                <X size={20} />
                <Facebook size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="text-[#D434FE] font-semibold mb-3">Contact Us</h5>
            <div className="mt-3 flex items-center gap-3">
              <PhoneCall size={20} />
              <span>+234 916000000</span>
            </div>
            <div className="mt-3 flex items-start gap-3">
              <MapPin size={30} />
              <p className="w-32"> 27, Alara Street Yaba 100012, Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-16 text-center">All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
