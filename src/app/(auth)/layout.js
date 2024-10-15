import { Inter } from "next/font/google";
import APP_ROUTE from "@/data/appRoute";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }) {
  return (
    <body className={inter.className}>
      <div className='w-full md:flex'>
        <div className='w-full min-h-[40vh] md:w-3/5 md:h-dvh p-10 bg-primary flex justify-center items-center'>
          <Link href={APP_ROUTE.home}>
            <h1 className='uppercase font-bold text-[4rem] text-white duration-300 hover:text-blue-400'>
              MOBIUX
            </h1>
          </Link>
        </div>
        <div className='w-full min-h-[60vh] md:h-dvh p-10 pt-20 md:pt-10 bg-white !text-black md:flex justify-center items-center '>
          <div className='w-full mx-auto max-w-[420px]'>{children}</div>
        </div>
      </div>
    </body>
  );
}
