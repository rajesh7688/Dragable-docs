import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, type }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        type={type}
        className="bg-blue-600 px-5 py-1 w-1/4 rounded-[10px] hover:bg-zinc-700 "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
