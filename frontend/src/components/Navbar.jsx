import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Logout from '../pages/auth/Logout';

import { getMeAPI } from '../Services/authFunctions'

import {
  checkAuthRequestStart,
  checkAuthRequestSuccess,
  checkAuthRequestFail
} from '../redux/auth/authSlice'

import GlobalSearch from './GlobalSearch';
import Theme from './Theme/Theme';
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
                    `nav-link px-3 ${isActive
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
                    `nav-link px-3 ${isActive
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
                      `nav-link px-3 ${isActive
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

            {/* Global Search */}
            {isAuthenticated && <GlobalSearch />}



            {/* Right Side */}

            <div className="d-flex gap-2">

              {/* <Theme /> */}


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


              <h1>                  </h1>



              {/* Logged In */}

              {isAuthenticated && (
                <>


                  <div className="dropdown">

                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      ⚙️ Settings
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">

                    <li>
                        <div className="dropdown-item">
                          <Theme />
                        </div>
                      </li>

                     <br /> 

                      <li>
                        <NavLink
                          to="/update-password"
                          className="dropdown-item"
                        >
                          🔒 Update Password
                        </NavLink>
                      </li>

                     

                    </ul>

                  </div>

                  <NavLink
                    to="/profile"
                    className="btn btn-outline-primary px-3"
                  >
                    Profile
                  </NavLink>

                  <Logout />
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
