import React from "react";
import simple from "../../../data/Simple.json";
const Simple = () => {
  return (
    <div className="container text-center  my-10 mx-auto">
      <h1 className="text-4xl mb-3 text-gray-950 font-semibold">
        Simple, Transparent Pricing
      </h1>
      <p className="text-lg mb-10 text-gray-600">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid grid-cols-3 gap-5">
        {simple.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg text-start shadow-sm transition-all duration-300 ease-in-out hover:translate-y-0.5 hover:shadow-md shadow-gray-500 p-8 pb-16 space-y-3 "
          >
            <div
              className={`absolute -top-3 left-40 bg-amber-200 text-amber-600 rounded-full px-3 ${item.isPopular ? "" : "hidden"}`}
            >
              {item.tag}
            </div>

            <h3 className="text-3xl text-gray-800 font-medium">
              {item.planName}
            </h3>
            <p className="text-lg text-gray-500">{item.description}</p>
            <div className="flex text-2xl">
              <span className="font-bold">${item.price}</span>
              <span>/{item.period}</span>
            </div>
            {item.features.map((feature, index) => (
              <div key={index}>
                <i className="fa-regular fa-circle-check"></i> {feature}
              </div>
            ))}
            <div className="absolute bottom-5 left-0  flex justify-center items-center w-full">
              <button
                className={`w-[80%] bg-linear-65 hover:from-emerald-600 hover:to-green-400  from-[#4F39F6] to-[#9514FA] cursor-pointer h-10 text-white text-xl font-semibold rounded-full`}
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Simple;
