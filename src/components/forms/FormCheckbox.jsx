import Link from "next/link";
import React from "react";

const FormCheckbox = (props) => {
  const { text, className, link, linkLabel, ...element } = props;

  return (
    <div className='flex justify-start items-center'>
      <input
        {...element}
        {...element.register}
        className={`mb-2 p-1.5 rounded-md form-checkbox bg-black/5 ${className}`}
      />
      <label
        htmlFor={props.id}
        className='ml-2 text-smd font-light'
      >
        {text}
      </label>
      {link && (
        <Link
          href={link}
          className='ml-1 text-smd text-blue-600'
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
};

export default FormCheckbox;
