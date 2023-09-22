import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";
import React from "react";

import sectionImage from "../../../public/register.png";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main className="flex items-center justify-center px-12 md:px-22 lg:px-44 h-[calc(100vh-66px)]">
      <div className="flex flex-col  md:flex-row md:items-center gap-8">
        {/* flex one */}
        <div
          className="relative w-[500px] h-[500px] flex-1"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Image src={sectionImage} alt="Register" fill />
        </div>
        {/* flex two  */}
        <div
          className="flex-1 text-center"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="w-[500px] h-[520px] rounded-lg shadow-lg bg-white bg-opacity-5 flex items-center justify-center px-12">
            <div className="flex flex-col items-center">
              <div className="text-left w-full mb-4">
                <h2 className=" font-clash text-xl text-[#D434FE]">Register</h2>
                <p className="text-xs my-2">
                  Be part of this movement............
                </p>
                <p>CREATE YOUR ACCOUNT</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-left">
                  <label className="text-xs font-semibold ">
                    Team{"'"}s Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className=" border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2"
                  />
                </div>
                <div className="text-left">
                  <label className="text-xs font-semibold ">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className=" border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2"
                  />
                </div>
                <div className="text-left my-1">
                  <label className="text-xs font-semibold ">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className=" border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2"
                  />
                </div>
                <div className="text-left my-1">
                  <label className="text-xs font-semibold ">
                    Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="What is your project topic?"
                    className=" border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2"
                  />
                </div>
                <div className="text-left">
                  <label className="text-xs font-semibold ">Category</label>
                  <select
                    name="category"
                    className=" border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2"
                  >
                    <option value="" className="bg-zinc-800">
                      Select your category
                    </option>
                    <option value="one" className="bg-zinc-800">
                      option 1
                    </option>
                    <option value="two" className="bg-zinc-800">
                      Option 2
                    </option>
                  </select>
                </div>
                <div className="text-left">
                  <label className="text-xs font-semibold ">Group size</label>
                  <select
                    name="category"
                    className=" border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2"
                  >
                    <option value="" className="bg-zinc-800">
                      Select
                    </option>
                    <option value="one" className="bg-zinc-800">
                      2-10
                    </option>
                    <option value="two" className="bg-zinc-800">
                      11-50
                    </option>
                  </select>
                </div>
              </div>
              <div className="text-left">
                <p className="text-[#FF26B9] italic text-xs my-2">
                  Please review your registration details before submitting
                </p>
                <div className="text-sm mb-3">
                  <input type="checkbox" />
                  <span className="ml-3">
                    I agree with the event terms and condition and privacy
                    policy
                  </span>
                </div>
              </div>
              <Button className="btn-gradient rounded px-10 text-sm w-full">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
