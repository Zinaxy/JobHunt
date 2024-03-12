import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  /* classess */
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <div className='flex flex-col justify-center h-full p-12'>
      <div className='text-center'>
        <h5 className='text-[18.5px] dark:text-white'>Let's Get Started</h5>
        <p className='mt-3 dark:text-gray-50'>
          Sign Up and get access to all the features of Jobcy
        </p>
      </div>
      <form action='index.html' className='mt-8'>
        <div className='mb-5'>
          <label htmlFor='usernameInput' className='dark:text-white'>
            Username
          </label>
          <input
            type='text'
            className={myClasses}
            required=''
            id='usernameInput'
            placeholder='Enter your username'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='passwordInput' className='dark:text-white'>
            Email
          </label>
          <input
            type='email'
            className={myClasses}
            required=''
            id='emailInput'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='dark:text-white'>
            Password
          </label>
          <input
            type='password'
            className={myClasses}
            id='passwordInput'
            placeholder='Enter your password'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='confirmPassword' className='dark:text-white'>
            Confirm Password
          </label>
          <input
            type='password'
            className={myClasses}
            id='confirmPassword'
            placeholder='Enter your password confirmation'
          />
        </div>

        <div className='my-5 text-center'>
          <button
            type='submit'
            className='btn w-full bg-orange-600 px-3 py-2 rounded text-white font-medium border-transparent hover:-translate-y-1.5 duration-500 ease'
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className='text-center'>
        <p className='dark:text-white'>
          Already a member ?{' '}
          <Link
            to='/signin'
            className='dark:text-white underline font-bold hover:text-orange-600'
          >
            {' '}
            Sign In{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
