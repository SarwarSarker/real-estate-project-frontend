import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <>
      <div className="rounded drop-shadow-lg bg-white ">
        <div className="relative">
          <img
            src={property.coverPhoto.url}
            alt=""
            className="rounded-t w-full h-52 bg-cover bg-center"
          />

          <span className="absolute top-4 left-4 bg-green-600 text-ms capitalize text-white px-2 py-1 ">
            Featured
          </span>
          <span className="absolute top-4 right-4 bg-gray-700 text-ms capitalize text-white px-2 py-1 ">
            {property.product}
          </span>
          <div className="absolute bottom-0 left-4 pb-2">
            <h4 className="text-white text-md font-semibold">
              $ {property.price} / {property.rentFrequency}
            </h4>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="pb-2 border-b border-gray-100">
            <Link to={`/properties/${property.externalID}`}>
              <h4 className="text-slate-700 text-md font-bold">
                {property.title.substring(0, 24)}...
              </h4>
            </Link>

            <p className="text-tiny text-slate-700">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {property.location[0].name}
            </p>
          </div>
          <div className="flex flex-col pb-2">
            <div className="flex mt-3 justify-between items-center gap-6 ">
              <div className="flex items-center">
                <i className="fa-solid fa-home mr-2 text-sm text-green-600"></i>
                <span className="text-sm text-gray-600">
                  {property.rooms + 1} Room
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-bath mr-2 text-lg text-green-600"></i>
                <span className="text-sm text-gary-600">
                  {property.baths} Bath
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-square-full mr-2 text-sm text-green-600"></i>
                <span className="text-sm text-gary-600">
                  {Math.round(property.area)} Sqft
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center p-2 border-t">
            <img href={property.agency.logo.url} alt="imgs" />
            <button className="px-3  font-normal bg-slate-800 hover:bg-green-700 text-white rounded">
              >
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
