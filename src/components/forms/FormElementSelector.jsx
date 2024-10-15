"use client";
import FORM_TYPES from "@/data/formTypes";
import React from "react";
import FormText from "./FormText";
import FormLink from "./FormLink";
import FormCheckbox from "./FormCheckbox";

const FormElementSelector = (element) => {
  return (() => {
    switch (element.type) {
      case FORM_TYPES.TEXT:
      case FORM_TYPES.NAME:
      case FORM_TYPES.EMAIL:
      case FORM_TYPES.PASSWORD:
      case FORM_TYPES.NUMBER:
        return <FormText {...element} />;
      case FORM_TYPES.CHECKBOX:
        return <FormCheckbox {...element} />;
      case FORM_TYPES.LINK:
        return <FormLink {...element} />;

      default:
        return (
          <div className='w-full p-5 bg-error/30 border-error rounded-md text-sm'>
            Invalid form type &apos;{element.type}&apos;
          </div>
        );
    }
  })();
};

export default FormElementSelector;
