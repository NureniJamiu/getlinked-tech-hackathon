"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { registrationSchema } from "@/schema";

const onSubmit = async (values, actions) => {
  //   perform further submitting actions...
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        topic: "",
        category: "",
        size: "",
      },
      validationSchema: registrationSchema,
      onSubmit,
    });

  return (
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
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter the name of your group"
              className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                errors.name && touched.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && touched.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="text-left">
            <label className="text-xs font-semibold ">Phone</label>
            <input
              type="text"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your phone number"
              className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                errors.phone && touched.phone && "border-red-500"
              }`}
            />
            {errors.phone && touched.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
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
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="text-left">
            <label className="text-xs font-semibold ">Project Topic</label>
            <input
              type="text"
              id="topic"
              value={values.topic}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What is your project topic?"
              className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                errors.topic && touched.topic && "border-red-500"
              }`}
            />
            {errors.topic && touched.topic && (
              <p className="text-xs text-red-500">{errors.topic}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-64 md:w-full md:gap-3 mt-1">
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
              <option value="one" className="bg-zinc-800">
                option 1
              </option>
              <option value="two" className="bg-zinc-800">
                Option 2
              </option>
            </select>
            {errors.category && touched.category && (
              <p className="text-xs text-red-500">{errors.category}</p>
            )}
          </div>
          <div className="text-left">
            <label className="text-xs font-semibold ">Group size</label>
            <select
              name="size"
              id="size"
              value={values.size}
              onChange={handleChange}
              onBlur={handleBlur}
              className={` border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                errors.size && touched.size && "border-red-500"
              }`}
            >
              <option value="" className="bg-zinc-800">
                Select
              </option>
              <option value="small" className="bg-zinc-800">
                2-10
              </option>
              <option value="medium" className="bg-zinc-800">
                11-50
              </option>
            </select>
            {errors.size && touched.size && (
              <p className="text-xs text-red-500">{errors.size}</p>
            )}
          </div>
        </div>
        <div className="text-left w-64 md:w-full text-xs">
          <p className="text-[#FF26B9] italic  my-2">
            Please review your registration details before submitting
          </p>
          <div className="mb-3">
            <input type="checkbox" />
            <span className="ml-3">
              I agree with the event terms and condition and privacy policy
            </span>
          </div>
        </div>
        <Button className="btn-gradient rounded px-10 text-sm w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
