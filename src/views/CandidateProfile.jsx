import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainContent from '../components/layouts/MainContent';
import axiosClient from '../utils/FetchApi';
import { IoCallOutline } from 'react-icons/io5';
import { FaDownload } from 'react-icons/fa';

const CandidateProfile = () => {
  let { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [user, setCandidate] = useState([]);
  const [education, setEducation] = useState([]);
  const [summary, setSummary] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skill, setSkill] = useState([]);
  const [language, setlanguage] = useState([]);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    axiosClient.get(`users/${id}`).then(({ data }) => {
      setCandidate(data.user);
      setSummary(data.summary);
      setEducation(data.education);
      setExperience(data.experience);
      setSkill(data.skill);
      setlanguage(data.language);
      setUrl(data.url);
    });
  }, []);
  return (
    <MainContent>
      {' '}
      <section className='py-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-y-10 lg:gap-10'>
            <div className='col-span-12 lg:col-span-4'>
              <div className='border rounded border-gray-100/50 dark:border-neutral-600'>
                <div className='p-5 border-b border-gray-100/50 dark:border-neutral-600'>
                  <div className='text-center'>
                    <img
                      src='assets/images/user/img-01.jpg'
                      alt=''
                      className='w-20 h-20 mx-auto rounded-full'
                    />
                    <h6 className='mt-4 mb-0 text-lg text-gray-900 dark:text-gray-50'>
                      {user.firstName}&nbsp;{user.lastName}
                    </h6>
                    <p className='mb-4 text-gray-500 dark:text-gray-300'>
                      {user.proffesion}
                    </p>
                    <ul className='flex justify-center gap-4'>
                      <li className='h-10 w-10 text-center leading-[2.2] bg-gray-50 rounded-full text-lg text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in dark:bg-neutral-700 dark:text-white dark:hover:bg-violet-500/20'>
                        <Link to='#' className='social-link'>
                          <i className='uil uil-twitter-alt'></i>
                        </Link>
                      </li>
                      <li className='h-10 w-10 text-center leading-[2.2] bg-gray-50 rounded-full text-lg text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in dark:bg-neutral-700 dark:text-white dark:hover:bg-violet-500/20'>
                        <Link to='#' className='social-link'>
                          <i className='uil uil-whatsapp'></i>
                        </Link>
                      </li>
                      <li className='h-10 w-10 text-center leading-[2.2] bg-gray-50 rounded-full text-lg text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in dark:bg-neutral-700 dark:text-white dark:hover:bg-violet-500/20'>
                        <Link to='#' className='social-link'>
                          <i className='uil uil-phone-alt'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='p-5 border-b border-gray-100/50 dark:border-neutral-600'>
                  <h6 className='mb-5 font-semibold text-gray-900 text-17 dark:text-gray-50'>
                    Profile Overview
                  </h6>
                  <ul className='space-y-4'>
                    <li>
                      <div className='flex'>
                        <label className='text-gray-900 w-[118px] font-medium dark:text-gray-50'>
                          Email
                        </label>
                        <div>
                          <p className='mb-0 text-gray-500 dark:text-gray-300'>
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex'>
                        <label className='text-gray-900 w-[118px] font-medium dark:text-gray-50'>
                          Phone Number
                        </label>
                        <div>
                          <p className='mb-0 text-gray-500 dark:text-gray-300'>
                            {user.phoneNumber}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex'>
                        <label className='text-gray-900 w-[118px] font-medium dark:text-gray-50'>
                          Gender
                        </label>
                        <div>
                          <p className='mb-0 text-gray-500 dark:text-gray-300'>
                            {user.gender}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex'>
                        <label className='text-gray-900 w-[118px] font-medium dark:text-gray-50'>
                          Address
                        </label>
                        <div>
                          <p className='mb-0 text-gray-500 dark:text-gray-300'>
                            {user.address}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className='mt-8 flex flex-col justify-center items-center w-full gap-3'>
                    <Link
                      to='#'
                      className='px-2 py-2.5 text-center font-bold text-1xl rounded w-full bg-transparent border border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 flex items-center justify-center gap-4'
                    >
                      <IoCallOutline size={20} /> Contact Me
                    </Link>
                    {url === '#' ? (
                      'No CV Uploaded Yet'
                    ) : (
                      <Link
                        to={url}
                        download=''
                        className='px-2 py-2.5 text-center font-bold text-1xl rounded w-full bg-orange-600 text-white border border-orange-600  hover:text-orange-600 hover:bg-transparent flex items-center justify-center gap-4'
                      >
                        <FaDownload size={20} /> Download CV
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* another side */}
            <div className='col-span-12 lg:col-span-8'>
              <div className='p-6 border rounded border-gray-100/50 dark:border-neutral-600'>
                <div>
                  <div>
                    <h5 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
                      About Me
                    </h5>

                    <div className=''>
                      {isLoading ? (
                        'loading'
                      ) : summary.length === 0 ? (
                        <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                          No About info Available
                        </div>
                      ) : (
                        <p className='mt-4 text-gray-600 dark:text-gray-300'>
                          {summary.summaryName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className='pt-5'>
                  <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
                    Education
                  </h6>
                  {isLoading ? (
                    'loading'
                  ) : education.length === 0 ? (
                    <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                      No Education History Available
                    </div>
                  ) : (
                    education.map((item, index) => (
                      <div key={index} className='relative flex mt-5'>
                        {index === education.length - 1 ? null : (
                          <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>
                        )}
                        <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
                          {index + 1}
                        </div>
                        <div className='ml-4'>
                          <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                            {/*  BCA - Bachelor of Computer Applications */}
                            {item.degree}
                          </h6>
                          <p className='mb-2 text-gray-500 dark:text-gray-300'>
                            {item.schoolName} - ({item.startYear} -{' '}
                            {item.endYear})
                          </p>
                          <p className='text-gray-500 dark:text-gray-300'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className='pt-5'>
                  <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
                    Experience
                  </h6>
                  {isLoading ? (
                    'loading'
                  ) : experience.length === 0 ? (
                    <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                      No Experience History Available
                    </div>
                  ) : (
                    experience.map((item, index) => (
                      <div key={index} className='relative flex mt-5'>
                        {index === experience.length - 1 ? null : (
                          <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>
                        )}
                        <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
                          {index + 1}
                        </div>
                        <div className='ml-4'>
                          <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                            {/*  BCA - Bachelor of Computer Applications */}
                            {item.experience}
                          </h6>
                          <p className='mb-2 text-gray-500 dark:text-gray-300'>
                            {item.company} - ({item.startYear} - {item.endYear})
                          </p>
                          <p className='text-gray-500 dark:text-gray-300'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className='mt-6'>
                  <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
                    Professional Skills
                  </h6>
                  {/* skills */}

                  <div className='flex flex-wrap gap-3 mt-3'>
                    {isLoading ? (
                      'loading'
                    ) : skill.length === 0 ? (
                      <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                        No Skills History Available
                      </div>
                    ) : (
                      skill.map((item, index) => (
                        <span
                          key={index}
                          className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'
                        >
                          {item.skillName}
                        </span>
                      ))
                    )}
                  </div>

                  {/* skills form */}
                </div>
                <div className='mt-6'>
                  <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
                    Spoken languages
                  </h6>

                  <div className='flex flex-wrap gap-3 mt-3'>
                    {isLoading ? (
                      'loading'
                    ) : language.length === 0 ? (
                      <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                        No Languages Skills Available
                      </div>
                    ) : (
                      language.map((item, index) => (
                        <span
                          key={index}
                          className='mt-2 text-13 px-2 py-0.5 bg-green-500/20 text-green-500 rounded font-medium'
                        >
                          {item.languageName}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContent>
  );
};

export default CandidateProfile;
