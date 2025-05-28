import React from "react";

const Navbar = () => {
  return (
<nav className="w-full flex flex-wrap justify-center gap-x-25 gap-y-2 py-2 bg-white text-lg text-black border border-b">
  <a href="#" className="font-semibold cursor-pointer  text-black hover:underline">
    Home
  </a>
  <a href="#" className="font-semibold cursor-pointer hover:underline">
    Portfolio
  </a>
  <a href="#" className="font-semibold cursor-pointer hover:underline">
    Other things
  </a>
  <a href="#" className="font-semibold cursor-pointer hover:underline">
    My learnings
  </a>
</nav>

  );
};

export default Navbar;
