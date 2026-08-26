import React from 'react'
import { Outlet } from "react-router-dom";

import LanguageNavbar from './LanguageNavbar';

const LanguageLayout = () => {
    return (
        <>
            <LanguageNavbar />

            {/* <Outlet /> */}
        </>
    );

}

export default LanguageLayout
