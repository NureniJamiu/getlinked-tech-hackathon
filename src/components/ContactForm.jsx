"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { contactUsSchema } from "@/schema";
import { onSubmit } from "@/helpers";
import ContactSuccessModal from "./ContactSuccessModal";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = "/hackathon/contact-form";

  const initialValues = {
    first_name: "",
    email: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactUsSchema,
      onSubmit: (values, actions) =>
        onSubmit(values, actions, pathname, setIsLoading, setIsModalOpen),
    });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-72">
        {["first_name", "email"].map((fieldName) => (
          <div key={fieldName} className="mt-6">
            <input
              type={fieldName === "email" ? "email" : "text"}
              id={fieldName}
              value={values[fieldName]}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={
                fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
              }
              className={`border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm focus:outline-none ${
                errors[fieldName] && touched[fieldName] ? "border-red-500" : ""
              }`}
            />
            {errors[fieldName] && touched[fieldName] && (
              <p className="text-xs text-red-500 text-left">
                {errors[fieldName]}
              </p>
            )}
          </div>
        ))}
        <div className="mt-6">
          <textarea
            id="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            placeholder="Message"
            className={`border border-[#fff] bg-inherit py-2 px-5 w-full rounded text-sm resize-none focus:outline-none ${
              errors.message && touched.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && touched.message && (
            <p className="text-xs text-red-500 text-left">{errors.message}</p>
          )}
        </div>
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
