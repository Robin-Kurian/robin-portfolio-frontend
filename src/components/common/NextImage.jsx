import Image from "next/image";
import React from "react";

const NextImage = (props) => {
  return (
    <Image
      alt='img'
      {...props}
    />
  );
};

export default NextImage;
