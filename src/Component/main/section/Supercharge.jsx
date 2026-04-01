import React from "react";

const Supercharge = () => {
  return (
    <>
      <div className="container mx-auto my-18 flex justify-center items-center">
        <div className="flex flex-col text-center md:text-start md:flex-row justify-center gap-10">
          <div className="p-4 flex-1 space-y-4">
            <div className="flex w-85 h-10 gap-2 items-center bg-[#E1E7FF]  rounded-full px-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9514FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4F39F6]"></span>
              </span>
              <span className="text-indigo-500 text-xl">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-6xl font-bold text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-xl font-medium text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="mt-6 flex gap-5">
              <button className="button">
                <span>Explore Products</span>
              </button>
              <button className="button">
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-play"></i>
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="../../../../src/assets/banner.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Supercharge;
