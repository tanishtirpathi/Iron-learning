import React from "react";
import { RainbowButton } from "../components/magicui/rainbow-button";

function Fourthpage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-100 py-20 px-10 ">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#101828] font-bold text-2xl">Contribute here</h2>
        <h4 className="  text-[#101828] font-semibold text-m">
          just contribute here to add the value because{" "}
          <u>
            {" "}
            <i>"Gyan bantne se hi badhta hai "</i>{" "}
          </u>
        </h4>
      </div>
      <div
        className="flex items-center py-10 justify-center gap-10"
      >
        <RainbowButton> contribute </RainbowButton>
        <RainbowButton> don't want </RainbowButton>
      </div>
     </div>
    </>
  );
}

export default Fourthpage;
