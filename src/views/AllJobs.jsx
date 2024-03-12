import React from 'react';
import MenuSide from '../components/MenuSide';
import JobCard from '../components/JobCard';
import JobSearch from '../components/JobSearch';

const AllJobs = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <div className=''>
          <JobSearch />
        </div>
        <div className='lg:flex justify-center items-start gap-4'>
          <MenuSide />
          <JobCard />
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
