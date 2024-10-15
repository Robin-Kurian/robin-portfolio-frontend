import React from "react";

export const CONTENT_PADDING =
  "px-5 sm:px-7 md:px-10 lg:px-20 ui:px-32 2xl:px-0";

const ContentWrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto ${CONTENT_PADDING} ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
