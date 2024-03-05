import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../NavHeader";
import Footer from "../Footer";

const AuthLayout = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <NavHeader />
            <Outlet />
            <div id="footer" className="mb-0">
                <Footer />
            </div>
        </div>
    );
};

export default AuthLayout;
