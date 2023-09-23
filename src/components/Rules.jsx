import Image from "next/image";
import React from "react";

import lady from "../../public/lady-sitting.png";
import whiteStar from "../../public/star-white.png";
import flare from "../../public/purple-flare.png";
import Subheader from "./Subheader";

const Rules = () => {
  return (
    <section
      className="relative text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Image
        src={flare}
        alt="flare"
        width={800}
        height={800}
        className="absolute -top-32 -left-24 md:-top-52 -z-20 md:left-0 opacity-50"
      />
      <Image
        src={flare}
        alt="flare"
        width={500}
        height={500}
        className="absolute bottom-20 -right-60 md:-bottom-52 -z-20 md:-right-80 opacity-50 overflow-hidden"
      />
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:16">
        <div className="md:flex-1 relative">
          <Image src={lady} alt="The Big Idea" width={500} height={500} />
          <Image
            src={whiteStar}
            width={12}
            height={12}
            alt="purple star"
            className="absolute top-32 left-0"
          />
          <div className="hidden md:block big-circle-gradient absolute w-32 h-32 top-20 right-20 -z-10 rounded-full"></div>
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader title="Rules and" subtitle="Guidelines" />
          <p className="my-5">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you{"'"}re a coding
            genius, a design maverick, or a concept wizard, you{"'"}ll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that{"'"}s what we{"'"}re all
            about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;
