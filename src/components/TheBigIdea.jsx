import Image from "next/image";
import React from "react";

import sectionImage from "../../public/the-big-idea.png";
import curlyArrow from "../../public/curly-arrow.png";
import purpleStar from "../../public/star-purple-light.png";
import Subheader from "./Subheader";

const TheBigIdea = () => {
  return (
    <section className="text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-16">
        <div className="md:flex-1 relative">
          <Image
            src={sectionImage}
            alt="The Big Idea"
            width={500}
            height={500}
          />
          <Image
            src={purpleStar}
            width={12}
            height={12}
            alt="purple star"
            className="absolute top-32 left-0"
          />
          <Image
            src={curlyArrow}
            width={50}
            height={50}
            alt="curly arrow"
            className="absolute -bottom-10 left-40 md:left-[440px] md:-bottom-2"
          />
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader
            title="Introduction to getlinked"
            subtitle="techHackathon 1.0"
          />
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

export default TheBigIdea;
