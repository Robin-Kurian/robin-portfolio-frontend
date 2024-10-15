import Link from "next/link";
import React from "react";

const FormLink = (props) => {
  const { className, text, ...element } = props;
  return (
    <div className={`text-blue-500 text-sm ${className}`}>
      <Link
        {...element}
        className='hover:underline'
      >
        {text}
      </Link>
    </div>
  );
};

export default FormLink;
