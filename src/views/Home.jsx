import React from "react";
import HeroSection from "../components/HeroSection";
import FindJobs from "../components/FindJobs";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
    return (
        <div>
            <div className="">
                {" "}
                <HeroSection />
            </div>
            <div className="">
                <FindJobs />
            </div>
            <div className="">
                <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
