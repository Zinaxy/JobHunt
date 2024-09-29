import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Footer = () => {
  return (
    <footer className='bg-white rounded-lg shadow dark:bg-gray-900 mt-4 mx-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link
            to='/'
            className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            <img src={logo} className='h-20' alt='Flowbite Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'></span>
          </Link>
          <ul className='flex flex-wrap items-center mb-6 text-1xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <Link to='#' className='hover:underline me-4 md:me-6'>
                Home
              </Link>
            </li>
            <li>
              <Link to='#' className='hover:underline me-4 md:me-6'>
                About
              </Link>
            </li>
            <li>
              <Link to='#' className='hover:underline me-4 md:me-6'>
                Find Job
              </Link>
            </li>
            <li>
              <Link to='#' className='hover:underline me-4 md:me-6'>
                Company
              </Link>
            </li>
            <li>
              <Link to='#' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='flex justify-between items-center'>
          <div className=''>
            {' '}
            <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              © 2024{' '}
              <Link to='#' className='hover:underline'>
                Zinaxy™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
          <div className=''>
            <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
              <li>
                <Link to='#' className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline me-4 md:me-6'>
                  Licensing
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline'>
                  Terms and contitions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
