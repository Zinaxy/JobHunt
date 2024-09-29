import React from 'react';
import { IoLogoMicrosoft } from 'react-icons/io5';
import { SiGooglemaps } from 'react-icons/si';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { companyLogo } from '../assets';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const JobCard = ({
  companyNamej,
  locationj,
  salaryRangej,
  timePosted,
  jobTitlej,
  jobTypej,
  linkTo,
}) => {
  return (
    <div className='w-full hover:-translate-y-1.5 transition-all duration-500 ease-in-out'>
      <div className='w-full p-4 my-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:border-orange-600 hover:dark:border-orange-400'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex justify-between items-center  p-4 w-full lg:w-2/12'>
            <img
              src={companyLogo}
              alt=''
              className='bg-orange-600 p-2 rounded'
            />
            <Link
              to={linkTo}
              className='lg:hidden bg-transparent  text-orange-600 px-3 py-3 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400'
            >
              <span className='mr-2 '>View Job</span>
              <IoMdArrowRoundForward />
            </Link>
          </div>
          <div className='text-start w-full lg:w-8/12'>
            {' '}
            <p className='ont-bold text-gray-900 dark:text-white flex items-center gap-2'>
              <span className=''>
                <SiGooglemaps />
              </span>
              <span className=''>
                {' '}
                {companyNamej}{' '}
                <span className='text-gray-400'>({locationj})</span>
              </span>
            </p>
            <h5 className='mb-2 text-lg lg:text-3xl font-bold text-gray-900 dark:text-white'>
              {jobTitlej}
            </h5>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:flex gap-1'>
              <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
                {jobTypej}
              </span>
              <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
                {salaryRangej}
                <span className='text-orange-600'></span>
              </span>
              <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
                <svg
                  className='w-2.5 h-2.5 me-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z' />
                </svg>
                {timePosted}
              </span>
            </div>
          </div>
          <div className='hidden lg:block justify-end w-full lg:w-2/12 mt-6 lg:mt-0'>
            <Link
              to={linkTo}
              className='bg-transparent text-gray-800 dark:text-white px-3 py-4 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400'
            >
              <span className=''>View Job</span>
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
