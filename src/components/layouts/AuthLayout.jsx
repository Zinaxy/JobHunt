import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavHeader from "../NavHeader";
import Footer from "../Footer";
import { useStateContext } from "../../context/ContextProvider";

const AuthLayout = () => {
    const { user, setUser, token, setToken, notification, setNotification } =
        useStateContext();

    useEffect(() => {
        // Effect to automatically logout after 1 hour if token is present
        if (token) {
            const logoutTimeout = setTimeout(() => {
                setUser({});
                setToken(null);
                setNotification("Session Expired");
            }, 3600000);

            return () => clearTimeout(logoutTimeout); // Clear timeout on unmount or token change
        }
    }, [token, setUser, setToken, setNotification]);

    if (!token) {
        setNotification("Please Login First");
        return <Navigate to="/signin" />;
    }
    return (
        <div className="bg-white dark:bg-gray-900">
            <NavHeader />
            <Outlet />
            <div id="footer" className="mb-0">
                <Footer />
            </div>
            {notification && (
                <div id="notification" className="">
                    <div
                        id="toast-success"
                        className="fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-white bg-orange-600 rounded-lg shadow  dark:bg-orange-800"
                        role="alert"
                    >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg
                                className="w-5 h-5"
                                ariaHidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            {notification}
                        </div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            data-dismiss-target="#toast-success"
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthLayout;
