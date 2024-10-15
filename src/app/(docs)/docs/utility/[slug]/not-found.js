import Back from "@/components/common/Back";
import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";

const SetupViewNotFoundPage = () => {
  return (
    <ContentWrapper>
      <div className='my-10 font-mono'>
        <Back />

        <div className='mt-10 text-md font-medium'>
          <span> No config needed, cheers! </span>
          <span className='text-lg'>🍻</span>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default SetupViewNotFoundPage;
