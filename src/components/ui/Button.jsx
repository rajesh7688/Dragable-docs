import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, type, handleAdd }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        type={type}
        className="bg-blue-600 px-5 py-1 w-full rounded-[10px] hover:bg-zinc-700 "
        onClick={handleAdd}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
