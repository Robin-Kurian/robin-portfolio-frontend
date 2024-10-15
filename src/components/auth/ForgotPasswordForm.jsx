"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Form from "@/components/forms/Form";
import FORM_TYPES from "@/data/formTypes";

const ForgotPasswordForm = ({ className }) => {
  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm();

  const formElements = [
    {
      type: FORM_TYPES.EMAIL,
      placeholder: "Email",
      className: "mt-2 text-smd font-light",
      key: "email",
      register: register("email", { required: "Email is required" }),
    },
  ];

  const onSubmit = (data) => {
    // handle submit logic here
  };

  return (
    <div className={`${className}`}>
      <Form
        elements={formElements}
        onSubmit={handleSubmit(onSubmit)}
        buttonLabel='Send Recovery Email'
        errors={errors}
      />
    </div>
  );
};

export default ForgotPasswordForm;
