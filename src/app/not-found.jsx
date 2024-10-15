"use client";
import ContentWrapper from "@/components/common/ContentWrapper";
import APP_ROUTE from "@/data/appRoute";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DEFAULT_COUNT_SECONDS = 5;
const COUNTER_INTERVAL = 1000; // in milliseconds

const NotFoundPage = ({ autoRedirect = true }) => {
  const router = useRouter();
  const [counter, setCounter] = useState(DEFAULT_COUNT_SECONDS);

  const handleRedirection = () => {
    router.push(APP_ROUTE.home);
  };

  useEffect(() => {
    if (!autoRedirect) return;
    const intervalId = setInterval(() => {
      setCounter((prev) => {
        if (prev == 1) {
          clearInterval(intervalId);
          handleRedirection();
        }
        return prev - 1;
      });
    }, COUNTER_INTERVAL);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <body>
      <ContentWrapper>
        <div className='flex flex-col items-center justify-center h-96'>
          <h1 className='text-6xl font-bold'>404</h1>
          <h2 className='text-2xl font-bold'>Page Not Found</h2>

          {autoRedirect && (
            <div className='mt-4 text-sm'>
              Auto redirecting to
              <Link
                href={APP_ROUTE.home}
                className='mt-5 mx-1 rounded-md underline text-blue-400'
              >
                Homepage
              </Link>
              in {counter} seconds
            </div>
          )}

          {!autoRedirect && (
            <div className='mt-4 text-sm'>
              Goto
              <Link
                href={APP_ROUTE.home}
                className='mt-5 mx-1 rounded-md underline'
              >
                Home Page
              </Link>
            </div>
          )}
        </div>
      </ContentWrapper>
    </body>
  );
};

export default NotFoundPage;
