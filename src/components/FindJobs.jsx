import React, { useEffect, useState } from "react";
import axiosClient from "../utils/FetchApi";
import MenuSide from "./MenuSide";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import SkeletonInfoProfile from "../components/SkeletonInfoProfile";

const FindJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axiosClient.get("/jobs").then(({ data }) => {
            setLoading(false);
            setJobs(data.jobs);
            console.log(data);
        });
    }, []);
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div className="lg:flex justify-center items-start gap-4">
                    <MenuSide />
                    <div className="w-full">
                        {" "}
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-900 dark:text-white font-bold md:text-2xl tracking-wide">
                                Latest Jobs
                            </span>
                            <span className="text-gray-700 dark:text-gray-400 font-bold md:text-lg">
                                {jobs.length} Available Jobs
                            </span>
                        </div>
                        {isLoading ? (
                            <SkeletonInfoProfile />
                        ) : jobs.length === 0 ? (
                            <div className="bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded">
                                No Jobs Available
                            </div>
                        ) : (
                            jobs
                                .slice(0, 6)
                                .map((item, index) => (
                                    <JobCard
                                        key={index}
                                        companyNamej={item.companyName}
                                        locationj={item.location}
                                        jobTitlej={item.jobTitle}
                                        jobTypej={item.jobType}
                                        salaryRangej={item.salaryRange}
                                        timePosted={item.created_at}
                                        linkTo={`/viewjob/${item.id}`}
                                    />
                                ))
                        )}
                    </div>
                </div>
                <div className="flex justify-end text-center">
                    <Link
                        to={"/findjobs"}
                        className="text-orange-600 hover:text-orange-300 text-2xl underline"
                    >
                        View More Jobs
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FindJobs;
