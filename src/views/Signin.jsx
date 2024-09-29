import React, { useState, useRef } from 'react';
import { TbLoader3 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../utils/FetchApi';

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken, setUser } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axiosClient
      .post('/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        setLoading(false);
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.message);
        }
      });
  };
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
          Sign In and get access to all the features of JobHunt
        </p>
      </div>
      <form onSubmit={handleLogin} className='mt-8'>
        {errors && (
          <div className='flex justify-center items-center py-3 rounded text-center my-2 bg-red-400 text-white font-bold'>
            <p>{errors}</p>
          </div>
        )}
        <div className='mb-5'>
          <label htmlFor='passwordInput' className='dark:text-white'>
            Email
          </label>
          <input
            ref={emailRef}
            type='email'
            className={myClasses}
            required
            id='emailInput'
            placeholder='Enter your email'
          />
          {errors && errors.email && (
            <span className='text-red-600 text-sm'>{errors.email[0]}</span>
          )}
        </div>
        <div className='mb-5'>
          <label htmlFor='emailInput' className='dark:text-white'>
            Password
          </label>
          <input
            ref={passwordRef}
            type='password'
            className={myClasses}
            id='passwordInput'
            required
            placeholder='Enter your password'
          />
          {errors && errors.password && (
            <span className='text-red-600 text-sm'>{errors.password[0]}</span>
          )}
        </div>

        <div className='my-5 text-center'>
          <button
            type='submit'
            className='btn w-full bg-orange-600 px-3 py-2 rounded text-white font-medium border-transparent hover:-translate-y-1.5 duration-500 ease'
          >
            {isLoading ? (
              <span className='flex justify-center items-center gap-4'>
                Authanticating
                <TbLoader3 size={20} className='animate-spin' />
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
        </div>
      </form>
      <div className='text-center'>
        <p className='dark:text-white'>
          Not Registered ?{' '}
          <Link
            to='/signup'
            className='dark:text-white underline font-bold hover:text-orange-600'
          >
            {' '}
            Sign Up{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
