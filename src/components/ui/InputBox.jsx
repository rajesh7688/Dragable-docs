import React, { useState, useEffect } from "react";

const InputBox = ({ className, form, type, label, setSearchText }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      setSearchText(inputValue);
    }, 1000);

    return () => clearTimeout(getData);
  }, [inputValue]);

  return (
    <div className={className}>
      <input
        type={type}
        placeholder={label}
        {...form}
        onInput={handleOnchange}
        className={`outline-none py-[5px] px-[13px] w-full rounded-[10px] bg-[#e5e7eb]/90 `}
      />
    </div>
  );
};

export default InputBox;
