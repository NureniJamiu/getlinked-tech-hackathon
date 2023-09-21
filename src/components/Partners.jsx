import React from "react";
import Image from "next/image";

import sponsors from "../../public/partners.png";

const Partners = () => {
  return (
    <section className=" px-10 md:px-20 lg:px-28 py-20 border-b border-zinc-700">
      <div
        className="md:w-[480px] text-center md:h-auto mx-auto"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="font-clash text-3xl">Partners and Sponsors</h2>
        <p className="my-5">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div
        className="relative h-44 md:h-64 lg:h-96 mt-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Image src={sponsors} alt="sponsors" fill />
      </div>
    </section>
  );
};

export default Partners;
