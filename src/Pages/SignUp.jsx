import React from "react";
import Background from "../components/homeComponents/Background";
import SignupField from "../components/authComponents/SignupField";

const SignUpApiEndpoint = "register";

const SignUp = () => {
  return (
    <div>
      <Background />
      <SignupField endpoit={SignUpApiEndpoint} />
    </div>
  );
};

export default SignUp;
