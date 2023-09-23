import React from "react";
import Subheader from "./Subheader";
import Image from "next/image";

import goldenCup from "../../public/golden-cup.png";
import awards from "../../public/awards.png";
import flare from "../../public/purple-flare.png";

const Rewards = () => {
  return (
    <section
      className="relative px-10 md:px-20 lg:px-28 py-12 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image
        src={flare}
        alt="flare"
        width={500}
        height={500}
        className="absolute top-12 -left-12 m d:-bottom-2 -z-20 md:left-0 opacity-50"
      />
      <Image
        src={flare}
        alt="flare"
        width={500}
        height={500}
        className="absolute -bottom-32 md:-bottom-44 -z-20 -right-80 opacity-50"
      />
      <div className="flex flex-col md:flex-row-reverse md:items-center text-center md:text-left gap-16">
        <div className="md:flex-1">
          <div>
            <Subheader title="Prizes and" subtitle="Rewards" />
            <p className="my-5 max-w-sm">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div>
            <Image
              src={goldenCup}
              alt="award cup"
              width={300}
              height={300}
              className="md:hidden my-12"
            />
            <Image src={awards} alt="award cup" width={500} height={500} />
          </div>
        </div>

        <div className="hidden md:flex flex-1">
          <Image src={goldenCup} alt="award cup" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Rewards;
