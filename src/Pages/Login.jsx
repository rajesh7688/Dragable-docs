import React, { useRef } from "react";
import Background from "../components/homeComponents/Background";
import LoginField from "../components/authComponents/LoginField";

const Login = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="w-full h-screen bg-zinc-800 relative">
      <Background />
      <LoginField reference={ref} />
    </div>
  );
};

export default Login;
