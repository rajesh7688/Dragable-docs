import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ className, data, refrence }) => {
  const [text, setText] = useState(data.text.slice(57));

  const handleTextchange = (e) => {
    const inputValue = e.target.innerText;
    setText(inputValue.reverse());
    console.log(inputValue);
  };

  const handleSave = () => {
    console.log(text, "saved text");
  };

  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: "1.2" }}
      className={className}
    >
      <div className="flex justify-between">
        <img src={data.iconFile} alt="" className="w-[10%] text-zinc-200" />
        <img src={data.eye} alt="" className="w-[10%] text-zinc-200" />
      </div>
      <h2
        className="text-sm font-semibold mt-4"
        contentEditable="true"
        onInput={handleTextchange}
        onBlur={handleSave}
      >
        {text}
      </h2>
      <div className="footer absolute bottom-0  w-full  left-0">
        <div className="flex justify-between py-3 px-7">
          <h1>{data.fileSize}</h1>
          {data.close ? (
            <img
              src={data.closeIcon}
              alt=""
              className="w-[10%] text-zinc-200"
            />
          ) : (
            <img
              src={data.downloadIcon}
              alt=""
              className="w-[10%] text-zinc-200"
            />
          )}
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-5 ${
              data.id === 2 ? "bg-blue-300" : ""
            } flex justify-center items-center`}
          >
            <h2 className="text-md ">{data.tag.tagTitle}</h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
