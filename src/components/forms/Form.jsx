"use client";
import React from "react";
import FormElementSelector from "./FormElementSelector";

const Form = ({
  onSubmit,
  elements,
  errors,
  className,
  buttonRef,
  buttonClassName,
  buttonLabel = "SUBMIT",
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-2 ${className}`}
    >
      {elements.map((item, index) => {
        const { label, key, ...element } = item;
        const error = errors[key];
        const id = `form-element-${index}`;
        const elementClassName = `${element.className || ""} ${error?.message ? "!border-error !border-[1px]" : ""}`;
        return (
          <div
            key={`form-item-${index}`}
            className='flex flex-col'
          >
            <label
              className='mb-2 text-smd font-light'
              htmlFor={id}
            >
              {label}
            </label>
            <FormElementSelector
              {...element}
              className={elementClassName}
              id={id}
            />
            {error?.message && (
              <label
                className='mt-1 text-sm font-medium text-error'
                htmlFor={id}
              >
                {error.message}
              </label>
            )}
          </div>
        );
      })}

      <button
        ref={buttonRef}
        type='submit'
        className={`mt-4 w-full px-5 py-3 bg-primary text-white rounded-lg ${buttonRef ? "hidden" : "block"} ${buttonClassName}`}
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default Form;
