import { FaEdit, FaPlus } from "react-icons/fa";
import Education from "./Education";
import { useState, useEffect } from "react";
import Experience from "./Exprience";
import Skills from "./Skills";
import Languages from "./Languages";
import LanguagesAll from "./LanguagesPage";
import axiosClient from "../../utils/FetchApi";
import Summary from "./Summary";

const AboutInfo = () => {
    const [summaryTab, setSummaryTab] = useState(true);
    const [summary, setSummary] = useState([]);

    const [educationTab, setEducationTab] = useState(true);
    const [education, setEducation] = useState([]);

    const [exprienceTab, setExprienceTab] = useState(true);
    const [experience, setExperience] = useState([]);

    const [skillsExpanded, setSkills] = useState(true);
    const [skill, setSkill] = useState([]);

    const [language, setLanguage] = useState([]);
    const [languagesExpanded, setLanguages] = useState(true);

    const [loading, setLoading] = useState(true);

    const handleSummary = () => {
        setSummaryTab(!summaryTab);
    };

    const handleEducation = () => {
        setEducationTab(!educationTab);
    };

    const handleExprience = () => {
        setExprienceTab(!exprienceTab);
    };
    const handleSkills = () => {
        setSkills(!skillsExpanded);
    };
    const handleLanguages = () => {
        setLanguages(!languagesExpanded);
    };

    /* get summary info */
    useEffect(() => {
        getSummary();
        setLoading(false);
    }, []);
    const getSummary = () => {
        axiosClient
            .get("/summary")
            .then(({ data }) => {
                setSummary(data.summary);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    /* get education info */
    useEffect(() => {
        getEducation();
        setLoading(false);
    }, []);
    const getEducation = () => {
        axiosClient
            .get("/education")
            .then(({ data }) => {
                setEducation(data.education);
            })
            .catch(() => {});
    };
    /* get experience info */
    useEffect(() => {
        setLoading(true);
        getExperience();
        setLoading(false);
    }, []);
    const getExperience = () => {
        axiosClient
            .get("/experience")
            .then(({ data }) => {
                setExperience(data.experience);
            })
            .catch(() => {});
    };
    /* get skill info */
    useEffect(() => {
        setLoading(true);
        getSkill();
        setLoading(false);
    }, []);
    const getSkill = () => {
        axiosClient
            .get("/skill")
            .then(({ data }) => {
                setSkill(data.skill);
            })
            .catch(() => {});
    };
    /* get language info */
    useEffect(() => {
        setLoading(true);
        getLanguage();
        setLoading(false);
    }, []);
    const getLanguage = () => {
        axiosClient
            .get("/language")
            .then(({ data }) => {
                setLanguage(data.language);
            })
            .catch(() => {});
    };
    return (
        <>
            <div className="">
                {" "}
                <div className="mt-2 space-y-8">
                    <div>
                        <h5 className="text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center">
                            Summary
                            <div className="">
                                <button
                                    onClick={handleSummary}
                                    className="px-2 py-2 bg-orange-600 flex items-center rounded-full text-white"
                                >
                                    <FaEdit size={20} />
                                </button>
                            </div>
                        </h5>
                        {summaryTab ? (
                            <div className="">
                                {loading ? (
                                    "loading"
                                ) : summary.length === 0 ? (
                                    <div className="bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded">
                                        No summarys info Available
                                    </div>
                                ) : (
                                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                                        {summary.summaryName}
                                    </p>
                                )}{" "}
                            </div>
                        ) : (
                            <Summary />
                        )}
                    </div>
                </div>
                <div className="mt-6">
                    <h6 className="text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center">
                        Education
                        <div className="">
                            <button
                                onClick={handleEducation}
                                className="px-2 py-2 bg-orange-600 flex items-center rounded-full text-white"
                            >
                                <FaPlus size={20} />
                            </button>
                        </div>
                    </h6>
                    <div className={educationTab ? "" : "hidden"}>
                        {loading ? (
                            "loading"
                        ) : education.length === 0 ? (
                            <div className="bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded">
                                No Education History Available
                            </div>
                        ) : (
                            education.map((item, index) => (
                                <div key={index} className="relative flex mt-5">
                                    {index === education.length - 1 ? null : (
                                        <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>
                                    )}
                                    <div className="w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500">
                                        {index + 1}
                                    </div>
                                    <div className="ml-4">
                                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">
                                            {/*  BCA - Bachelor of Computer Applications */}
                                            {item.degree}
                                        </h6>
                                        <p className="mb-2 text-gray-500 dark:text-gray-300">
                                            {item.schoolName} - (
                                            {item.startYear} - {item.endYear})
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className={educationTab ? "hidden" : ""}>
                        <Education />
                    </div>
                </div>
                {/* expriences */}
                <div className="mt-6">
                    <h6 className="text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center">
                        Experiences
                        <div className="">
                            <button
                                onClick={handleExprience}
                                className="px-2 py-2 bg-orange-600 flex items-center rounded-full text-white"
                            >
                                <FaPlus size={20} />
                            </button>
                        </div>
                    </h6>
                    {/* exprience details */}
                    <div className={exprienceTab ? "" : "hidden"}>
                        {experience.length === 0 ? (
                            <div className="bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded">
                                No Experience History Available
                            </div>
                        ) : (
                            experience.map((item, index) => (
                                <div key={index} className="relative flex mt-5">
                                    {index === experience.length - 1 ? null : (
                                        <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>
                                    )}
                                    <div className="w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500">
                                        {index + 1}
                                    </div>
                                    <div className="ml-4">
                                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">
                                            {/*  BCA - Bachelor of Computer Applications */}
                                            {item.experience}
                                        </h6>
                                        <p className="mb-2 text-gray-500 dark:text-gray-300">
                                            {item.company} - ({item.startYear} -{" "}
                                            {item.endYear})
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {/* exprience form */}
                    <div className={exprienceTab ? "hidden" : ""}>
                        <Experience />
                    </div>
                </div>
                <div className="mt-6">
                    <h6 className="text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center">
                        Skills
                        <button
                            onClick={handleSkills}
                            className="px-2 py-2 bg-orange-600 flex items-center rounded-full text-white"
                        >
                            <FaPlus size={20} />
                        </button>
                    </h6>
                    {/* skills */}
                    <div className={skillsExpanded ? "" : "hidden"}>
                        {" "}
                        <div className="flex flex-wrap gap-3 mt-3">
                            {loading ? (
                                "loading"
                            ) : skill.length === 0 ? (
                                <div className="bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded">
                                    No Skills History Available
                                </div>
                            ) : (
                                skill.map((item, index) => (
                                    <span
                                        key={index}
                                        className="mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium"
                                    >
                                        {item.skillName}
                                    </span>
                                ))
                            )}
                        </div>
                    </div>
                    {/* skills form */}
                    <div className={skillsExpanded ? "hidden" : ""}>
                        <Skills />
                    </div>
                </div>
                <div className="mt-6">
                    <h6 className="text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center">
                        Spoken languages
                        <button
                            onClick={handleLanguages}
                            className="px-2 py-2 bg-orange-600 flex items-center rounded-full text-white"
                        >
                            <FaPlus size={20} />
                        </button>
                    </h6>
                    <div className={languagesExpanded ? "" : "hidden"}>
                        {" "}
                        <div className="flex flex-wrap gap-3 mt-3">
                            {loading ? (
                                "loading"
                            ) : language.length === 0 ? (
                                <div className="bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded">
                                    No Languages Skills Available
                                </div>
                            ) : (
                                language.map((item, index) => (
                                    <span
                                        key={index}
                                        className="mt-2 text-13 px-2 py-0.5 bg-green-500/20 text-green-500 rounded font-medium"
                                    >
                                        {item.languageName}
                                    </span>
                                ))
                            )}
                        </div>
                    </div>
                    <div className={languagesExpanded ? "hidden" : ""}>
                        <LanguagesAll />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutInfo;
