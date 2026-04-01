import React from "react";

const PremiumTools = () => {
  return (
    <>
      <div className="bg-linear-65 text-white text-center from-[#4F39F6] to-[#9514FA] py-6 flex justify-center items-center">
        <div className="flex items-center justify-around gap-6">
          <div>
            <h1 className="text-4xl mt-3 font-semibold">50K+</h1>
            <p className="text-md">Active Users</p>
          </div>
          <div className="h-12 w-1 bg-indigo-400 opacity-50" />
          <div>
            <h1 className="text-4xl mt-3 font-semibold">200+</h1>
            <p className="text-md">Premium Tools</p>
          </div>
          <div className="h-12 w-1 bg-indigo-400 opacity-50" />
          <div>
            <h1 className="text-4xl mt-3 font-semibold">4.9</h1>
            <p className="text-md">Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumTools;
