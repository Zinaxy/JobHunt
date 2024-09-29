import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../utils/FetchApi';
import { useStateContext } from '../context/ContextProvider';
import { TbLoader3 } from 'react-icons/tb';

const Signup = () => {
  /* classess */
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setToken, setUser } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosClient
      .post('/register', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        setNotification('Registration successfull');
      })
      .catch((err) => {
        setLoading(false);
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };
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

      <form onSubmit={handleRegister} className='mt-8'>
        <div className='mb-5'>
          <label htmlFor='usernameInput' className='dark:text-white'>
            Username
          </label>
          <input
            ref={nameRef}
            type='text'
            className={myClasses}
            id='usernameInput'
            placeholder='Enter your username'
          />
          {errors && errors.name && (
            <span className='text-red-600 text-sm'>{errors.name[0]}</span>
          )}
        </div>
        <div className='mb-5'>
          <label htmlFor='passwordInput' className='dark:text-white'>
            Email
          </label>
          <input
            type='email'
            ref={emailRef}
            className={myClasses}
            id='emailInput'
            placeholder='Enter your email'
          />
          {errors && errors.email && (
            <span className='text-red-600 text-sm'>{errors.email[0]}</span>
          )}
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='dark:text-white'>
            Password
          </label>
          <input
            ref={passwordRef}
            type='password'
            className={myClasses}
            id='passwordInput'
            placeholder='Enter your password'
          />
          {errors && errors.password && (
            <span className='text-red-600 text-sm'>{errors.password[0]}</span>
          )}
        </div>
        <div className='mb-5'>
          <label htmlFor='confirmPassword' className='dark:text-white'>
            Confirm Password
          </label>
          <input
            ref={passwordConfirmationRef}
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
