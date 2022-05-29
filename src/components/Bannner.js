import React from "react";

const Bannner = () => {
  return (
    <>
      <div className="relative py-10 md:py-16 lg:py-32">
        <div
          className="absolute w-full h-full bg-cover bg-center top-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=871&q=80')",
          }}
        >
          <span className="w-full h-full absolute opacity-40 bg-black"></span>
        </div>
        <div className="container relative px-8 lg:px-20 py-8 md:py-12 lg:py-20 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-5xl font-semibold text-white text-center">
              Find Your Next Perfect Place To Live
            </h1>
            <p className="w-2/3 text-center text-white leading-loose pt-5">
              We are recognized for exceeding client expectations and delivering
              great results through dedication, ease of process, and
              extraordinary services to our worldwide clients.
            </p>
          </div>
          <div className="pt-20 ">
            {/* <div className="px-1 py-2 md:py-1 bg-white rounded w-96 md:w-auto">
              <form>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                  <div className="">
                    <input
                      type="text"
                      className=" border border-slate-400 py-3 rounded w-full focus:outline-none"
                      placeholder="Type.."
                    />
                  </div>
                  <div className="">
                    <select className=" border border-slate-400 py-3 rounded w-full focus:outline-none">
                      <option>Selected Location</option>
                      <option>Car</option>
                      <option> Bike</option>
                      <option>Honda</option>
                    </select>
                  </div>
                  <div className="">
                    <select className=" border border-slate-400 py-3 rounded w-full focus:outline-none">
                      <option>Property Type</option>
                      <option>Car</option>
                      <option> Bike</option>
                      <option>Honda</option>
                    </select>
                  </div>
                  <div className="">
                    <button className="bg-green-700 border border-green-700 text-white py-3 rounded w-full">
                      Search Property
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannner;
