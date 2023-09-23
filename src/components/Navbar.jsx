"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import menu from "../../public/Vector.png";
import flare from "../../public/purple-flare.png";

const Navbar = ({ className }) => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { title: "Timeline", url: "#" },
    { title: "Overview", url: "#" },
    { title: "FAQs", url: "#" },
    { title: "Contact", url: "/contact" },
  ];

  const handleToggle = () => setToggle(!toggle);
  return (
    <nav
      className={`relative px-10 md:px-20 lg:px-28 py-5 md:py-3 border-b border-zinc-700 mx-auto ${className}`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Image
        src={flare}
        alt="flare"
        width={600}
        height={600}
        className="absolute -top-12 -left-28 lg:-top-24 lg:left-12 opacity-50"
      />
      <div className="flex items-center justify-between">
        <Link href="/" className=" font-clash text-xl md:text-2xl">
          get<span className=" text-[#D434FE] ">linked</span>
        </Link>

        <div className="flex items-center justify-between md:gap-12 lg:gap-20">
          <div className="hidden lg:flex gap-8">
            {links.map((_, index) => (
              <Link key={index} href={_.url} className="text-sm">
                {_.title}
              </Link>
            ))}
          </div>

          <div>
            <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
              <Image src={menu} alt="menu icon" width={20} height={20} />
            </div>

            <Link href="/register">
              <Button className="hidden lg:flex btn-gradient rounded px-10 text-sm">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile navItems fold */}
      {toggle && (
        <div
          className="md:hidden fixed w-full h-screen top-0 left-0 bg-[#150E28] px-10 py-3 z-50 "
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          // data-aos-duration="1000"
        >
          {/* close menu icon */}
          <div
            className="float-right bg-gradient-to-b from-purple-500 to-pink-500 rounded-full p-[2px] cursor-pointer"
            onClick={handleToggle}
          >
            <div className="bg-[#150E28] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {/* end close menu icon */}
          <div className="mt-16 flex flex-col gap-8">
            {links.map((_, index) => (
              <Link
                key={index}
                href={_.url}
                className=""
                data-aos="fade-right"
                data-aos-duration={`1${index + 1}00`}
              >
                {_.title}
              </Link>
            ))}

            <Link href="/register">
              <Button
                className="w-32 btn-gradient rounded"
                data-aos="fade-right"
                data-aos-duration="1600"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
