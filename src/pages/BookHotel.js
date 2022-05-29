import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Footer from "../components/Footer";
import { bookingHotel } from "../features/bookHotel/bookingHotelSlice";

const BookHotel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formValue) => {
    const { name, phone, checkInDate, checkOutDate, adult, children } =
      formValue;
    dispatch(
      bookingHotel({ name, phone, checkInDate, checkOutDate, adult, children })
    ).then(() => {
      navigate("/");
      toast.success("Hotel booked successfully. Please wait for confirmation!");
    });
  };

  const initialvalues = {
    name: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
  };

  const validateSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    phone: Yup.string().required("Phone is Required"),
    checkInDate: Yup.string().required("Check-In Date is Required"),
    checkOutDate: Yup.string().required("Check-Out Date is Required"),
  });

  return (
    <>
      <div
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1561501878-aabd62634533?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <div className="container lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 ">
            <div className="grid content-center">
              <h5 className="text-white text-sm font-medium uppercase">
                YOUR RESERVATION
              </h5>
              <p className="text-white text-2xl md:text-4xl font-medium py-2">
                Select the Room, check for availability and book it.
              </p>
            </div>
            <div className="">
              <div className="bg-white rounded-md shadow-md">
                <div className="p-6 lg:p-12">
                  <div className="">
                    <h3 className="text-black text-xl font-semibold pb-4">
                      Book Now
                    </h3>
                    <Formik
                      initialValues={initialvalues}
                      validationSchema={validateSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="form-group mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="">
                            <label className="form-label inline-block my-2 font-medium">
                              Name
                            </label>
                            <Field
                              type="text"
                              className="w-full px-4 py-3 text-gray-600  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-yellow-600 focus:outline-none"
                              placeholder="Your Name"
                              name="name"
                            />
                            <ErrorMessage
                              name="name"
                              className="text-red-600"
                              component="div"
                            />
                          </div>
                          <div className="">
                            <label className="form-label inline-block my-2 font-medium">
                              Phone Number
                            </label>
                            <Field
                              type="text"
                              className="w-full px-4 py-3 text-gray-600  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-yellow-600 focus:outline-none"
                              placeholder="Your Phone Number"
                              name="phone"
                            />
                            <ErrorMessage
                              name="phone"
                              className="text-red-600"
                              component="div"
                            />
                          </div>
                        </div>

                        <div className="form-group mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="">
                            <label className="form-label inline-block my-2 font-medium">
                              Check-In Date
                            </label>
                            <Field
                              type="date"
                              className="w-full px-4 py-3 text-gray-600  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-yellow-600 focus:outline-none"
                              placeholder="Date"
                              name="checkInDate"
                            />
                            <ErrorMessage
                              name="checkInDate"
                              className="text-red-600"
                              component="div"
                            />
                          </div>
                          <div className="">
                            <label className="form-label inline-block my-2 font-medium">
                              Check-Out Date
                            </label>
                            <Field
                              type="date"
                              className="w-full px-4 py-3 text-gray-600  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-yellow-600 focus:outline-none"
                              placeholder="Date"
                              name="checkOutDate"
                            />
                            <ErrorMessage
                              name="checkOutDate"
                              className="text-red-600"
                              component="div"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-orange-600 text-white px-4 py-3 "
                        >
                          Book Now
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookHotel;
