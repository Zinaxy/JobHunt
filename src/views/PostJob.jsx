import React from 'react';
import CreateJobForm from '../components/CreateJobForm';
import MainContent from '../components/layouts/MainContent';

const PostJob = () => {
  return (
    <MainContent>
      {' '}
      <section className='bg-white dark:bg-gray-900'>
        <div className=' px-4 mx-auto max-w-screen-xl text-center'>
          <div className='text-start mb-6'>
            <h5 className='dark:text-white font-bold text-2xl'>Post Job</h5>
            <div className='mt-2 text-gray-600 dark:text-gray-300'>
              Fill the form below to find your perfect Employee
            </div>
          </div>
          <div className='bg-transparent border border-gray-600 shadow rounded lg:flex justify-center items-start gap-4'>
            <CreateJobForm />
          </div>
        </div>
      </section>
    </MainContent>
  );
};

export default PostJob;
