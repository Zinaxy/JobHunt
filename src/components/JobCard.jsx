import React from "react";
import { IoLogoMicrosoft } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const JobCard = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6">
                <span className="text-gray-900 dark:text-white font-bold md:text-2xl tracking-wide">
                    Latest Jobs
                </span>
                <span className="text-gray-700 dark:text-gray-400 font-bold md:text-lg">
                    250,567 Results Found
                </span>
            </div>
            <div class="w-full p-4 my-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:border-orange-600">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex justify-between items-center  p-4 w-full lg:w-2/12">
                        <IoLogoMicrosoft size={50} className="text-sky-600" />
                        <Link className="lg:hidden bg-gray-500 text-white px-3 py-3 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400">
                            <span className="mr-2 ">View Job</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>
                    <div className="text-start w-full lg:w-8/12">
                        {" "}
                        <p className="ont-bold text-gray-900 dark:text-white">
                            Microsoft{" "}
                            <span className="text-gray-400">(Gweru)</span>
                        </p>
                        <h5 class="mb-2 text-lg lg:text-3xl font-bold text-gray-900 dark:text-white">
                            Work fast from anywhere
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-1">
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                Full Time
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                $50 000{" "}
                                <span className="text-orange-600">-</span> $100
                                000 <span className="text-orange-600">/ m</span>
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                <svg
                                    class="w-2.5 h-2.5 me-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                3 days ago
                            </span>
                        </div>
                    </div>
                    <div className="hidden lg:block justify-end w-full lg:w-2/12 mt-6 lg:mt-0">
                        <Link className="bg-gray-500 text-white px-3 py-4 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400">
                            <span className="">View Job</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div class="w-full p-4 my-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:border-orange-600">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex justify-between items-center  p-4 w-full lg:w-2/12">
                        <IoLogoMicrosoft size={50} className="text-sky-600" />
                        <Link className="lg:hidden bg-gray-500 text-white px-3 py-3 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400">
                            <span className="mr-2 ">View Job</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>
                    <div className="text-start w-full lg:w-8/12">
                        {" "}
                        <p className="ont-bold text-gray-900 dark:text-white">
                            Microsoft{" "}
                            <span className="text-gray-400">(Gweru)</span>
                        </p>
                        <h5 class="mb-2 text-lg lg:text-3xl font-bold text-gray-900 dark:text-white">
                            Work fast from anywhere
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-1">
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                Full Time
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                $50 000{" "}
                                <span className="text-orange-600">-</span> $100
                                000 <span className="text-orange-600">/ m</span>
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                <svg
                                    class="w-2.5 h-2.5 me-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                3 days ago
                            </span>
                        </div>
                    </div>
                    <div className="hidden lg:block justify-end w-full lg:w-2/12 mt-6 lg:mt-0">
                        <Link className="bg-gray-500 text-white px-3 py-4 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400">
                            <span className="">View Job</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div class="w-full p-4 my-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:border-orange-600">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex justify-between items-center  p-4 w-full lg:w-2/12">
                        <IoLogoMicrosoft size={50} className="text-sky-600" />
                        <Link className="lg:hidden bg-gray-500 text-white px-3 py-3 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400">
                            <span className="mr-2 ">View Job</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>
                    <div className="text-start w-full lg:w-8/12">
                        {" "}
                        <p className="ont-bold text-gray-900 dark:text-white">
                            Microsoft{" "}
                            <span className="text-gray-400">(Gweru)</span>
                        </p>
                        <h5 class="mb-2 text-lg lg:text-3xl font-bold text-gray-900 dark:text-white">
                            Work fast from anywhere
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-1">
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                Full Time
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                $50 000{" "}
                                <span className="text-orange-600">-</span> $100
                                000 <span className="text-orange-600">/ m</span>
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                <svg
                                    class="w-2.5 h-2.5 me-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                3 days ago
                            </span>
                        </div>
                    </div>
                    <div className="hidden lg:block justify-end w-full lg:w-2/12 mt-6 lg:mt-0">
                        <Link className="bg-gray-500 text-white px-3 py-4 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400">
                            <span className="">View Job</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
