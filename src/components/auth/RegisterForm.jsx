"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Form from "@/components/forms/Form";
import FORM_TYPES from "@/data/formTypes";
import APP_ROUTE from "@/data/appRoute";

const RegisterForm = ({ className }) => {
  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm();

  const doesPasswordsMatch = (key) => {
    return (value) => {
      if (value !== getValues(key)) return "The passwords not matching";
      clearErrors(key);
    };
  };

  const formElements = [
    {
      type: FORM_TYPES.NAME,
      placeholder: "Name",
      className: "text-smd font-light",
      key: "name",
      register: register("name", { required: "Name is required" }),
    },
    {
      type: FORM_TYPES.EMAIL,
      placeholder: "Email",
      className: "mt-2 text-smd font-light",
      key: "email",
      register: register("email", { required: "Email is required" }),
    },
    {
      type: FORM_TYPES.PASSWORD,
      placeholder: "Password",
      className: "mt-2 text-smd font-light",
      key: "password",
      register: register("password", {
        required: "Password is required",
        validate: doesPasswordsMatch("confirm_password"),
      }),
    },
    {
      type: FORM_TYPES.PASSWORD,
      placeholder: "Confirm Password",
      className: "mt-2 text-smd font-light",
      key: "confirm_password",
      register: register("confirm_password", {
        required: "Please confirm your password",
        validate: doesPasswordsMatch("password"),
      }),
    },
    {
      type: FORM_TYPES.CHECKBOX,
      text: "I agree to the",
      className: "mt-2 text-smd font-light",
      link: APP_ROUTE.termsAndConditions,
      linkLabel: "terms and conditions",
      key: "agree",
      register: register("agree", { required: "This is required" }),
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
        buttonLabel='Sign Up'
        errors={errors}
      />
    </div>
  );
};

export default RegisterForm;
