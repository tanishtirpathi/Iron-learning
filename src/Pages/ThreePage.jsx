import React from "react";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";
function Thirdpage() {
  const link = () => {
    window.location.href="https://github.com/tanishtirpathi/jarvis-real"
  };
  return (
    <>
      <div
        style={{ justifyContent: "space-around", display: "flex" }}
        className="overflow-x-hidden w-screen py-10  flexitems-center px-12 gap-x-12 bg-[#f2f6ff]"
      >
        {" "}
        <div className="max-w">
          <h1 className="text-[#101828] text-2xl mb-4 font-semibold">
            want to see the jarvis{" "}
          </h1>
          <p className="text-[#101828] text-sm mb-2">
            jus similar the iron man but not that kind of
          </p>
          <p className="text-[#101828] text-sm">
            advance but still can perform your basic to advance laptop task
          </p>
          <div className="mt-6">
            <InteractiveHoverButton className="text-gray-400"  onClick={link}>
              {" "}
              Jarvis code{" "}
            </InteractiveHoverButton>
          </div>
        </div>
        <div className="flex rounded-md px-6 py-5 space-y-4 shadow-md">
          <Terminal className="w-114 h-80">
            <TypingAnimation as={AnimatedSpan}>
              Jarvis intiatlising !
            </TypingAnimation>
            <TypingAnimation as={AnimatedSpan}>
              Geting the data from the interenet
            </TypingAnimation>
            <TypingAnimation as={AnimatedSpan}>
              welcome back Tanish sir
            </TypingAnimation>
            <TypingAnimation as={AnimatedSpan}>
              yes sir now I am ready to work
            </TypingAnimation>
            <TypingAnimation as={AnimatedSpan}>
              weather:- cloudy , 24 degree temperature
            </TypingAnimation>
            <TypingAnimation as={AnimatedSpan}>
              Today tasks - coding , research , editing ,chilling , video shoot
            </TypingAnimation>
          </Terminal>
        </div>
      </div>
    </>
  );
}

export default Thirdpage;
