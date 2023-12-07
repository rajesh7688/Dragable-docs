import React from "react";
import Background from "../components/homeComponents/Background";
import Foreground from "../components/homeComponents/Foreground";

const Home = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Background />
      <Foreground />
    </div>
  );
};

export default Home;
