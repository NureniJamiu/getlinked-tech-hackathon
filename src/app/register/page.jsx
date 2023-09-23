import React from "react";
import Image from "next/image";

import flare from "../../../public/purple-flare.png";
import sectionImage from "../../../public/register.png";
import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";

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
          className="absolute top-44 right-24 md:-bottom-52 -z-20 md:-right-64 opacity-50"
        />
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-8">
          {/* flex one */}
          <div
            className="md:relative w-[500px] h-[500px] px-12 pt-5 md:px-0 md:pt-0 flex-1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="ml-14 md:ml-0 md:hidden font-clash text-xl text-[#D434FE]">
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
            <RegistrationForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
