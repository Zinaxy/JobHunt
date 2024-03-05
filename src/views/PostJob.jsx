import React from "react";
import CreateJobForm from "../components/CreateJobForm";

const PostJob = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div className="text-start mb-6">
                    <h5 className="dark:text-white font-bold text-2xl">
                        Post Job
                    </h5>
                    <div className="mt-2 text-gray-300">
                        Fill the form below to find your perfect employee
                    </div>
                </div>
                <div className="bg-gray-800 shadow rounded-2xl lg:flex justify-center items-start gap-4">
                    <CreateJobForm />
                </div>
            </div>
        </section>
    );
};

export default PostJob;
