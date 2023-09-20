import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { title: "Timeline", url: "#" },
    { title: "Overview", url: "#" },
    { title: "FAQs", url: "#" },
    { title: "Contact", url: "#" },
  ];
  return (
    <nav className="px-10 md:px-20 lg:px-36 py-5 border-b border-zinc-700 mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/" className=" font-clash text-xl md:text-2xl">
          get<span className=" text-purple-600 ">linked</span>
        </Link>

        <div className="flex items-center justify-between md:gap-12 lg:gap-36">
          <div className="hidden md:flex gap-8">
            {links.map((_, index) => (
              <Link
                key={index}
                href={_.url}
                // className="gradient-text gradient-text-hover"
              >
                {_.title}
              </Link>
            ))}
          </div>

          {/* remember to change icon  */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:hidden w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <Button className="hidden md:flex btn-gradient rounded px-10">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
