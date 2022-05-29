import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProperties,
  getAllProperties,
} from "../features/property/propertySlice";
import Bannner from "./Bannner";
import Feature from "./Feature";
import PropertyCard from "./PropertyCard";
import TopProperties from "./TopProperties";

function Hero() {
  const properties = useSelector(getAllProperties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);
  return (
    <>
      <Bannner />

      <div className="bg-slate-100 py-20">
        <Feature />
        <TopProperties />

        <div className="container lg:px-20 ">
          <div className="pt-20">
            <div className="w-3/4 mx-auto">
              <h2 className="text-gray-900 text-4xl font-bold text-center">
                Discover the latest properties
              </h2>
              <p className="text-md  text-gray-500 text-center pt-3 pb-4">
                We are very proud of the service we provide and what our guests
                have to say about us. Our locations and services prove we are
                the best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 lg:w-11/12 mx-auto">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="properties"
                className="px-3 py-2.5 bg-green-600 text-white"
              >
                <span>View More</span>
                <i className="fas fa-arrow-right ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
