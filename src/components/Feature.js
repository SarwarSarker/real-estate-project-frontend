import React from "react";
import featureImg from "../assets/feature.jpg";

const Feature = () => {
  return (
    <>
      <div className="container lg:px-20 ">
        <div className="w-3/4 mx-auto">
          <h2 className="text-green-700 text-2xl text-center font-bold">
            Our Features
          </h2>
          <p className="text-xl lg:text-2xl font-bold text-gray-900 text-center pt-3 pb-4">
            Alluring home where you can stay and enjoy a comfortable life.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row pt-5">
          <div className="flex-1">
            <img src={featureImg} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="flex-1 space-y-6 ">
            <div className="flex gap-6 bg-white px-3 py-5 rounded-lg shadow-xl border-l-4 hover:border-white  border-green-700">
              <div className="self-center ">
                <i className=" text-green-700 fas fa-atlas text-5xl pl-3"></i>
              </div>
              <div className="w-3/4 border-l-2 pl-6">
                <h3 className="text-2xl text-gray-700 font-semibold">
                  Choose A Category
                </h3>
                <p className="text-gray-500 text-md pt-2">
                  Categories helps people to discover best hotels and rooms
                </p>
              </div>
            </div>

            <div className="flex gap-6 bg-white px-3 py-5 rounded-lg shadow-xl border-l-4 hover:border-white  border-green-700">
              <div className="self-center ">
                <i className=" text-green-700 fas fa-globe text-5xl pl-2"></i>
              </div>
              <div className="w-3/4 border-l-2 pl-6">
                <h3 className="text-2xl text-gray-700 font-semibold">
                  Find Location
                </h3>
                <p className="text-gray-500 text-md pt-2">
                  Select a place where you can stay and enjoy a comfortable life
                </p>
              </div>
            </div>

            <div className="flex gap-6 bg-white px-3 py-5 rounded-lg shadow-xl border-l-4 hover:border-white  border-green-700">
              <div className="self-center ">
                <i className=" text-green-700 fas fa-chart-bar text-5xl pl-2"></i>
              </div>
              <div className="w-3/4 border-l-2 pl-6">
                <h3 className="text-2xl text-gray-700 font-semibold">
                  Contact A Few Owners
                </h3>
                <p className="text-gray-500 text-md pt-2">
                  Contact A Owners for best prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
