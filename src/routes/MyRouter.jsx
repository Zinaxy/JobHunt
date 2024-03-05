import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import GuestLayout from "../components/layouts/GuestLayout";
import Home from "../views/Home";
import AllJobs from "../views/AllJobs";
import PostJob from "../views/PostJob";
import NotFound from "../views/NotFound";

const MyRouter = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/findjobs" element={<AllJobs />} />
                <Route path="/postjob" element={<PostJob />} />
            </Route>
            <Route element={<GuestLayout />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MyRouter;
