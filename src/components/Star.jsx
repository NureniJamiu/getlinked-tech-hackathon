import Image from "next/image";
import React from "react";

const Star = ({ name, size, posOne, posTwo }) => {
  return (
    <Image
      src={name}
      alt={name}
      width={size}
      height={size}
      className={`absolute ${posOne} ${posTwo}`}
    />
  );
};

export default Star;
