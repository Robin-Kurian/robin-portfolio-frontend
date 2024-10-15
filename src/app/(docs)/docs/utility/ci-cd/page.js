import Back from "@/components/common/Back";
import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";

const CICDDocsPage = () => {
  return (
    <ContentWrapper className={"font-mono"}>
      <Back />
      <div className='mt-10 text-sm'>
        <div>
          Developer went to sleep <span className='text-lg'>😴</span>, He will
          be back <strike>soon</strike> with the documentation for CI/CD setup
        </div>

        <div className='mt-5'>
          <a
            href='tel:+918075577005'
            className='hover:underline'
          >
            still not fixed? Blame 📞
          </a>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CICDDocsPage;
