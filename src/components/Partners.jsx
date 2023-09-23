import React from "react";
import Image from "next/image";

import sponsors from "../../public/partners.png";
import flare from "../../public/purple-flare.png";

const Partners = () => {
  return (
    <section className="relative px-10 md:px-20 lg:px-28 py-20 border-b border-zinc-700 overflow-hidden">
      <Image
        src={flare}
        alt="flare"
        width={800}
        height={800}
        className="absolute md:bottom-0 -top-12 -z-50 -left-28 opacity-50"
      />
      <Image
        src={flare}
        alt="flare"
        width={600}
        height={600}
        className="absolute -bottom-44 -z-20 -right-80 opacity-50"
      />
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
