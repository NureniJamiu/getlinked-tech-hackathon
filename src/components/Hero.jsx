"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import line from "../../public/line.png";
import heroImage from "../../public/hero.png";
import lamp from "../../public/hero-lamp.png";
import whiteStar from "../../public/star-white.png";
import grayStar from "../../public/star-gray.png";
import flare from "../../public/purple-flare.png";
import Star from "./Star";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  const seconds = timeLeft % 60;
  return (
    <section
      className="relative border-b border-zinc-700 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col lg:flex-row md:items-center">
        <Image
          src={flare}
          alt="flare"
          width={500}
          height={500}
          className="hidden absolute lg:-top-8 lg:-right-8 opacity-50"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        {/* flex one  */}
        <div className="flex-1 w-full text-center md:text-left lg:pl-28">
          <div className="relative my-5 lg:hidden w-80 md:w-[400px] mx-auto">
            <span className="italic font-semibold md:text-xl">
              Igniting a Revolution in HR Innovation
            </span>

            <Image
              src={line}
              alt="line"
              width={110}
              height={110}
              className="absolute -bottom-2 right-0"
            />
          </div>

          <div className="relative my-16 md:my-0">
            <Star name={grayStar} size={8} posOne="-top-10" posTwo="right-14" />
            <div className="relative mt-14">
              <div className="relative text-3xl font-clash md:text-5xl text-center lg:text-left md:leading-tight w-[350px] lg:mx-0 md:w-[500px] mx-auto">
                <span>
                  getlinked Tech Hackathon{" "}
                  <span className="text-[#D434FE]">1.0</span>🔗💥
                </span>
                <Image
                  src={lamp}
                  alt="idea lamp"
                  width={25}
                  height={25}
                  className="lg:hidden absolute -top-6 right-[85px]"
                />
                <Image
                  src={lamp}
                  alt="idea lamp"
                  width={50}
                  height={50}
                  className="hidden lg:block  absolute -top-12 right-36"
                />
                <Star
                  name={whiteStar}
                  size={16}
                  posOne="-top-10"
                  posTwo="left-20"
                />
              </div>
            </div>
            <p className="relative my-3 text-center w-80 mx-auto lg:text-left lg:mx-0 md:w-[520px] md:text-xl lg:w-[500px]">
              Participate in getlinked tech hackathon 2023. Stand a chance to
              win a Big prize
            </p>

            <div className="relative text-center w-60 mx-auto lg:mx-0 lg:text-left">
              <Button className="btn-gradient rounded px-12 py-6 my-6 md:w-44">
                Register
              </Button>
              <Star name={grayStar} size={8} posOne="top-10" posTwo="right-0" />
            </div>

            <div className="font-unica text-5xl mt-5 md:mt-10 lg:mx-0 text-center md:text-6xl w-72 lg:text-left mx-auto">
              <span>
                {String(hours).padStart(2, "0")}
                <span className="text-base">H</span>
              </span>
              <span className="mx-3">
                {String(minutes).padStart(2, "0")}
                <span className="text-base">M</span>
              </span>
              <span>
                {String(seconds).padStart(2, "0")}
                <span className="text-base">S</span>
              </span>
            </div>
          </div>
        </div>

        {/* flex two  */}
        <div className="relative lg:flex-1">
          <div className="hidden lg:block my-5 md:my-2 w-[500px] mx-auto">
            <div className="relative italic font-semibold md:text-lg lg:text-2xl text-center">
              <span>Igniting a Revolution in HR Innovation</span>
              <Image
                src={line}
                alt="line"
                width={180}
                height={180}
                className="absolute -bottom-4 right-2"
              />
            </div>
          </div>
          <Image src={heroImage} alt="hackathon guy" width={800} height={800} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
