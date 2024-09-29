import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../utils/FetchApi';
import MainContent from '../components/layouts/MainContent';
import { GoDot } from 'react-icons/go';
import { companyLogo } from '../assets';
import { FaRegCircle, FaRegDotCircle, FaRegStar } from 'react-icons/fa';
import { PiShareFatLight } from 'react-icons/pi';
import SkeletonInfoProfile from '../components/SkeletonInfoProfile';

const SingleJob = () => {
  let { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient
        .get(`/jobs/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setJob(data.job);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message); // Or handle error as needed
        });
    }
  }, [id]);
  return (
    <MainContent>
      <div className='flex items-center justify-center gap-2'>
        <div className='border p-8 border-gray-600 rounded w-full lg:w-8/12'>
          {isLoading ? (
            <SkeletonInfoProfile />
          ) : (
            job && (
              <div className='p-6'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-12 lg:col-span-8'>
                    <div className='flex gap-6 items-center'>
                      <img
                        src={companyLogo}
                        alt=''
                        loading='lazzy'
                        className='bg-orange-600 p-2 rounded w-2/12'
                      />
                      <div className=''>
                        {' '}
                        <h5 className='mb-1 text-gray-900 dark:text-gray-50 text-3xl font-bold'>
                          {job.companyName}
                        </h5>
                        <h5 className='mb-1 text-gray-900 dark:text-gray-50'>
                          {job.jobTitle}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-12 lg:col-span-4'>
                    <div className='flex gap-3 md:justify-end'>
                      <div className='text-center '>
                        <i className='font-bold dark:text-orange-600'>
                          {' '}
                          Posted {job.created_at}
                        </i>
                      </div>
                      <div className='text-center '></div>
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-12 mt-8 gap-y-3 lg:gap-3'>
                  <div className='col-span-12 lg:col-span-3'>
                    <div className='p-4 border rounded border-gray-100/50 dark:border-neutral-600/80'>
                      <p className='mb-1 text-gray-500 dark:text-gray-300 text-13'>
                        Location
                      </p>
                      <p className='font-medium text-gray-900 dark:text-gray-50'>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <div className='col-span-12 lg:col-span-3'>
                    <div className='p-4 border rounded border-gray-100/50 dark:border-neutral-600/80'>
                      <p className='mb-1 text-gray-500 dark:text-gray-300 text-13'>
                        Employee type
                      </p>
                      <p className='font-medium text-gray-900 dark:text-gray-50'>
                        {job.jobType}
                      </p>
                    </div>
                  </div>
                  <div className='col-span-12 lg:col-span-3'>
                    <div className='p-4 border rounded border-red-600/50 dark:border-neutral-600/80'>
                      <p className='mb-1 text-red-500 dark:text-red-300 text-13'>
                        Expire On
                      </p>
                      <p className='font-medium text-red-900 dark:text-red-50'>
                        {job.expireDate}
                      </p>
                    </div>
                  </div>
                  <div className='col-span-12 lg:col-span-3'>
                    <div className='p-4 border rounded border-gray-100/50 dark:border-neutral-600/80'>
                      <p className='mb-1 text-gray-500 dark:text-gray-300 text-13'>
                        Offer Salary
                      </p>
                      <p className='font-medium text-gray-900 dark:text-gray-50'>
                        {job.salaryRange}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-5'>
                  <h5 className='mb-3 text-gray-600 dark:text-gray-200 font-bold text-1xl'>
                    Job Description
                  </h5>
                  <div>
                    <p className='mb-0 text-gray-500 dark:text-gray-300'>
                      {job.description}
                    </p>
                  </div>
                </div>

                <div className='mt-5'>
                  <h5 className='mb-3 text-gray-600 dark:text-gray-200 font-bold text-1xl'>
                    Responsibilities
                  </h5>
                  <div>
                    <ul className='mb-0 text-gray-500 dark:text-gray-300'>
                      {job.responsiblities.split(',').map((item, index) => (
                        <li
                          key={index}
                          className='mb-2 text-gray-500 dark:text-gray-300 flex'
                        >
                          <FaRegCircle className='mr-2 mt-2' size={10} />{' '}
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='mt-5'>
                  <h5 className='mb-3 text-gray-600 dark:text-gray-200 font-bold text-1xl'>
                    Qualification
                  </h5>
                  <div>
                    <ul className='mb-0 text-gray-500 dark:text-gray-300'>
                      {job.qualifications.split(',').map((item, index) => (
                        <li
                          key={index}
                          className='mb-2 text-gray-500 dark:text-gray-300 flex'
                        >
                          <FaRegCircle className='mr-2 mt-2' size={10} />{' '}
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='mt-5'>
                  <h5 className='mb-3 text-gray-600 dark:text-gray-200 font-bold text-1xl'>
                    Skill & Experience
                  </h5>
                  <div>
                    <ul className='mb-0 text-gray-500 dark:text-gray-300'>
                      {job.desireSkills.split(',').map((item, index) => (
                        <li
                          key={index}
                          className='mb-2 text-gray-500 dark:text-gray-300 flex'
                        >
                          <FaRegCircle className='mr-2 mt-2' size={10} />{' '}
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='mt-5'>
                  <h5 className='mb-3 text-gray-900 dark:text-gray-50 font-bold text-1xl'>
                    APPLY
                  </h5>
                  <div>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center dark:text-gray-200'>
                        EMAIL: {job.email}
                      </div>
                      <div className='w-2/12'>
                        <Link
                          to={`mailto:${job.email}?subject=Application%/20For%20${job.jobTitle}%20Role&body=Body%20Here`}
                          target='_blank'
                          className='flex justify-center items-center gap-4 px-2 py-2.5 text-white bg-orange-600 font-bold rounded hover:bg-orange-400'
                        >
                          <span className=''>Apply</span>
                          <PiShareFatLight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </MainContent>
  );
};

export default SingleJob;
