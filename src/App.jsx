import Navbar from "./Pages/Navbar";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThreePage";
import FourthPage from "./Pages/Fourth";
import React from "react";
import { RainbowButton } from "./components/magicui/rainbow-button";
import { RetroGrid } from "./components/magicui/retro-grid";

function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden w-screen min-h-screen bg-white flex justify-center items-center px-12 gap-x-12">
        {/* Left section */}
        <RetroGrid />
        <div className="max-w">
          <h1 className="text-[#101828] text-3xl mb-4 font-semibold">
            Who is your fav ideal?
          </h1>
          <p className="text-[#101828] text-sm mb-2">
            Mine is Tony Stark. Because our names are also same like Tanish
            Sharma / Tony Stark — just kidding.
          </p>
          <p className="text-[#101828] text-sm">
            He is the only person who became a superhero based on his own
            intelligence.
          </p>
          <div className="mt-6">
            <RainbowButton className="px-4 py-2 text-sm">
              Check learning
            </RainbowButton>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col justify-center items-center bg-[#BCBCBC] rounded-md px-6 py-5 space-y-4 shadow-md">
          <input
            className="bg-white text-[#101828] px-3 py-2 rounded w-64 border"
            type="text"
            placeholder="Write your superhero name"
          />{" "}
          <div className="text-white font-semibold bg-[#8200db] w-full flex justify-center py-1 rounded-md hover:bg-[#8200db] hover:text-white transition  cursor-pointer">
            Submit
          </div>
        </div>
      </div>
      <SecondPage />
      <ThirdPage />
      <FourthPage />    </>
  );
}

export default App;
