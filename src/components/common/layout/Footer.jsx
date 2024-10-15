import React from "react";
import ContentWrapper from "@/components/common/ContentWrapper";

const Footer = () => {
  return (
    <div className='relative border-t py-6 backdrop-blur-2xl lg:w-auto bg-black text-white'>
      <ContentWrapper className='sm:flex w-full justify-between items-center font-mono'>
        <span> Mobiux labs 🤍 </span>
        <kbd className='mt-1 block text-sm'>
          <span className='mr-1.5'>📆</span>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </kbd>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
