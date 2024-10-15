"use client";
import React, { useEffect, useState } from "react";
import Back from "../common/Back";

const CodeStandards = () => {
  const [shortVersion, setShortVersion] = useState(true);

  const titleStyle = "text-md font-bold text-white/30";
  const codeStyle =
    "bg-white/30 text-white text-gray-800 rounded-md px-1 py-0.5 font-mono text-sm";

  const toggleVersion = () => setShortVersion((prev) => !prev);

  useEffect(() => {
    setShortVersion(false);
  }, []);

  return (
    <div>
      <Back />
      <div className='max-w-[650px] mx-auto text-white/50'>
        {/* Long version */}
        {!shortVersion && (
          <div className='mx-auto '>
            <ul className='list-disc pl-4'>
              <li className='mb-4'>
                File Naming Convention:
                <ul className='list-disc pl-4'>
                  <li className='mb-2'>
                    Save all React components with the
                    <code className={codeStyle}>.jsx</code> or
                    <code className={codeStyle}>.tsx</code> extension for
                    utilising VSCode specific features and improved editor
                    support.
                  </li>
                  <li className='mb-2'>
                    Filename should be the same as Component name. The only
                    exception is for files inside the
                    <code className={codeStyle}>/app</code> directory.
                  </li>
                  <li>
                    Only one component should be inside a file. A file should
                    not have more than one React component.
                  </li>
                </ul>
              </li>
              <li className='mb-4'>
                Component Naming Guidelines:
                <ul className='list-disc pl-4'>
                  <li className='mb-4'>
                    Common Components:
                    <ul className='list-disc pl-4'>
                      <li className='mb-2'>
                        Ensure generic and meaningful naming for common
                        components.
                      </li>
                      <li className='mb-2'>
                        Define proper props with a must-have
                        <code className={codeStyle}>className</code> prop for
                        customizable styling.
                      </li>
                      <li>Provide component flexibility through props.</li>
                    </ul>
                  </li>
                  <li>
                    Page-Specific Components:
                    <ul className='list-disc pl-4'>
                      <li className='mb-2'>
                        Name components after their parent component for
                        clarity. For instance, a title component specific to the
                        <code className={codeStyle}>Post</code> page should be
                        named <code className={codeStyle}>PostTitle</code>.
                      </li>
                      <li className='mb-2'>
                        Maintain hierarchical naming for nested components based
                        on the parent component&apos;s name. For example,
                        <code className={codeStyle}>Post</code> →
                        <code className={codeStyle}>PostAuthor</code> →
                        <code className={codeStyle}>PostAuthorImage</code>.
                      </li>
                      <li>
                        Ensure component names reflect their purpose and context
                        to facilitate understanding of the page, section, and
                        component.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='mb-4'>
                Main Component Naming: (page.js)
                <ul className='list-disc pl-4'>
                  <li>
                    Append &apos;Page&apos; to the component name. For example,
                    <code className={codeStyle}>Post</code> becomes
                    <code className={codeStyle}>PostPage</code>.
                  </li>
                </ul>
              </li>
              <li className='mb-4'>
                Minimal Main Page File Content:
                <ul className='list-disc pl-4'>
                  <li>
                    Keep main page file content as minimal as possible to
                    enhance readability and maintainability.
                  </li>
                </ul>
              </li>
              <li className='mb-4'>
                Keep it Separate:
                <ul className='list-disc pl-4'>
                  <li>
                    Separate data layer logic from components. Use utility files
                    or custom hooks for complex calculations to improve
                    modularity.
                  </li>
                </ul>
              </li>
              <li className='mb-4'>
                Utility Files Usage:
                <ul className='list-disc pl-4'>
                  <li>
                    Use utility files for common actions such as API calls, UTC
                    timestamp to datetime conversions etc.
                  </li>
                </ul>
              </li>
              <li className='mb-4'>
                Use of HTML Elements:
                <ul className='list-disc pl-4'>
                  <li>
                    Prefer using appropriate HTML elements like
                    <code className={codeStyle}>&lt;Link&gt;</code> or
                    <code className={codeStyle}>&lt;button&gt;</code> instead of
                    assigning <code className={codeStyle}>onClick</code>
                    functions to <code className={codeStyle}>&lt;div&gt;</code>
                    elements for better accessibility and semantic structure.
                    <a
                      href='https://youtu.be/HJ0-fUJ-2F0?si=E0tPjTnHCtJ-HoTH&t=165'
                      target='_blank'
                      className='text-blue-500'
                    >
                      Learn More
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}

        {/* Simple version */}
        {shortVersion && (
          <ul className='list-disc pl-4'>
            <li className='mb-4'>
              File Naming Convention:
              <ul className='list-disc pl-4'>
                <li className='mb-2'>
                  Save React components as
                  <code className={codeStyle}>.jsx</code> or
                  <code className={codeStyle}>.tsx</code> files.
                </li>
                <li className='mb-2'>
                  Component filename should match the component name.
                </li>
                <li>Each file should contain only one React component.</li>
              </ul>
            </li>
            <li className='mb-4'>
              Component Naming Guidelines:
              <ul className='list-disc pl-4'>
                <li>Ensure generic naming for common components.</li>
                <li>
                  Name page-specific components after their parent component.
                </li>
              </ul>
            </li>
            <li className='mb-4'>
              Main Component Naming: (page.js)
              <ul className='list-disc pl-4'>
                <li>Add &apos;Page&apos; to component names.</li>
              </ul>
            </li>
            <li className='mb-4'>
              Minimal Main Page File Content:
              <ul className='list-disc pl-4'>
                <li>Keep main page files concise.</li>
              </ul>
            </li>
            <li className='mb-4'>
              Keep it Separate:
              <ul className='list-disc pl-4'>
                <li>Separate data logic from components.</li>
              </ul>
            </li>
            <li className='mb-4'>
              Utility Files Usage:
              <ul className='list-disc pl-4'>
                <li>Use utility files for common actions like API calls.</li>
              </ul>
            </li>
            <li className='mb-4'>
              Use of HTML Elements:
              <ul className='list-disc pl-4'>
                <li>
                  Prefer using appropriate HTML elements like
                  <code className={codeStyle}>&lt;Link&gt;</code> or
                  <code className={codeStyle}>&lt;button&gt;</code> instead of
                  assigning <code className={codeStyle}>onClick</code> functions
                  to <code className={codeStyle}>&lt;div&gt;</code> elements.
                  <a
                    href='https://youtu.be/HJ0-fUJ-2F0?si=E0tPjTnHCtJ-HoTH&t=165'
                    target='_blank'
                    className='text-blue-500'
                  >
                    Learn More
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        )}

        <div className='flex justify-center mt-10'>
          <button
            onClick={toggleVersion}
            type='button'
            className='bg-white/80 hover:bg-white duration-150 text-black text-sm font-semibold rounded-full py-3 px-10'
          >
            See {shortVersion ? "long" : "short"} version
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeStandards;
