import React from "react";

const H1 = ({ className, children }) => {
  return (
    <h1 className={`text-xxxl leading-9 font-bold ${className}`}>{children}</h1>
  );
};

export default H1;
