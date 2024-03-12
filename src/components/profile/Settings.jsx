import React from 'react';
import { profile } from '../../assets';
import { RiImageEditLine } from 'react-icons/ri';

const Settings = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <>
      <div className='pt-8 space-x-8'>
        <div>
          <h5 className='mb-3 text-gray-900 fs-17 fw-semibold dark:text-gray-50'>
            My Account
          </h5>
          {/* form profile */}
          <form action='' className=''>
            {' '}
            <div className='text-center'>
              <div className='relative mb-4'>
                <img
                  src={profile}
                  className='w-40 h-40 p-1 mx-auto border-2 rounded-full border-gray-100/50 dark:border-neutral-600'
                  id='profile-img'
                  alt=''
                />
                <div className='absolute  leading-8 text-center rounded-full shadow-md bottom-2 right-[36%] z-40 bg-orange-600 dark:bg-orange-400 text-white cursor-pointer'>
                  <input
                    id='profile-img-file-input'
                    type='file'
                    className='hidden'
                  />
                  <label
                    htmlFor='profile-img-file-input'
                    className='flex justify-center items-center py-1.5 px-1.5'
                  >
                    <RiImageEditLine size={20} className='mr-2' />
                    Edit profile
                  </label>
                </div>
              </div>
              <div className='mt-2 text-right'>
                <button
                  type='submit'
                  className='px-4 py-3 text-white bg-orange-600 rounded'
                >
                  Update Thumbnail
                </button>
              </div>
            </div>
          </form>

          {/* form profile */}
          <form action='' className=''>
            {' '}
            <div className='mt-5'>
              <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='mb-3'>
                    <label
                      htmlFor='firstName'
                      className='text-sm text-gray-900 dark:text-gray-50'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      className={myClasses}
                      id='firstName'
                      value='Jansh'
                    />
                  </div>
                </div>
                {/* <!--end col-->*/}
                <div className='col-span-12 lg:col-span-6'>
                  <div className='mb-3'>
                    <label
                      htmlFor='lastName'
                      className='text-sm text-gray-900 dark:text-gray-50'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      className={myClasses}
                      id='lastName'
                      value='Dickens'
                    />
                  </div>
                </div>
                {/* <!--end col-->*/}
                <div className='col-span-12 lg:col-span-6'>
                  <div className='mb-3'>
                    <label
                      htmlFor='choices-single-categories'
                      className='text-sm text-gray-900 dark:text-gray-50'
                    >
                      Account Type
                    </label>
                    <div className='mt-1'>
                      <select
                        className={selectClass}
                        name='choices-single-categories'
                        id='choices-single-categories'
                        aria-label='Default select example'
                      >
                        <option value='4'>Accounting</option>
                        <option value='1'>IT & Software</option>
                        <option value='3'>Marketing</option>
                        <option value='5'>Banking</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!--end col-->*/}
                <div className='col-span-12 lg:col-span-6'>
                  <div className='mb-3'>
                    <label
                      htmlFor='email'
                      className='text-sm text-gray-900 dark:text-gray-50'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      className={myClasses}
                      id='email'
                      value='Jansh@gmail.com'
                    />
                  </div>
                </div>
                {/* <!--end col-->*/}
              </div>
              <div className='mt-2 text-right'>
                <button
                  type='submit'
                  className='px-4 py-3 text-white bg-orange-600 rounded'
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
          {/* <!--end row-->*/}
        </div>
        {/* <!--end account-->*/}

        {/* <!--end profile-->*/}
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
        {/* <!--end socia-media-->*/}
      </div>
    </>
  );
};

export default Settings;
