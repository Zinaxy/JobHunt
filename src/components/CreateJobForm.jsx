import React from 'react';

const CreateJobForm = () => {
  /* classess */
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <form className='w-full p-8 text-start '>
      <h5 className='text-start font-bold text-2xl text-white mb-4'>
        User Info
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='name'>
            Your Name
          </label>
          <input className={myClasses} id='name' type='text' placeholder='' />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label className={labelClass} htmlFor='email'>
            Your Email
          </label>
          <input className={myClasses} id='email' type='email' placeholder='' />
        </div>
      </div>
      <h5 className='text-start font-bold text-2xl text-white mb-4'>
        Company Details
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='company'>
            Company Name
          </label>
          <input
            className={myClasses}
            id='company'
            type='text'
            placeholder=''
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='industry'>
            Industry
          </label>
          <div className='relative'>
            <select className={selectClass} id='industry'>
              <option disabled defaultValue={'SELECT INDUSTRIES'}>
                Select Industries
              </option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='location'>
            Location
          </label>
          <input
            className={myClasses}
            id='location'
            type='text'
            placeholder='eg.. Harare'
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            htmlFor='uploadFile1'
            className='bg-orange-600 hover:bg-gray-700 text-white text-sm px-4 py-2.5 my-5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 mr-2 fill-white inline'
              viewBox='0 0 32 32'
            >
              <path
                d='M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z'
                data-original='#000000'
              />
              <path
                d='M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z'
                data-original='#000000'
              />
            </svg>
            Upload your logo
            <input
              type='file'
              id='uploadFile1'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
      </div>

      <h5 className='text-start font-bold text-2xl text-white mb-4'>
        Job Info
      </h5>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='jobTitle'>
            Job Title
          </label>
          <input
            className={myClasses}
            id='jobTitle'
            type='text'
            placeholder='e.g. Senior React Developer'
          />
        </div>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='jobtype'>
            Job Type
          </label>
          <div className='relative'>
            <select className={selectClass} id='jobtype'>
              <option disabled defaultValue={'SELECT JOB TYPE'}>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Interniship</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='salary'>
            Salary Range
          </label>
          <input
            className={myClasses}
            id='salary'
            type='text'
            placeholder='e.g. $50k - $80k'
          />
        </div>
      </div>

      <h5 className='text-start font-bold text-2xl text-white mb-4'>
        Job Description
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea rows={6} className={myClasses} id='description'></textarea>
          <p className='text-gray-600 text-xs italic'>
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <h5 className='text-start font-bold text-2xl text-white mb-4'>
        Responseblities
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea
            rows={6}
            className={myClasses}
            id='responseblities'
          ></textarea>
          <p className='text-gray-600 text-xs italic'>
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <h5 className='text-start font-bold text-2xl text-white mb-4'>
        Exprience
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea rows={6} className={myClasses} id='exprience'></textarea>
          <p className='text-gray-600 text-xs italic'>
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className=''>
        <button className='bg-orange-600 px-10 rounded py-4 text-white font-bold'>
          Post Job
        </button>
      </div>
    </form>
  );
};

export default CreateJobForm;
