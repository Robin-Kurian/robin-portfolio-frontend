"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Form from "@/components/forms/Form";
import FORM_TYPES from "@/data/formTypes";
import APP_ROUTE from "@/data/appRoute";

const LoginForm = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formElements = [
    {
      type: FORM_TYPES.EMAIL,
      placeholder: "Email",
      className: "text-smd font-light",
      key: "email",
      register: register("email", { required: "Email is required" }),
    },
    {
      type: FORM_TYPES.PASSWORD,
      placeholder: "Password",
      className: "mt-2 text-smd font-light",
      key: "password",
      register: register("password", { required: "Password is required" }),
    },
    {
      type: FORM_TYPES.LINK,
      text: "Forgot password?",
      href: APP_ROUTE.forgotPassword,
      className: "text-blue-500 w-fit flex justify-end w-full",
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
        buttonLabel='Sign In'
        errors={errors}
      />
    </div>
  );
};

export default LoginForm;
