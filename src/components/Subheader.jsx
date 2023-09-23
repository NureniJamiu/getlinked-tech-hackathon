import Image from "next/image";
import React from "react";

import purpleStar from "../../public/star-purple-light.png";

const Subheader = ({ title, subtitle, optional }) => {
  return (
    <>
      <div className="relative">
        <div className="font-clash text-2xl md:text-3xl">
          <h2 className="">{title}</h2>
          <span className="text-[#D434FE]">{subtitle}</span>
        </div>
        <Image
          src={purpleStar}
          width={12}
          height={12}
          alt="purple star"
          className=" absolute top-8 right-0 md:right-12 animate-pulse"
        />
      </div>
      <p className="md:my-8 text-sm text-gray-300">{optional}</p>
    </>
  );
};

export default Subheader;
