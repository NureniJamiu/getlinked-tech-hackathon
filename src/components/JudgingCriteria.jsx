import React from "react";
import Image from "next/image";

import sectionImage from "../../public/boy-girl-illustration.png";
import flare from "../../public/purple-flare.png";
import grayStar from "../../public/star-gray.png";
import whiteStar from "../../public/star-white.png";
import purpleStar from "../../public/star-purple-light.png";
import Subheader from "./Subheader";
import { Button } from "./ui/button";

import { attributes } from "@/mockDB";

const JudgingCriteria = () => {
  return (
    <section
      className="relative text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 pt-8 pb-14 md:py-8 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image
        src={flare}
        alt="flare"
        width={500}
        height={500}
        className="absolute -bottom-24 -right-60 md:-bottom-52 -z-20 md:-right-80 opacity-50"
      />
      <Image
        src={flare}
        alt="flare"
        width={500}
        height={500}
        className="absolute top-12 -left-14  md:-bottom-2 -z-20 md:left-0 opacity-50"
      />
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:16">
        <div className="md:flex-1 relative">
          <Image
            src={sectionImage}
            alt="The Big Idea"
            width={500}
            height={500}
          />
          <Image
            src={purpleStar}
            width={15}
            height={15}
            alt="purple star"
            className="absolute top-0 left-44 md:-top-16 md:left-32 animate-pulse"
          />
          <Image
            src={grayStar}
            width={10}
            height={10}
            alt="purple star"
            className="absolute top-36 left-52 md:top-56 md:left-72 animate-ping"
          />

          <div className="hidden md:block big-circle-gradient absolute w-32 h-32 top-20 right-20 -z-10 rounded-full"></div>
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader title="Judging Criteria" subtitle="Key attributes" />
          {attributes.map((_, index) => (
            <p
              key={index}
              className="my-8"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span className="text-[#FF26B9] font-semibold">{_.title}: </span>
              {_.desc}
            </p>
          ))}

          <div className="w-64 mx-auto text-center relative">
            <Button
              className="btn-gradient rounded px-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Read More
            </Button>
            <Image
              src={grayStar}
              width={15}
              height={15}
              alt="purple star"
              className="absolute -top-8 -right-8 md:top-8 md:right-60 animate-ping"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
