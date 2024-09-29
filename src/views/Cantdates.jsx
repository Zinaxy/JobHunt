import React, { useEffect, useState } from 'react';
import MainContent from '../components/layouts/MainContent';
import CandidateCard from '../components/CandidateCard';
import axiosClient from '../utils/FetchApi';
import SkeletonInfoProfile from '../components/SkeletonInfoProfile';

const Cantdates = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      axiosClient
        .get('/users')
        .then(({ data }) => {
          setUsers(data.users);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };
    if (query.length === 0) {
      fetchCandidates();
    }
  }, [query]);

  const filterCandidates = users.filter((candidate) => {
    return (
      (candidate.name &&
        candidate.name
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())) ||
      (candidate.lastName &&
        candidate.lastName
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())) ||
      (candidate.firstName &&
        candidate.firstName
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())) ||
      (candidate.proffesion &&
        candidate.proffesion
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())) ||
      (candidate.dob &&
        candidate.dob
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())) ||
      (candidate.address &&
        candidate.address
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()))
    );
  });

  return (
    <MainContent>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <div className='lg:flex justify-center items-start gap-4'>
          <div className='w-full'>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center mb-6 mt-2'>
              <span className='text-gray-900 dark:text-white font-bold md:text-2xl tracking-wide'>
                Candidates
              </span>
              <form action='#' className='w-full lg:w-8/12'>
                <div className='border-2  bg-transparent rounded-xl items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
                  <div className='relative w-full'>
                    <label
                      htmlFor='search'
                      className='hidden mb-2 text-sm font-medium text-gray-900 '
                    >
                      Search for candidates by name, proffession,address
                    </label>
                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                      <svg
                        className='w-6 h-6 text-gray-800 dark:text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeWidth='2'
                          d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
                        />
                      </svg>
                    </div>
                    <input
                      className='block p-5 pl-10 w-full text-sm text-gray-900 dark:text-gray-200 bg-transparent rounded-lg border-none focus:border-none focus:ring-0cd'
                      placeholder='Filter jobs of your choice'
                      type='search'
                      id='search'
                      required=''
                      onChange={(e) =>
                        setQuery(e.target.value.toLocaleLowerCase())
                      }
                    />
                  </div>
                  {/*  <div className='mr-3'>
                    <button
                      type='submit'
                      className='py-3 px-5 mr-4 w-full text-sm font-medium text-center text-white bg-orange-600 rounded-lg border cursor-pointer bg-primary-700 '
                    >
                      Subscribe
                    </button>
                  </div> */}
                </div>
              </form>
              <span className='text-gray-700 dark:text-gray-400 font-bold md:text-lg'>
                {filterCandidates.length} Results Found
              </span>
            </div>
            {isLoading ? (
              <SkeletonInfoProfile />
            ) : filterCandidates.length === 0 ? (
              <div className='bg-rose-300 text-gray-800 px-3 py-2 w-8/12 rounded'>
                No Candidates Available
              </div>
            ) : (
              filterCandidates.map((item, index) => (
                <CandidateCard
                  key={index}
                  name={`${item.lastName}  ${item.firstName}`}
                  proffession={item.proffesion}
                  // skills={allskills}
                  address={item.address}
                  linkTo={`/view-cantidate-profile/${item.id}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Cantdates;
