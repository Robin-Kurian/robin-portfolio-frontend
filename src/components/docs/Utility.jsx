import React from "react";
import DOCS from "@/data/docs";
import Table from "@/components/common/Table";
import ContentWrapper from "@/components/common/ContentWrapper";
import Highlight from "@/components/common/Highlight";
import Back from "../common/Back";

const Utility = () => {
  return (
    <ContentWrapper>
      <div className='font-mono'>
        <Back />

        <h3 className='mt-10 text-lg font-bold hover:underline'>
          Setup Starter Project 🎉
        </h3>

        <div className='mt-10 list-decimal list-inside text-xs'>
          <div className='mt-5'>
            <div className='text-mlg font-semibold leading-5'>
              Setup <Highlight> .env.local </Highlight> file.
            </div>
            <Table
              className='mt-3 max-w-[740px]'
              data={DOCS.env_config}
            />
          </div>

          <div className='mt-16'>
            <div className='w-fit text-mlg font-semibold leading-5'>
              Configure project, See <Highlight> /src/config.js </Highlight>
            </div>
            <div className='list-roman list-inside'>
              <div className='mt-10 max-w-[740px]'>
                <h3 className='font-bold text-md'>AUTH UTILITY</h3>
                <Table
                  className='mt-2'
                  data={DOCS.auth_config}
                />
              </div>
              <div className='mt-10 max-w-[740px]'>
                <h3 className='font-bold text-md'>SERVER REQUEST UTILITY</h3>
                <Table
                  className='mt-2'
                  data={DOCS.server_request_config}
                />
              </div>
              <div className='mt-10 max-w-[740px]'>
                <h3 className='font-bold text-md'>STORAGE UTILITY</h3>
                <Table
                  className='mt-2'
                  data={DOCS.storage_config}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Utility;
