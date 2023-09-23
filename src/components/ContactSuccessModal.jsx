import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import congratulation from "../../public/congratulation.png";

const ContactSuccessModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="border border-[#D434FE] bg-[#150E28] bg-opacity-95 p-8 rounded shadow-md text-center">
        <div>
          <Image
            src={congratulation}
            alt="Congratulations"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Yippee!
          <br />
          Message sent successfully!
        </h2>
        <p className="text-gray-300 text-sm">
          We{"'"}ll get back to you via email shortly.
        </p>
        <p className="text-gray-300 text-sm">
          Keep an eye on your email to hear from us.
        </p>
        <Button
          className="mt-4 btn-gradient w-full rounded py-2 px-4"
          onClick={onClose}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default ContactSuccessModal;
