"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { contactUsSchema } from "@/schema";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ContactForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: contactUsSchema,
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit} className="w-72 ">
      <input
        type="text"
        id="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="First Name"
        className={`border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm mt-6 focus:outline-none ${
          errors.name && touched.name && "border-red-500"
        }`}
      />
      {errors.name && touched.name && (
        <p className="text-xs text-red-500 text-left">{errors.name}</p>
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
      <Button className="btn-gradient rounded px-10 text-sm mt-4">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
