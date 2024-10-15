import APP_ROUTE from "@/data/appRoute";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className='w-full font-mono text-md'>
      <div className='fixed left-0 top-0 z-50 flex flex-col justify-center items-center w-full border-b pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4 bg-black text-white'>
        <Link href={APP_ROUTE.home}>
          <h2> Robin&apos;s Project </h2>
        </Link>
        <kbd className='mt-1 block text-sm'> v14.2.3 😱 </kbd>
      </div>
    </div>
  );
};

export default Header;
