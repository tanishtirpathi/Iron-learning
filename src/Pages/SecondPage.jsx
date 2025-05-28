import React from "react";

function SecondPage() {
  return (
   <div className="flex flex-col justify-center items-center w-full px-4 sm:px-10 py-16 gap-20 bg-[#f7f5ff]">
  {/* Header Section */}
  <div className="text-center space-y-4 px-4">
    <h5 className="text-sm tracking-widest text-gray-600 uppercase">Everything You Need</h5>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-900">
      Control Like Stark, Think Smarter
    </h2>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl px-4">
    {/* Card 1 */}
    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <img src="./analic.png" alt="Voice Control Icon" className="w-14 h-14 rounded mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800">Voice Command</h3>
      <p className="text-gray-600 mt-2">
        Control your laptop with just your voice—just like Tony Stark with his suit.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <img src="./yellow.jpg" alt="Analytics Icon" className="w-14 h-14 rounded mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800">Deep Analytics</h3>
      <p className="text-gray-600 mt-2">
        Get powerful insights into your data. Know exactly what’s working and what’s not.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <img src="./another .png" alt="LLM Icon" className="w-14 h-14 rounded mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800">Local AI Engine</h3>
      <p className="text-gray-600 mt-2">
        Fully offline and scalable—powered by local LLMs, not just another GPT-4 wrapper.
      </p>
    </div>
  </div>
</div>

  );
}

export default SecondPage;
