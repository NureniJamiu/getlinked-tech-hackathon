import React from "react";

import sectionImage from "../../public/faq-guy.png";
import whiteStar from "../../public/star-white.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Subheader from "./Subheader";
import Image from "next/image";

const Faq = () => {
  return (
    <section className="lg:px-28 py-12">
      <div className="flex flex-col md:flex-row md:items-center gap-12">
        <div className="flex-1">
          <div>
            <Subheader
              title="Frequently asked"
              subtitle="Questions"
              animateDirection="right"
            />
            <p
              className="my-5"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <AccordionTrigger>
                Can I submit a project I started before the Hackathon?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <AccordionTrigger>
                What happens if I need help during the Hackathon?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <AccordionTrigger>
                What happens if I don{"'"}t have an idea for a project?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className="md:flex-1 relative"
          data-aos="fade-up-left"
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
      </div>
    </section>
  );
};

export default Faq;
