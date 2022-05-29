import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Spinner from "../components/Spinner";
import { registerUser, reset } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const initialvalues = {
    username: "",
    email: "",
    password: "",
  };

  const validateSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;
    dispatch(registerUser({ username, email, password })).then(() => {
      navigate("/");
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="absolute w-full h-full">
        <div className="absolute top-0 w-full h-full bg-gray-900"></div>
        <div className="container px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="rounded-t mb-0 px-6 pt-6 pb-2">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Register with
                    </h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white ">
                  <Formik
                    initialValues={initialvalues}
                    validationSchema={validateSchema}
                    onSubmit={handleRegister}
                  >
                    <Form>
                      <div className=" mb-6">
                        <label className="form-label inline-block mb-2 text-gray-700">
                          Usename
                        </label>
                        <Field
                          type="text"
                          className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Username"
                          name="username"
                        />
                        <ErrorMessage
                          name="username"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className=" mb-6">
                        <label className="form-label inline-block mb-2 text-gray-700">
                          Email address
                        </label>
                        <Field
                          type="email"
                          className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email address"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className=" mb-6">
                        <label className="form-label inline-block mb-2 text-gray-700">
                          Password
                        </label>
                        <Field
                          type="password"
                          className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                          name="password"
                        />
                        <ErrorMessage
                          name="password"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <button
                        type="submit"
                        className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Sign up
                      </button>
                      <p className="text-gray-800 mt-6 text-center">
                        Already have an account?
                        <Link
                          to="/login"
                          className="ml-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                        >
                          Login
                        </Link>
                      </p>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
