import React from "react";

import MenuSide from "./MenuSide";
import JobCard from "./JobCard";

const FindJobs = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div className="lg:flex justify-center items-start gap-4">
                    <MenuSide />
                    <JobCard />
                </div>
            </div>
        </section>
    );
};

export default FindJobs;
