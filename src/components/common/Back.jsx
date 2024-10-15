import APP_ROUTE from "@/data/appRoute";
import Link from "next/link";
import React from "react";

const Back = ({ href }) => {
  return (
    <Link
      href={href || APP_ROUTE.home}
      className='text-md hover:text-blue-400'
    >
      &larr; Go Home (🏠..🚶‍♂️)
    </Link>
  );
};

export default Back;
