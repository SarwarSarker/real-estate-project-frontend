import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser, reset } from "../features/auth/authSlice";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <nav className="px-4 py-3 bg-white">
        <div className="container lg:flex flex-wrap justify-between items-center py-2">
          <div className="flex justify-between text-black items-center">
            <Link to="/" className="text-2xl font-bold leading-relaxed">
              FindEstate
            </Link>
            <button
              className="block lg:hidden relative z-30"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white" +
              (navbarOpen ? "block rounded-md bg-slate-100" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row text-black list-none ml-auto gap-2 lg:gap-0">
              <li className="nav-item">
                <Link className="px-3 text-lg font-medium" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="px-3 text-lg font-medium" to="/properties">
                  Properties
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row text-black list-none lg:ml-auto mt-4 lg:mt-0">
              {user ? (
                <li>
                  <button
                    className="bg-red-600 text-white  text-md font-semibold uppercase px-3 py-2.5 lg:mr-1 lg:mb-0 ml-3 mb-3"
                    onClick={onLogout}
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="flex items-center">
                    <Link
                      className="bg-green-600 text-white  text-sm font-semibold uppercase px-3 py-2.5 lg:mr-1 lg:mb-0 ml-3 mb-3"
                      to="/login"
                    >
                      <i className="fas fa-user-alt mr-2"></i>Login
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link
                      className="bg-green-600 text-white  text-sm font-semibold uppercase px-3 py-2.5 lg:mr-1 lg:mb-0 ml-3 mb-3"
                      to="/register"
                    >
                      <i className="fas fa-user-alt mr-2"></i>Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
