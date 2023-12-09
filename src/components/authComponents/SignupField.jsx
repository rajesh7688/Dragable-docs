import React, { useRef } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const SignupField = ({ endpoit }) => {
  const ref = useRef();
  return (
    <div
      ref={ref}
      className="h-screen top-0 left-0 fixed z-[3] w-full flex flex-wrap gap-5 p-6"
    >
      <SignupForm reference={ref} endpoit={endpoit} />
    </div>
  );
};

export default SignupField;
