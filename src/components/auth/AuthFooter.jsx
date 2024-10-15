import Link from "next/link";
import React from "react";

const AuthFooter = ({ text, label, href }) => {
  return (
    <div className='mt-5 text-sm font-extralight flex justify-center items-center'>
      {text && <span className='mr-1'>{text}</span>}
      <Link
        href={href}
        className={"text-blue-600 font-medium"}
      >
        {label}
      </Link>
    </div>
  );
};

export default AuthFooter;
