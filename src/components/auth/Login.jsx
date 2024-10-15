import React from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import AuthFooter from "./AuthFooter";
import APP_ROUTE from "@/data/appRoute";

const Login = () => {
  return (
    <div>
      {/* Heading */}
      <AuthHeader
        title='Welcome back!'
        description="Let's sign you in"
      />

      {/* Form */}
      <LoginForm className='mt-7' />

      {/* Footer */}
      <AuthFooter
        text='Not a member yet?'
        label='Sign up'
        href={APP_ROUTE.register}
      />
    </div>
  );
};

export default Login;
