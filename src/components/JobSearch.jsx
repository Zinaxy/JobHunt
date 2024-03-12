import React from 'react';

const JobSearch = () => {
  return (
    <div className='flex flex-wrap -mx-2 gap-0 my-10'>
      <div className='w-full md:w-1/3  mb-4'>
        <label
          htmlFor='keywords'
          className='block text-lg font-medium text-gray-700 dark:text-white  mb-1'
        >
          Keywords
        </label>
        <input
          type='text'
          id='keywords'
          className='w-full px-4 py-4 bg-transparent border-2 border-gray-800 dark:border-white rounded-l-md focus:outline-none focus:ring-2 focus:border-orange-500'
          placeholder='e.g., Software Engineer'
        />
      </div>

      <div className='w-full md:w-1/3  mb-4'>
        <label
          htmlFor='location'
          className='block text-lg font-medium text-gray-700 dark:text-white  mb-1'
        >
          Location
        </label>
        <input
          type='text'
          id='location'
          className='w-full px-4 py-4 bg-transparent border-2 border-gray-800 dark:border-white  focus:outline-none focus:ring-2 focus:border-orange-500'
          placeholder='e.g., New York'
        />
      </div>

      <div className='w-full md:w-1/3  mb-4'>
        <label
          htmlFor='description'
          className='block text-lg font-medium text-gray-700 dark:text-white  mb-1'
        >
          Job Description
        </label>
        <input
          type='text'
          id='description'
          className='w-full px-4 py-4 bg-transparent border-2 border-gray-800 dark:border-white rounded-r-md focus:outline-none focus:ring-2 focus:border-orange-500'
          placeholder='e.g., Full-stack Developer'
        />
      </div>

      <div className='w-full px-2 mb-4'>
        <button className='w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500'>
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearch;
