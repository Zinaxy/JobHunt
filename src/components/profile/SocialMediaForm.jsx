import React from 'react';

const SocialMediaForm = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <form action='' className=''>
      {' '}
      <div className='mt-4'>
        <h5 className='mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50'>
          Social Media
        </h5>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='facebook'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Facebook
              </label>
              <input
                type='text'
                className={myClasses}
                id='facebook'
                value='https://www.facebook.com'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='twitter'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Twitter
              </label>
              <input
                type='text'
                className={myClasses}
                id='twitter'
                value='https://www.twitter.com'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='linkedin'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Linkedin
              </label>
              <input
                type='text'
                className={myClasses}
                id='linkedin'
                value='https://www.linkedin.com'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='whatsapp'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Whatsapp
              </label>
              <input
                type='text'
                className={myClasses}
                id='whatsapp'
                value='https://www.whatsapp.com'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          {/* <!--end Change-password-->*/}
        </div>
        {/* <!--end row-->*/}
        <div className='mt-2 text-right'>
          <button
            type='submit'
            className='px-4 py-3 text-white bg-orange-600 rounded'
          >
            Update Links
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialMediaForm;
