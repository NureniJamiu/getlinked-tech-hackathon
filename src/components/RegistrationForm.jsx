"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { registrationSchema } from "@/schema";
import SuccessModal from "./SuccessModal";
import { onSubmit } from "@/helpers";
import { Button } from "./ui/button";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = "/hackathon/registration";

  const initialValues = {
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: "",
    privacy_policy_accepted: false,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registrationSchema,
      onSubmit: (values, actions) =>
        onSubmit(values, actions, pathname, setIsLoading, setIsModalOpen),
    });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fieldsDetails = [
    {
      label: "Team's Name",
      id: "team_name",
      value: values.team_name,
      error: errors.team_name,
      touched: touched.team_name,
    },
    {
      label: "Phone",
      id: "phone_number",
      value: values.phone_number,
      error: errors.phone_number,
      touched: touched.phone_number,
    },
    {
      label: "Email",
      id: "email",
      value: values.email,
      error: errors.email,
      touched: touched.email,
    },
    {
      label: "Project Topic",
      id: "project_topic",
      value: values.project_topic,
      error: errors.project_topic,
      touched: touched.project_topic,
    },
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:w-[500px] h-auto md:h-[520px] rounded-lg shadow-lg md:bg-white md:bg-opacity-5 flex items-center justify-center px-12 pb-8 md:pb-0"
      >
        <div className="flex flex-col items-center px-8 md:px-0">
          <div className="text-left w-64 md:w-full mb-4">
            <h2 className="hidden md:block font-clash text-xl text-[#D434FE]">
              Register
            </h2>
            <p className="text-base md:text-xs my-2">
              Be part of this movement{" "}
              <span className="text-[#D434FE]">............</span>
            </p>
            <p className="text-xl md:text-base font-semibold">
              CREATE YOUR ACCOUNT
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {fieldsDetails.map((field) => (
              <div key={field.id} className="text-left">
                <label className="text-xs font-semibold">{field.label}</label>
                <input
                  type="text"
                  id={field.id}
                  value={field.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className={`border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                    field.error && field.touched && "border-red-500"
                  }`}
                />
                {field.error && field.touched && (
                  <p className="text-xs text-red-500 italic">{field.error}</p>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 px-5 md:px-0 md:w-full md:gap-3 mt-1">
            <div className="text-left">
              <label className="text-xs font-semibold">Category</label>
              <select
                name="category"
                id="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
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
              <label className="text-xs font-semibold">Group size</label>
              <select
                name="group_size"
                id="group_size"
                value={values.group_size}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-[#fff] bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.group_size && touched.group_size && "border-red-500"
                }`}
              >
                <option value="" className="bg-zinc-800">
                  Select
                </option>
                <option value="5" className="bg-zinc-800">
                  2 - 5
                </option>
                <option value="20" className="bg-zinc-800">
                  10 - 20
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
            <p className="text-[#FF26B9] italic my-2">
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
