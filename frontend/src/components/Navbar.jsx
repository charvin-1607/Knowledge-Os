import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import {
  logoutRequestStart,
  logoutRequestSuccess,
  logoutRequestFail
} from "../redux/auth/authSlice";

import { logoutAPI } from "../Services/authFunctions";

import { getMeAPI } from '../Services/authFunctions'

import {
  checkAuthRequestStart,
  checkAuthRequestSuccess,
  checkAuthRequestFail
} from '../redux/auth/authSlice'
import LanguageLayout from './LanguageLayout';


const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { loading } = useSelector(
    (state) => state.auth.logoutRequest
  );


  // useEffect(() => {
  //   if(isAuthenticated){

  //     checkAuthentication();
  //   }
  // }, []);


  const checkAuthentication = async () => {

      dispatch(checkAuthRequestStart());

      try {

          const res = await getMeAPI();

          if (!res || res.error) {
              dispatch(checkAuthRequestFail(res.message || "Authentication check failed"));
              return;
          }

          dispatch(checkAuthRequestSuccess(res));

      } catch (error) {
          dispatch(checkAuthRequestFail(error.message || "Something went wrong during authentication check"));
      }
  }

  // const isLoading = checkAuthRequest.loading;

  const handleLogout = async () => {

    if (!window.confirm("Are you sure you want to logout")) return;
    
    try {

      dispatch(logoutRequestStart());

      const res = await logoutAPI();

      console.log("logout response = ", res);

      if (!res || res.error) {
        dispatch(logoutRequestFail(res));
        alert("inside !res error =" + res.message || "Logout failed");
        return;
      }

      dispatch(logoutRequestSuccess(res));
      alert("inside logout = " + res.message);

      navigate("/");

    } catch (error) {
      dispatch(logoutRequestFail(error.message));
      alert(" inside catch =" + error.message || "Logout failed");

    }

  }



  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom">

      <div className="container">


        {/* Logo */}

        <NavLink
          to="/"
          className="navbar-brand fw-bold text-primary"
        >
          Knowledge OS
        </NavLink>


        {/* Mobile Menu Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        {/* Navbar Content */}

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >


          {/* Navigation Links */}

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


            {/* Home */}

            <li className="nav-item">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "active fw-semibold text-primary"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>

            </li>


            {/* About */}

            <li className="nav-item">

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "active fw-semibold text-primary"
                      : ""
                  }`
                }
              >
                About
              </NavLink>

            </li>


            {/* Logged In */}

            {isAuthenticated && (

              <li className="nav-item">

                <NavLink
                  to="/notes"
                  className={({ isActive }) =>
                    `nav-link px-3 ${
                      isActive
                        ? "active fw-semibold text-primary"
                        : ""
                    }`
                  }
                >
                  Notes
                </NavLink>

              </li>

            )}

          </ul>


          {/* Right Side */}

          <div className="d-flex gap-2">


            {/* Logged Out */}

            {!isAuthenticated && (
              <>

                <NavLink
                  to="/signup"
                  className="btn btn-outline-primary px-3"
                >
                  Signup
                </NavLink>


                <NavLink
                  to="/login"
                  className="btn btn-primary px-4"
                >
                  Login
                </NavLink>

              </>
            )}


            {/* Logged In */}

            {isAuthenticated && (
              <>

                <NavLink
                  to="/profile"
                  className="btn btn-outline-primary px-3"
                >
                  Profile
                </NavLink>


                <button
                  type="button"
                  className="btn btn-danger px-3"
                  onClick={handleLogout}
                  disabled={loading}
                >
                  {loading ? "Logging out..." : "Logout"}
                </button>

              </>
            )}


          </div>

        </div>

      </div>

    </nav>

   
      {/* <div>
        
      {isAuthenticated && (
              
              <LanguageLayout />
          )}

      </div> */}

    

    </>
  );
}




export default Navbar
