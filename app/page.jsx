"use client";
import { HomeScreen } from "@components/HomeScreen";

const Home = () => {
  return (
    <>
      <main
        className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out bg-bgGray text-slate-200`}
      >
        <HomeScreen />
      </main>
    </>
  );
};

export default Home;
