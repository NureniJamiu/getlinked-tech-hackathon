"use client";

import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JudgingCriteria from "@/components/JudgingCriteria";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Policy from "@/components/Policy";
import Rewards from "@/components/Rewards";
import Rules from "@/components/Rules";
import TheBigIdea from "@/components/TheBigIdea";
import Timeline from "@/components/Timeline";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Hero />
      <TheBigIdea />
      <Rules />
      <JudgingCriteria />
      <Faq />
      {/* <Timeline /> */}
      <Rewards />
      <Partners />
      <Policy />
      <Footer />
    </div>
  );
}
