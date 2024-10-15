import React from "react";
import AuthHeader from "./AuthHeader";
import ForgotPasswordForm from "./ForgotPasswordForm";
import AuthFooter from "./AuthFooter";
import APP_ROUTE from "@/data/appRoute";

const ForgotPassword = () => {
  return (
    <div>
      {/* Heading */}
      <AuthHeader
        title='Forgot Password?'
        description="Let's recover your account"
      />

      {/* Form */}
      <ForgotPasswordForm className='mt-7' />
    </div>
  );
};

export default ForgotPassword;
