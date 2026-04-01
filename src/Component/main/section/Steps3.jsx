import React from "react";
import steps from "../../../data/steps3.json";
const Steps3 = () => {
  return (
    <div className="container text-center  my-10 mx-auto">
      <h1 className="text-4xl mb-3 text-gray-950 font-semibold">
        Get Started in 3 Steps
      </h1>
      <p className="text-lg mb-10 text-gray-600">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-5 items-center">
        {steps.map((item, index) => (
          <>
            <div
              key={index}
              className=" card relative rounded-lg shadow-sm p-4 py-10   shadow-gray-400"
            >
              <div
                className={`absolute w-7 h-7 p-1 top-3 flex justify-center items-center  right-3 rounded-full text-white text-sm bg-purple-500`}
              >
                {item.stepNumber}
              </div>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div
                  className={`w-14 h-14  flex justify-center items-center text-3xl rounded-full p-4 ${item.iconColor} ${item.bgColor}`}
                >
                  <i className={`${item.icon}`}></i>
                </div>
                <h4 className="text-[#101727] text-xl font-semibold">
                  {item.title}
                </h4>
                <p className="text-lg w-[80%] text-center text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Steps3;
