import React from "react";
import sectionImage from "../../public/faq-guy.png";
import purpleStar from "../../public/star-purple-light.png";
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
    <section className="px-10 md:px-20 lg:px-28 py-12 border-b border-zinc-700 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12 text-center md:text-left">
        {/* Left Column */}
        <div className="flex-1">
          <div>
            <Subheader
              title="Frequently Asked"
              subtitle="Questions"
              animateDirection="right"
            />
            <p
              className="my-5 text-sm"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full text-xs">
              <AccordionItem
                value="item-1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <AccordionTrigger>
                  Can I submit a project I started before the Hackathon?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              {/* Other AccordionItems go here */}
            </Accordion>
          </div>
        </div>
        {/* Right Column */}
        <div
          className="md:flex-1 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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
            className="absolute top-0 left-44 md:left-64 animate-pulse"
          />
          <div className="hidden md:block big-circle-gradient absolute w-32 h-32 top-20 right-20 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
