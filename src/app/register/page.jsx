import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";
import React from "react";

import sectionImage from "../../../public/register.png";
import { Button } from "@/components/ui/button";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar className="hidden md:block" />
      <main className="flex items-center justify-center px-12 md:px-22 lg:px-44 md:h-[calc(100vh-66px)] overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-8">
          {/* flex one */}
          <div
            className="md:relative w-[500px] h-[500px] px-12 pt-5 md:px-0 md:pt-0 flex-1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="md:hidden font-clash text-xl text-[#D434FE]">
              Register
            </h2>
            <Image
              src={sectionImage}
              alt="Register"
              fill
              className="hidden md:block"
            />
            <Image
              src={sectionImage}
              alt="Register"
              width={400}
              height={400}
              className="md:hidden mx-auto"
            />
          </div>
          {/* flex two  */}
          <div
            className="flex-1 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Form />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
