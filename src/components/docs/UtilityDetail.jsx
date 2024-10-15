import React from "react";
import ContentWrapper from "../common/ContentWrapper";
import Table from "../common/Table";
import Back from "../common/Back";

const UtilityDetail = ({ slug, data }) => {
  return (
    <ContentWrapper className={"font-mono"}>
      <Back />
      <div className='mt-10 text-lg font-medium capitalize'>
        {slug.replace(/(_)/g, " ")} Details
      </div>
      <p className='mt-10'>
        see the file in <kbd>`@/config.js`</kbd> || <kbd>`src/config.js`</kbd>.
        Use the following information to setup the project.
      </p>
      <Table
        className='mt-10'
        data={data}
      />
    </ContentWrapper>
  );
};

export default UtilityDetail;
