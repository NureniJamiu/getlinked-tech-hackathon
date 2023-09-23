import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import congratulation from "../../public/congratulation.png";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50   ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="border border-[#D434FE] bg-[#150E28] bg-opacity-95 p-8 rounded shadow-md">
        <div>
          <Image
            src={congratulation}
            alt="Congratulations"
            weight={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Congratulations, <br />
          You have successfully registered!
        </h2>
        <p className="text-gray-300 text-sm">
          Yes, it was easy and you did it!.
        </p>
        <p className="text-gray-300 text-sm">
          Check your mailbox for the next step.
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

export default SuccessModal;
