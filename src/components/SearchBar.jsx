import React from 'react';

const SearchBar = () => {
  return (
    <form action='#'>
      <div className='border-2  bg-white rounded-xl items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
        <div className='relative w-full'>
          <label
            htmlFor='email'
            className='hidden mb-2 text-sm font-medium text-gray-900 '
          >
            Email address
          </label>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              className='w-5 h-5 text-orange-500 '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
            </svg>
          </div>
          <input
            className='block p-5 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border-none focus:border-none focus:ring-0cd'
            placeholder='Enter your email'
            type='email'
            id='email'
            required=''
          />
        </div>
        <div className='mr-3'>
          <button
            type='submit'
            className='py-3 px-5 mr-4 w-full text-sm font-medium text-center text-white bg-orange-600 rounded-lg border cursor-pointer bg-primary-700 '
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
        We care about the protection of your data.{' '}
        <a
          href='#'
          className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
        >
          Read our Privacy Policy
        </a>
        .
      </div>
    </form>
  );
};

export default SearchBar;
