import React from 'react';

const UpdatePassword = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <div className='mt-4'>
      <h5 className='mb-3 font-semibold text-17 dark:text-gray-50'>
        Change Password
      </h5>
      <form action='' className=''>
        {' '}
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12'>
            <div className='mb-3'>
              <label
                htmlFor='current-password-input'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Current password
              </label>
              <input
                type='password'
                className={myClasses}
                placeholder='Enter Current password'
                id='current-password-input'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='new-password-input'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                New password
              </label>
              <input
                type='password'
                className={myClasses}
                placeholder='Enter new password'
                id='new-password-input'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='confirm-password-input'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Confirm Password
              </label>
              <input
                type='password'
                className={myClasses}
                placeholder='Confirm Password'
                id='confirm-password-input'
              />
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12'>
            <div className='form-check'>
              <input
                className='align-middle rounded cursor-pointer focus:ring-0 focus:ring-offset-0 bg-gray-50 border-gray-100/50 checked:bg-violet-500 checked:border-transparent dark:bg-transparent dark:border-neutral-600 dark:checked:bg-violet-500 dark:checked:border-transparent'
                type='checkbox'
                value=''
                id='verification'
              />
              <label
                className='ml-2 align-middle dark:text-gray-300'
                htmlFor='verification'
              >
                Enable Two-Step Verification via email
              </label>
            </div>
          </div>
          {/* <!--end col-->*/}
        </div>{' '}
        <div className='mt-2 text-right'>
          <button
            type='submit'
            className='px-4 py-3 text-white bg-orange-600 rounded'
          >
            Update Password
          </button>
        </div>
      </form>
      {/* <!--end row-->*/}
    </div>
  );
};

export default UpdatePassword;
