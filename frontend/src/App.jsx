import { useEffect, useState } from 'react'

import './App.css'
import AppRoutes from './Routes/Routes'

import { getMeAPI } from './Services/authFunctions'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkAuthRequestStart,
  checkAuthRequestSuccess,
  checkAuthRequestFail
} from './redux/auth/authSlice'
import LanguageLayout from './components/LanguageLayout'

function App() {
 
    const dispatch = useDispatch();
    const { checkAuthRequest,isAuthenticated } = useSelector((state) => state.auth);


    useEffect(() => {
      if(isAuthenticated){
        checkAuthentication();
      }
    }, []);


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

    const isLoading = checkAuthRequest.loading;

 return (
  <>
    {isLoading && <p> Loading ...</p>}
    <AppRoutes />
        {/* { isAuthenticated && (
            <LanguageLayout />  
        )} */}
  </>
 )
}

export default App
