import React from "react";
import Background from "./Background";
import Foreground from "./Foreground";

const Home = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Background />
      <Foreground />
    </div>
  );
};

export default Home;
