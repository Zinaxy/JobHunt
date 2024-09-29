import React, { useEffect, useState } from 'react';
import { profile } from '../assets';
import axiosClient from '../utils/FetchApi';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { SiGooglemaps } from 'react-icons/si';
import { FaRegUserCircle } from 'react-icons/fa';

const CandidateCard = ({ name, proffession, address, skills, linkTo }) => {
  return (
    <div className='w-full hover:-translate-y-1.5 transition-all duration-500 ease-in-out'>
      <div className='w-full p-4 my-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:border-orange-600'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex justify-between items-center  p-4 w-full lg:w-2/12'>
            <img
              src={profile}
              alt=''
              className='bg-orange-600 p-2 rounded max-h-16'
            />
            <Link
              to={linkTo}
              className='lg:hidden bg-transparent  text-orange-600 px-3 py-3 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400'
            >
              <span className='mr-2 '>View Profile</span>
              <IoMdArrowRoundForward />
            </Link>
          </div>
          <div className='text-start w-full lg:w-8/12'>
            {' '}
            <p className='ont-bold text-gray-900 dark:text-white flex items-center gap-2'>
              <span className=''>
                <FaRegUserCircle />
              </span>
              <span className=''>
                {' '}
                {name}{' '}
                {/* <span className='text-gray-400'>({locationj})</span> */}
              </span>
            </p>
            <h5 className='mb-2 text-lg lg:text-3xl font-bold text-gray-900 dark:text-white'>
              {proffession}
            </h5>
            <div className='mt-2'>
              {' '}
              <p className='ont-bold text-gray-900 dark:text-white flex items-center gap-2'>
                <span className=''>
                  <SiGooglemaps />
                </span>
                <span className=''>
                  {' '}
                  {address}{' '}
                  {/* <span className='text-gray-400'>({locationj})</span> */}
                </span>
              </p>
            </div>
          </div>
          {/*  <div className='grid grid-cols-2 md:grid-cols-3 lg:flex gap-1'>
            {skills}
          </div> */}
          <div className='hidden lg:block justify-end w-full lg:w-2/12 mt-6 lg:mt-0'>
            <Link
              to={linkTo}
              className='bg-transparent text-gray-800 dark:text-white px-3 py-4 text-lg rounded-lg font-bold flex justify-between border border-orange-600 items-center hover:bg-orange-400'
            >
              <span className=''>View Profile</span>
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
