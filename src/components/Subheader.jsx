import Image from "next/image";
import React from "react";

import purpleStar from "../../public/star-purple-light.png";

const Subheader = ({ title, subtitle, animateDirection }) => {
  return (
    <h2
      className="relative font-clash text-2xl md:text-3xl"
      data-aos={`fade-down-${animateDirection}`}
      data-aos-duration="1500"
    >
      {title} <br />
      <span className="text-[#D434FE]">{subtitle}</span>
      <Image
        src={purpleStar}
        width={12}
        height={12}
        alt="purple star"
        className="hidden md:block absolute top-8 right-12"
      />
    </h2>
  );
};

export default Subheader;
