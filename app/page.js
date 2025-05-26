"use client";
import { useState } from "react";
import { HomeScreen } from "@components/HomeScreen";

const Home = () => {
  const [input, setInput] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const toggleEditor = () => {
    setInput("");
    setShowEditor(!showEditor);
  };

  return (
    <>
      <main
        className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out bg-bgGray text-slate-200`}
      >
        <HomeScreen toggleEditor={toggleEditor} />
      </main>
    </>
  );
};

export default Home;
