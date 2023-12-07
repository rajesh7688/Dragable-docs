import React from "react";

const InputBox = ({ className, form, type, label }) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={label}
        {...form}
        className={`outline-none py-[5px] px-[13px] w-full rounded-[10px] bg-[#e5e7eb]/90 `}
      />
    </div>
  );
};

export default InputBox;
