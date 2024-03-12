import React from 'react';

const Resume = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <>
      {' '}
      <div className='mt-4'>
        <h5 className='mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50'>
          Profile
        </h5>
        <div className='grid grid-cols-12 gap-5'>
          {/* introduction */}
          <div className='col-span-12'>
            <form action='' className=''>
              {' '}
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label dark:text-gray-300'
                >
                  Introduce Yourself
                </label>
                <textarea
                  className={myClasses}
                  id='exampleFormControlTextarea1'
                  rows='5'
                >
                  Developer with over 5 years' experience working in both the
                  public and private sectors. Diplomatic, personable, and adept
                  at managing sensitive situations. Highly organized,
                  self-motivated, and proficient with computers. Looking to
                  boost students’ satisfactions scores for International
                  University. Bachelor's degree in communications.
                </textarea>
              </div>
              <div className='mt-2 text-right'>
                <button
                  type='submit'
                  className='px-4 py-3 text-white bg-orange-600 rounded'
                >
                  Update Summary
                </button>
              </div>
            </form>
          </div>
          {/* <!--end col-->*/}
        </div>
        {/* <!--end row-->*/}
      </div>
    </>
  );
};

export default Resume;
