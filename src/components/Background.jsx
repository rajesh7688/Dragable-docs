import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] h-screen w-full ">
      <nav className="py-10 text-xl font-semibold flex justify-center top-[5%] text-zinc-500">
        Documents.
      </nav>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] text-zinc-900 font-[600] leading-none tracking-tighter">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
