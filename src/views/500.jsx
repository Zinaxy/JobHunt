import React from 'react';
import { Link } from 'react-router-dom';

const Server500 = () => {
  return (
    <section className='flex justify-center items-center text-center  bg-white dark:bg-gray-900 h-screen'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-600 dark:text-orange-500'>
            500
          </h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Network Error
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{' '}
          </p>
          <Link
            to='/'
            className='inline-flex text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-orange-900 my-4'
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Server500;
