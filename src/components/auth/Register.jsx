import React from "react";
import AuthHeader from "./AuthHeader";
import RegisterForm from "./RegisterForm";
import AuthFooter from "./AuthFooter";
import APP_ROUTE from "@/data/appRoute";

const Register = () => {
  return (
    <div>
      {/* Heading */}
      <AuthHeader
        title='Welcome to Mobiux!'
        description="Let's create an account for you"
      />

      {/* Form */}
      <RegisterForm className='mt-7' />

      {/* Footer */}
      <AuthFooter
        text='Already a member?'
        label='Sign in'
        href={APP_ROUTE.login}
      />
    </div>
  );
};

export default Register;
