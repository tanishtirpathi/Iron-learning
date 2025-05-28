import React from "react";

const Navbar = () => {
  return (
    <nav
    className=" w-full flex justify-center gap-x-20 py-2 bg-white text-lg text-black border boder-bottom"
    >
      <div className="font-semibold cursor-pointer hover:underline ">Home</div>
      <div className="font-semibold cursor-pointer hover:underline ">Portfolio</div>
      <div className="font-semibold cursor-pointer hover:underline ">Other things</div>
      <div className="font-semibold cursor-pointer hover:underline ">My learnings</div>
    </nav>
  );
};

export default Navbar;
