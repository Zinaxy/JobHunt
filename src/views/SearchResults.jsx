import React, { useEffect, useState } from 'react';
import MenuSide from '../components/MenuSide';
import JobCard from '../components/JobCard';
import JobSearch from '../components/JobSearch';
import axiosClient from '../utils/FetchApi';

const SearchResults = () => {
  const [jobsearch, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get('/search-jobs')
      .then(({ data }) => {
        setLoading(false);
        setJobs(data.jobsearch);
        console.log(data.jobsearch);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <div className=''>
          <JobSearch />
        </div>
        <div className='lg:flex justify-center items-start gap-4'>
          <MenuSide />
          <div className='w-full'>
            {' '}
            <div className='flex justify-between items-center mb-6'>
              <span className='text-gray-900 dark:text-white font-bold md:text-2xl tracking-wide'>
                Search Results
              </span>
              <span className='text-gray-700 dark:text-gray-400 font-bold md:text-lg'>
                {jobsearch.length} Results Found
              </span>
            </div>
            {isLoading ? (
              'Loading....'
            ) : jobsearch.length === 0 ? (
              <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                No Jobs Available
              </div>
            ) : (
              jobsearch.map((item, index) => (
                <JobCard
                  key={index}
                  companyNamej={item.companyName}
                  locationj={item.location}
                  jobTitlej={item.jobTitle}
                  jobTypej={item.jobType}
                  salaryRangej={item.salaryRange}
                  timePosted={item.created_at}
                  linkTo={`viewjob/${item.id}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
