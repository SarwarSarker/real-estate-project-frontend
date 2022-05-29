import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyCard from "../components/PropertyCard";
import {
  fetchProperties,
  getAllProperties,
} from "../features/property/propertySlice";

function Properties() {
  const properties = useSelector(getAllProperties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);
  return (
    <>
      <main>
        <div className="relative pt-24 pb-12 md:pt-36 md:pb-28 lg:pt-40 lg:pb-28">
          <div
            className="absolute w-full h-full bg-cover bg-center top-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span className="w-full h-full absolute opacity-40 bg-black"></span>
          </div>
          <div className=" relative flex justify-center items-center h-full">
            <div className="text-white ">
              <h2 className="font-semibold text-4xl mb-4">Properties</h2>
              <ol className="list-reset flex">
                <li>
                  <a href="#s" className="hover:text-green-300">
                    Home
                  </a>
                </li>
                <li>
                  <span className=" mx-2">-</span>
                </li>
                <li>
                  <a href="#s" className="hover:text-green-300">
                    Properties
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-center items-start">
              <div className="basis-1/4 w-full">
                <div className="bg-white drop-shadow-lg">
                  <div className="flex justify-between items-center bg-slate-900 text-white p-4">
                    <h4>Find Your Property</h4>
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="p-4 grid gap-4">
                    <div>
                      <label className="text-sm font-bold">Keyword</label>
                      <input
                        type="text"
                        className=" border border-slate-400 py-3 rounded w-full focus:outline-none"
                        placeholder="Type.."
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold">Location</label>
                      <select className=" border border-slate-400 py-3 rounded w-full focus:outline-none">
                        <option>Selected Location</option>
                        <option>Car</option>
                        <option> Bike</option>
                        <option>Honda</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold">Property Type</label>
                      <select className=" border border-slate-400 py-3 rounded w-full focus:outline-none">
                        <option>Property Type</option>
                        <option>Car</option>
                        <option> Bike</option>
                        <option>Honda</option>
                      </select>
                    </div>
                    <div>
                      <button className="bg-green-600 border border-green-600 text-white py-3 rounded w-full">
                        Search Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-3/5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
                <div className="py-16">
                  <ul className="flex list-style-none justify-center items-center gap-2">
                    <li className="page-item ">
                      <a
                        className="page-link relative block py-1.5 px-3 outline-none transition-all duration-300 border border-green-600 rounded-full font-bold text-green-600 hover:text-white hover:bg-green-600 focus:shadow-none"
                        href="#e"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3 outline-none transition-all duration-300 border border-green-600 rounded-full font-bold text-green-600 hover:text-white hover:bg-green-600 focus:shadow-none"
                        href="#e"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3  outline-none transition-all duration-300  border border-green-600 rounded-full font-bold text-green-600 hover:text-white hover:bg-green-600 focus:shadow-none"
                        href="#e"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3  outline-none transition-all duration-300 border border-green-600 rounded-full font-bold text-green-600 hover:text-white hover:bg-green-600 focus:shadow-none"
                        href="#e"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3  outline-none transition-all duration-300 border border-green-600 rounded-full font-bold text-green-600 hover:text-white hover:bg-green-600 focus:shadow-none"
                        href="#e"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Properties;
