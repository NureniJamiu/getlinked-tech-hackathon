import React from "react";
import Subheader from "./Subheader";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";

import privacyImage from "../../public/privacy-policy.png";

const Policy = () => {
  return (
    <section className="px-10 md:px-20 lg:px-28 my-20 ">
      <div className="flex flex-col md:flex-row text-center md:text-left gap-16">
        {/* flex one  */}
        <div className="flex-1">
          <div>
            <Subheader
              title="Privacy Policy and"
              subtitle="Terms"
              animateDirection="left"
              optional="Last updated on September 12, 2023"
            />
            <p
              className="my-5 max-w-sm"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div
            className="text-sm md:text-base my-5 md:my-16 border border-[#D434FE] text-center  px-5 py-10 md:px-10 md:py-14"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="text-left font-semibold my-5">
              <h4 className=" text-[#D434FE]">Licensing policy</h4>
              <p className="italic mt-1">
                Here are terms of our Standard License:
              </p>
            </div>
            <div className="flex text-left items-start gap-3 my-3">
              <span className="bg-green-600 rounded-full p-1">
                <PlusIcon size={12} />
              </span>
              <span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </div>
            <div className="flex text-left items-start gap-3 my-3">
              <span className="bg-green-600 rounded-full p-1">
                <PlusIcon size={12} />
              </span>
              <span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </div>
            <Button className="btn-gradient rounded my-3 md:px-10">
              Read More
            </Button>
          </div>
        </div>

        {/* flex two  */}
        <div
          className=" flex-1"
          data-aos={`fade-up-left`}
          data-aos-duration="1500"
        >
          <Image src={privacyImage} alt="sponsors" width={800} height={600} />
        </div>
      </div>
    </section>
  );
};

export default Policy;
