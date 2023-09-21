import React from "react";
import Image from "next/image";

import sectionImage from "../../public/boy-girl-illustration.png";
import whiteStar from "../../public/star-white.png";
import Subheader from "./Subheader";
import { Button } from "./ui/button";

const JudgingCriteria = () => {
  const attributes = [
    {
      title: "Innovation and Creativity",
      desc: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      title: "Functionality",
      desc: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      title: "Impact and Relevance",
      desc: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      title: "Technical Complexity",
      desc: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
  ];
  return (
    <section className="text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:16">
        <div
          className="md:flex-1 relative"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <Image
            src={sectionImage}
            alt="The Big Idea"
            width={500}
            height={500}
          />
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
          <Subheader
            title="Judging Criteria"
            subtitle="Key attributes"
            animateDirection="left"
          />
          {attributes.map((_, index) => (
            <p
              key={index}
              className="my-8"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <span className="text-[#FF26B9] font-semibold">{_.title}: </span>
              {_.desc}
            </p>
          ))}

          <Button
            className="btn-gradient rounded px-8"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
