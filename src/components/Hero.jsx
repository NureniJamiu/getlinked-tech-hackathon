import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import line from "../../public/line.png";
import heroImage from "../../public/hero.png";
import lamp from "../../public/hero-lamp.png";
import whiteStar from "../../public/star-white.png";
import grayStar from "../../public/star-gray.png";
import Star from "./Star";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-85px)] md:pl-28 border-b border-zinc-700 overflow-y-hidden">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:flex-1 text-center md:text-left">
          <div className="relative my-5 md:hidden">
            <span className="italic font-semibold ">
              Igniting a Revolution in HR Innovation
            </span>
            <Image
              src={line}
              alt="line"
              width={110}
              height={110}
              className="absolute -bottom-2 right-14"
            />
          </div>

          <div className="relative my-16 md:my-0">
            {/* add blur effect  */}

            <Star
              name={whiteStar}
              size={16}
              posOne="-top-10"
              posTwo="left-32"
            />
            <Star name={grayStar} size={8} posOne="-top-10" posTwo="right-14" />

            <div className="relative mt-14">
              <Image
                src={lamp}
                alt="idea lamp"
                width={25}
                height={25}
                className="md:hidden absolute -top-6 right-[85px]"
              />
              <Image
                src={lamp}
                alt="idea lamp"
                width={50}
                height={50}
                className="hidden md:block  absolute -top-12 right-60"
              />
              <span className="text-4xl font-clash md:text-5xl md:leading-tight">
                getlinked Tech Hackathon 1.0🔗💥
              </span>
            </div>
            <p className="my-3 w-80 mx-auto md:mx-0 md:w-[520px] md:text-xl ">
              Participate in getlinked tech hackathon 2023. Stand a chance to
              win a Big prize
            </p>

            {/* right-hand div  */}
            <div className="relative">
              <Button className="btn-gradient rounded px-12 py-6 my-6">
                Register
              </Button>
              <Star
                name={grayStar}
                size={8}
                posOne="top-10"
                posTwo="right-24"
              />
            </div>

            <p className="font-unica text-5xl mt-5 md:mt-10 md:text-6xl">
              00<span className="text-base">H</span> 00
              <span className="text-base">M</span> 00
              <span className="text-base">S</span>
            </p>
          </div>
        </div>
        <div className="relative md:flex-1">
          <div className="hidden md:block relative my-5 md:my-2 md:ml-4 ">
            <span className="italic font-semibold text-2xl">
              Igniting a Revolution in HR Innovation
            </span>
            <Image
              src={line}
              alt="line"
              width={180}
              height={180}
              className="absolute -bottom-4 right-24"
            />
          </div>
          <Image src={heroImage} alt="hackathon guy" full className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
