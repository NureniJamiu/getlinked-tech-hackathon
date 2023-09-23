import Image from "next/image";
import React from "react";

import purpleStar from "../../public/star-purple-light.png";

const Subheader = ({ title, subtitle, optional }) => {
  return (
    <>
      <div className="relative">
        <h2 className="font-clash text-2xl md:text-3xl">
          {title} <br />
          <span className="text-[#D434FE]">{subtitle}</span>
        </h2>
        <Image
          src={purpleStar}
          width={12}
          height={12}
          alt="purple star"
          className=" absolute top-8 right-0 md:right-12"
        />
      </div>
      <p className="md:my-8 text-sm text-gray-300">{optional}</p>
    </>
  );
};

export default Subheader;
