import React, { useState } from 'react';
import axiosClient from '../utils/FetchApi';
import { useNavigate } from 'react-router-dom';

const JobSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to your Laravel API
      const response = await axiosClient.post('/search-jobs', {
        keywords,
        location,
        description,
      });

      // Construct the search query string
      const searchQuery = `?keywords=${keywords}&location=${location}&description=${description}`;

      // Navigate to the search results component with the search query
      navigate(`/findjobs${searchQuery}`);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <div className='flex flex-wrap -mx-2 gap-0 my-10'>
        <div className='w-full md:w-1/3 mb-4'>
          <label
            htmlFor='keywords'
            className='block text-lg font-medium text-gray-700 dark:text-white  mb-1'
          >
            Keywords
          </label>
          <input
            type='text'
            id='keywords'
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className='w-full px-4 py-4 bg-transparent border-2 border-gray-800 dark:border-white rounded-l-md focus:outline-none focus:ring-2 focus:border-orange-500'
            placeholder='e.g., Software Engineer'
          />
        </div>

        <div className='w-full md:w-1/3 mb-4'>
          <label
            htmlFor='location'
            className='block text-lg font-medium text-gray-700 dark:text-white  mb-1'
          >
            Location
          </label>
          <input
            type='text'
            id='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='w-full px-4 py-4 bg-transparent border-2 border-gray-800 dark:border-white  focus:outline-none focus:ring-2 focus:border-orange-500'
            placeholder='e.g., New York'
          />
        </div>

        <div className='w-full md:w-1/3 mb-4'>
          <label
            htmlFor='description'
            className='block text-lg font-medium text-gray-700 dark:text-white  mb-1'
          >
            Job Description
          </label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full px-4 py-4 bg-transparent border-2 border-gray-800 dark:border-white rounded-r-md focus:outline-none focus:ring-2 focus:border-orange-500'
            placeholder='e.g., Full-stack Developer'
          />
        </div>

        <div className='w-full px-2 mb-4'>
          <button
            type='submit'
            className='w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500'
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobSearch;
