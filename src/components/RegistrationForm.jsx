"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { registrationSchema } from "@/schema";
import axios from "axios";
import SuccessModal from "./SuccessModal";
import { onSubmit } from "@/helpers";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = "/hackathon/registration";
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        team_name: "",
        phone_number: "",
        email: "",
        project_topic: "",
        category: "",
        group_size: "",
        privacy_policy_accepted: false,
      },
      validationSchema: registrationSchema,
      onSubmit: (values, actions) =>
        onSubmit(values, actions, pathname, setIsLoading, setIsModalOpen),
    });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:w-[500px] h-auto md:h-[520px] rounded-lg shadow-lg md:bg-white md:bg-opacity-5 flex items-center justify-center px-12 pb-8 md:pb-0"
      >
        <div className="flex flex-col items-center px-8 md:px-0">
          <div className="text-left w-64 md:w-full mb-4">
            <h2 className=" hidden md:block font-clash text-xl text-[#D434FE]">
              Register
            </h2>
            <p className="text-base md:text-xs my-2">
              Be part of this movement............
            </p>
            <p className="text-xl md:text-base font-semibold">
              CREATE YOUR ACCOUNT
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="text-left">
              <label className="text-xs font-semibold ">Team{"'"}s Name</label>
              <input
                type="text"
                id="team_name"
                value={values.team_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter the name of your group"
                className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.team_name && touched.team_name && "border-red-500"
                }`}
              />
              {errors.team_name && touched.team_name && (
                <p className="text-xs text-red-500 italic italic">
                  {errors.team_name}
                </p>
              )}
            </div>
            <div className="text-left">
              <label className="text-xs font-semibold ">Phone</label>
              <input
                type="text"
                id="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your phone number"
                className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.phone_number &&
                  touched.phone_number &&
                  "border-red-500"
                }`}
              />
              {errors.phone_number && touched.phone_number && (
                <p className="text-xs text-red-500 italic">
                  {errors.phone_number}
                </p>
              )}
            </div>
            <div className="text-left">
              <label className="text-xs font-semibold ">Email</label>
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email address"
                className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.email && touched.email && "border-red-500"
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-xs text-red-500 italic">{errors.email}</p>
              )}
            </div>
            <div className="text-left">
              <label className="text-xs font-semibold ">Project Topic</label>
              <input
                type="text"
                id="project_topic"
                value={values.project_topic}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="What is your project topic?"
                className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.project_topic &&
                  touched.project_topic &&
                  "border-red-500"
                }`}
              />
              {errors.project_topic && touched.project_topic && (
                <p className="text-xs text-red-500 italic">
                  {errors.project_topic}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 px-5 md:px-0 md:w-full md:gap-3 mt-1">
            <div className="text-left">
              <label className="text-xs font-semibold ">Category</label>
              <select
                name="category"
                id="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.category && touched.category && "border-red-500"
                }`}
              >
                <option value="" className="bg-zinc-800">
                  Select your category
                </option>
                <option value="1" className="bg-zinc-800">
                  1
                </option>
                <option value="2" className="bg-zinc-800">
                  2
                </option>
              </select>
              {errors.category && touched.category && (
                <p className="text-xs text-red-500 italic">{errors.category}</p>
              )}
            </div>
            <div className="text-left">
              <label className="text-xs font-semibold ">Group size</label>
              <select
                name="group_size"
                id="group_size"
                value={values.group_size}
                onChange={handleChange}
                onBlur={handleBlur}
                className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.group_size && touched.group_size && "border-red-500"
                }`}
              >
                <option value="" className="bg-zinc-800">
                  Select
                </option>
                <option value="5" className="bg-zinc-800">
                  2 -5
                </option>
                <option value="20" className="bg-zinc-800">
                  10-20
                </option>
              </select>
              {errors.group_size && touched.group_size && (
                <p className="text-xs text-red-500 italic">
                  {errors.group_size}
                </p>
              )}
            </div>
          </div>
          <div className="text-left px-5 md:px-0 md:w-full text-xs">
            <p className="text-[#FF26B9] italic  my-2">
              Please review your registration details before submitting
            </p>
            <div className="mb-3">
              <input
                type="checkbox"
                id="privacy_policy_accepted"
                onChange={handleChange}
              />

              <span className="ml-3">
                I agree with the event terms and condition and privacy policy
              </span>
              {errors.privacy_policy_accepted && (
                <p className="text-xs text-red-500 italic">
                  {errors.privacy_policy_accepted}
                </p>
              )}
            </div>
            <Button
              className="btn-gradient rounded px-10 text-sm w-full"
              disabled={isLoading}
            >
              {!isLoading ? "Submit" : "Loading..."}
            </Button>
          </div>
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default RegistrationForm;
