import React from "react";
import { RainbowButton } from "../components/magicui/rainbow-button";

function Fourthpage() {
  return (
    <>
<section className="flex flex-col justify-center items-center bg-gray-100 py-20 px-4 sm:px-10 text-center">
  <div className="flex flex-col justify-center items-center space-y-2">
    <h2 className="text-[#101828] font-bold text-2xl">Contribute here</h2>
    <h4 className="text-[#101828] font-semibold text-base">
      just contribute here to add the value because{" "}
      <u>
        <i>"Gyan bantne se hi badhta hai"</i>
      </u>
    </h4>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 py-10">
 <RainbowButton> contribute </RainbowButton>
        <RainbowButton> don't want </RainbowButton>
  </div>
</section>

    </>
  );
}

export default Fourthpage;
