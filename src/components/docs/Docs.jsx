import React from "react";
import Link from "next/link";
import APP_ROUTE from "@/data/appRoute";
import DocsDelete from "./DocsDelete";
import ContentWrapper from "@/components/common/ContentWrapper";
import DocsListPackages from "./DocsListPackages";

const Docs = ({ packageData }) => {
  const cardStyle =
    "bg-black/90 text-white rounded-xl p-5 pb-6 pt-8 lg:p-5 border-[1px] border-white/60";
  const titleStyle = "text-md font-bold group-hover:underline";
  const titleStyle2 = "text-sm font-semibold group-hover:underline text-white";

  return (
    <ContentWrapper>
      {!packageData && (
        <div className='mb-5 px-3 py-2 rounded-md bg-red-500/70 backdrop-blur-lg sticky top-2.5 left-0'>
          <p className='text-sm'>
            ❌ Trouble loading some data, make sure you are running server in
            port 3000 or update the host specified in
            <span className='mx-0.5 rounded-sm px-1 py-0.5 bg-white/30'>
              ServerRequest.get
            </span>
            function inside
            <span className='mx-0.5 rounded-sm px-1 py-0.5 bg-white/30'>
              @src/app/(docs)/page.js
            </span>
            file.
          </p>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 md:gap-x-5'>
        {/* Utilites */}
        <div className={`${cardStyle}`}>
          <h6 className={`${titleStyle}`}> Utilities 😃 </h6>
          <hr className='my-2' />
          <ol className='list-decimal list-inside'>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.docsFor("server_request_config")}
              >
                ServerRequest
              </Link>
            </li>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.docsFor("auth_config")}
              >
                Authentication
              </Link>
            </li>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.docsFor("storage_config")}
              >
                Storage
              </Link>
            </li>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.docsFor("form_validation")}
              >
                FormValidation
              </Link>
            </li>
          </ol>
        </div>

        {/* Pages */}
        <div className={`md:col-span-2 ${cardStyle}`}>
          <h6 className={`${titleStyle}`}> Pages 🤔 </h6>
          <hr className='my-2' />
          <ol className='list-decimal list-inside'>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.login}
              >
                Login
              </Link>
            </li>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.register}
              >
                Register
              </Link>
            </li>
            <li className='text-sm font-semibold mt-2'>
              <Link
                className='hover:underline'
                href={APP_ROUTE.forgotPassword}
              >
                Forgot Password
              </Link>
            </li>
          </ol>
        </div>

        {/* Config */}
        <Link
          href={APP_ROUTE.docs}
          className={`flex justify-center items-center group ${cardStyle}`}
        >
          <div className={`${titleStyle}`}> Config Project 📄 </div>
        </Link>

        {/* Packages used */}
        <div className={`md:col-span-2 lg:col-span-3 ${cardStyle}`}>
          <h3 className={`${titleStyle}`}> Packages used 📦 </h3>
          <hr className='mt-2' />
          <div className='flex justify-start flex-wrap gap-2 py-4'>
            {/* Dependencies */}
            <DocsListPackages
              dependencies={packageData?.dependencies}
              showErrorMessage
            />
            {/* Dev Dependencies */}
            <DocsListPackages
              dependencies={packageData?.devDependencies}
              isDev
            />
          </div>
        </div>

        {/* Nextjs docs & videos */}
        <div className={`h-full grid grid-cols-1 gap-5`}>
          <a
            href='https://nextjs.org/docs'
            target='_blank'
            className={`flex justify-center items-center group ${cardStyle}`}
          >
            <div className={`${titleStyle}`}> Read nextjs 14 docs 📖 </div>
          </a>

          <a
            href='https://youtu.be/ZjAqacIC_3c?si=d1i8VRA6tVOdLEJ2'
            target='_blank'
            className={`flex justify-center items-center group ${cardStyle}`}
          >
            <div className={`${titleStyle}`}> Watch nextjs 14 on YT 👀 </div>
          </a>
        </div>

        {/* CI/CD */}
        <div className={`md:col-span-2 md:row-span-2 ${cardStyle}`}>
          <h3 className={`${titleStyle}`}> CI/CD 🚀 </h3>
          <hr className='mt-2' />
          <div className='mt-2 text-sm'>
            <Link
              href={APP_ROUTE.docsCICD}
              className='hover:underline'
            >
              View More
            </Link>
          </div>
        </div>

        {/* YARN Installation */}
        <div
          className={`flex justify-center items-center hover:cursor-text ${cardStyle} bg-white/10`}
        >
          <div className='text-md font-bold group-hover:underline'>
            npm install
          </div>
        </div>

        {/* YARN Usage */}
        <div
          className={`flex justify-center items-center hover:cursor-text ${cardStyle} bg-white/10`}
        >
          <div className='text-md font-bold group-hover:underline'>
            npm run dev
          </div>
        </div>

        {/* Scripts */}
        <div className={`md:col-span-2 ${cardStyle}`}>
          <span className={`${titleStyle} mr-2`}>Scripts</span>📜
          <hr className='mt-2' />
          <div className='flex flex-wrap gap-2 py-2'>
            {packageData?.scripts &&
              Object.keys(packageData?.scripts).map((key, index) => (
                <div
                  className='text-sm px-2 py-1 bg-black/10 dark:bg-white/10 rounded-md border-spacing-3 opacity-50'
                  key={`package-${key}`}
                  title={packageData.scripts[key]}
                >
                  {key}
                </div>
              ))}

            {!packageData?.scripts && (
              <div className='text-sm text-error'>Error getting data...</div>
            )}
          </div>
        </div>
      </div>

      {/* Report */}
      <div className={`mt-5`}>
        <a
          href='https://github.com/Mobiux-Labs/starter-project-nextjs-tailwind/issues/new'
          target='_blank'
          className='text-sm hover:underline text-blue-400'
        >
          Report Issue on Github
        </a>
      </div>

      {/* Todo List */}
      <div className='mt-10 bg-white/10 p-5 rounded-lg'>
        <h3 className={`${titleStyle} text-center`}>⭐️⭐️ Todo List ⭐️⭐️</h3>

        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white/90'>
          <div className='p-4 bg-black rounded-lg text-sm group'>
            <h5 className={`${titleStyle2}`}>
              Clean up doc related components & data from,
            </h5>
            <ol className='list-decimal list-inside'>
              <li className='my-2'>
                src/app/(docs)
                <span className='text-white/60 ml-1'>(entire folder 📂)</span>
              </li>
              <li className='my-2'>
                src/components/docs
                <span className='text-white/60 ml-1'>(entire folder 📂)</span>
              </li>
              <li className='my-2'>
                src/data/docs.js
                <span className='text-white/60 ml-1'>(entire file 📄)</span>
              </li>
              <li className='my-2'>
                src/data/appRoute.js
                <span className='text-white/60 ml-1'>(partial content 📃)</span>
              </li>
            </ol>
          </div>

          <div className='p-4 bg-black rounded-lg text-sm flex flex-col justify-between group'>
            <div>
              <h5 className='font-semibold flex justify-between'>
                <span className={`${titleStyle2}`}>Clean up APIs, routes</span>
                🚨🚨🚨
              </h5>
              <ol className='list-decimal list-inside'>
                <li className='my-2'>
                  src/app/api/package/route.js
                  <span className='text-white/60 ml-1'>(entire file 📄)</span>
                </li>
                <li className='my-2'>
                  src/app/api/clean-project/route.js
                  <span className='text-white/60 ml-1'>(entire file 📄)</span>
                </li>
              </ol>
            </div>
            <p className='text-white/60'>
              Important: 1st API exposes the package.js content. It should be
              removed as the first thing after cloning this project.
            </p>
          </div>

          <div className='p-4 bg-black rounded-lg text-sm md:col-span-2 lg:col-span-1 group'>
            <h5 className={`${titleStyle2}`}> Update Readme file</h5>
            <p className='mt-2'>
              Update the readme.md file with the project details.
            </p>
          </div>
        </div>

        <DocsDelete className={"mt-5 text-sm text-white/40"} />
      </div>

      <Link
        href={APP_ROUTE.docsCodeStandards}
        className='group'
        scroll
      >
        <div className='mt-5 p-5 group-hover:bg-white/5 duration-150 ease-in-out rounded-lg text-md text-white/70 text-center'>
          See recommended code standards
        </div>
      </Link>
    </ContentWrapper>
  );
};

export default Docs;
