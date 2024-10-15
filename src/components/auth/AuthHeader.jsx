import React from "react";
import H1 from "@/components/common/heading/H1";

const AuthHeader = ({ title, description }) => {
  return (
    <div>
      <H1>{title}</H1>
      <p className='mt-2 font-thin'> {description} </p>
    </div>
  );
};

export default AuthHeader;
