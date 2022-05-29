import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import {
  fetchPropertyDetail,
  getPropertyDetail,
} from "../features/property/propertySlice";

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const dispatch = useDispatch();
  const propertyDetail = useSelector(getPropertyDetail);
  const {
    title,
    price,
    rentFrequency,
    rooms,
    baths,
    area,
    photos,
    description,
    coverPhoto,
  } = propertyDetail;

  useEffect(() => {
    dispatch(fetchPropertyDetail(propertyId));
  }, [dispatch, propertyId]);

  return (
    <>
      <main>
        {/* <div className="relative pt-24 pb-12 md:pt-36 md:pb-28 lg:pt-40 lg:pb-28">
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
        </div> */}

        <section className="bg-slate-100 py-20">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:px-20">
            <div className="lg:w-1/2 flex items-center flex-col">
              <h4 className="md:w-3/5 text-center px-4 text-gray-700 text-xl lg:text-2xl font-semibold mb-2">
                {title}
              </h4>
              <div className="w-full md:w-2/5 lg:w-1/2 flex items-center justify-center">
                <div className="w-4/5 z-10 m-3 p-4 relative flex items-center flex-col">
                  <div className="bg-slate-100 w-fit px-4 mb-5 text-center">
                    <h5 className="text-green-600 text-2xl font-semibold">
                      AED {price}
                    </h5>
                    <p className="text-gray-400 text-md">{rentFrequency}</p>
                  </div>
                  <div className="bg-slate-100 w-fit px-2 ">
                    <Link
                      to="/bookHotel"
                      className="bg-green-600 text-white px-4 py-2.5 rounded-md"
                    >
                      Book Now
                    </Link>
                  </div>
                  <div className="-z-10 border-2 border-green-600 rounded-lg absolute top-8 bottom-8 left-0 right-0 w-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-1 pb-5 gap-4 px-2 text-gray-400">
                <div className="flex items-center">
                  <i className="fa-solid fa-bed mr-2 text-lg lg:text-xl"></i>
                  <span className="text-sm">{rooms} Bedroom</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-bath mr-2 text-lg lg:text-xl"></i>
                  <span className="text-sm">{baths} Bath</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-square-full mr-2 text-lg lg:text-xl"></i>
                  <span className="text-sm">{Math.round(area)} Sqft</span>
                </div>
              </div>
              <Link
                to="/properties"
                className="text-green-800 text-bold text-lg pb-5"
              >
                <i className="fas fa-long-arrow-alt-left mr-2"></i>
                Back to All Hotels
              </Link>
            </div>
            <div className="w-11/12 lg:w-1/2 ">
              <Swiper pagination={true} modules={[Pagination]}>
                {photos?.slice(0, 3).map((slide, index) => (
                  <SwiperSlide key={slide.externalID}>
                    <div className="flex justify-center">
                      <img
                        src={slide.url}
                        alt=""
                        className="w-11/12 h-80 rounded-lg object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="mt-16 container px-5 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:gap-12">
            <div className="lg:w-1/2 flex gap-6">
              {photos?.slice(0, 2).map((photo) => (
                <img
                  src={photo.url}
                  key={photo.id}
                  alt=""
                  className="w-1/2 h-60 lg:h-96 rounded-lg object-cover"
                />
              ))}
            </div>
            <div className="lg:w-1/2 ">
              <h4 className="text-2xl text-slate-800 font-semibold py-5">
                The Room
              </h4>
              <div className="p-8 border-2 border-gray-300 rounded">
                <p className="text-gray-600">
                  {description?.substring(0, 300)}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-16 container px-5 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <div className="md:pb-4">
              <h4 className="text-2xl text-slate-800 font-semibold py-5">
                Amenities provided by our hotel
              </h4>
              <div className="flex flex-col md:flex-row md:gap-36 lg:gap-28">
                <ul>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Flat screen TV
                    </span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Private Bathroom
                    </span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Early Check-in
                    </span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Air-conditioning
                    </span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Barrier-free rain shower
                    </span>
                  </li>
                </ul>
                <ul>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Free high-speed WiFi
                    </span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Free parking space
                    </span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">Swimming pool</span>
                  </li>
                  <li className="text-gray-500 hover:text-slate-900 pb-2">
                    <i className="fas fa-check text-sm font-bold mr-2"></i>
                    <span className="text-md font-semibold">
                      Welcome treatment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <img
                src={coverPhoto?.url}
                alt=""
                className="w-full h-60 lg:h-80 rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetails;
