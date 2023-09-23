"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { contactUsSchema } from "@/schema";
import axios from "axios";
import { onSubmit } from "@/helpers";
import ContactSuccessModal from "./ContactSuccessModal";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = "/hackathon/contact-form";
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        email: "",
        message: "",
      },
      validationSchema: contactUsSchema,
      onSubmit: (values, actions) =>
        onSubmit(values, actions, pathname, setIsLoading, setIsModalOpen),
    });

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-72 ">
        <input
          type="text"
          id="first_name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="First Name"
          className={`border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm mt-6 focus:outline-none ${
            errors.first_name && touched.first_name && "border-red-500"
          }`}
        />
        {errors.first_name && touched.first_name && (
          <p className="text-xs text-red-500 text-left">{errors.first_name}</p>
        )}
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          className={`border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm mt-6 focus:outline-none ${
            errors.email && touched.email && "border-red-500"
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-xs text-red-500 text-left">{errors.email}</p>
        )}
        <textarea
          id="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={5}
          placeholder="Message"
          className={`border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm mt-6 focus:outline-none resize-none ${
            errors.message && touched.message && "border-red-500"
          }`}
        />
        {errors.message && touched.message && (
          <p className="text-xs text-red-500 text-left">{errors.message}</p>
        )}
        <Button
          className="btn-gradient rounded px-10 text-sm mt-4"
          disabled={isLoading}
        >
          {!isLoading ? "Submit" : "Loading..."}
        </Button>
      </form>
      <ContactSuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ContactForm;
