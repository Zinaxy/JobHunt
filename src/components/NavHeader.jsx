import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useLocation } from 'react-router-dom';
import { BsMoonStars } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { LiaCogSolid } from 'react-icons/lia';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { logo, profile } from '../assets';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../utils/FetchApi';

const NavHeader = () => {
  const { user, setUser, token, setToken, setNotification } = useStateContext();
  /* user infor */
  useEffect(() => {
    if (token) {
      axiosClient.get('/user').then(({ data }) => {
        setUser(data.user);
      });
    }
  }, [token, setUser]);

  /* darkmode toggle */
  // Add an event listener to execute handleClick when the DOM content is loaded
  /*  document.addEventListener('DOMContentLoaded', () => {
    handleClick();
  });
  function handleClick() {
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add('dark');
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove('dark');
    }

    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
  } */
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Update local storage and apply theme when dark mode state changes
  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileToggle(!mobileToggle);
  };

  const logout = (e) => {
    e.preventDefault();
    axiosClient.post('/logout').then(() => {
      setNotification('Session Deleted Successfull');
      setUser({});
      setToken(null);
      return <Navigate to='/' />;
    });
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Find Jobs', link: '/findjobs' },
    { name: 'Candidates', link: '/cantidates' },
    { name: 'Post Job', link: '/postjob' },
    { name: 'Contact', link: '/contact' },
  ];

  const activeClass =
    'bg-orange-600 text-white rounded-md px-3 py-2 text-sm font-medium';
  const defaultClass =
    'text-gray-900 dark:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-orange-600';

  return (
    <nav id='nav-bar' className=''>
      <nav className='shadow dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-center'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                onClick={toggleMobileMenu}
                type='button'
                className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='absolute -inset-0.5'></span>
                <span className='sr-only'>Open main menu</span>
                {mobileToggle ? (
                  <svg
                    className=' h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img
                  className='h-20 w-auto hidden md:block'
                  src={logo}
                  alt='Your Company'
                />
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={
                        location.pathname === item.link
                          ? activeClass
                          : defaultClass
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {token ? (
                <div className='relative ml-4'>
                  <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded={isOpen}
                    aria-haspopup='true'
                    onMouseEnter={toggleDropdown}
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={profile}
                      alt=''
                    />
                  </button>
                  {isOpen && (
                    <div
                      className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu-button'
                      tabIndex='-1'
                    >
                      <Link
                        to='/profile'
                        className='px-4 py-2 text-1xl text-gray-800 dark:text-gray-200 flex justify-start gap-4 items-center hover:bg-gray-600'
                        role='menuitem'
                        tabIndex='-1'
                      >
                        <FaRegUserCircle size={20} />
                        <span>{user.name}</span>
                      </Link>
                      <Link
                        onClick={handleClick}
                        to='#'
                        className='px-4 py-2 text-1xl text-gray-200 flex justify-start gap-4 items-center hover:bg-gray-600'
                        role='menuitem'
                        tabIndex='-1'
                      >
                        <BsMoonStars
                          size={20}
                          className='text-gray-800 dark:text-gray-200'
                        />
                        <span className='bg-gray-900 px-1.5 py-2 rounded hover:bg-gray-200'>
                          Dark Mode
                        </span>
                      </Link>
                      <Link
                        to='/profile'
                        className='px-4 py-2 text-1xl text-gray-800 dark:text-gray-200 flex justify-start gap-4 items-center hover:bg-gray-600'
                        role='menuitem'
                        tabIndex='-1'
                      >
                        <LiaCogSolid size={20} />
                        <span>Profile Settings</span>
                      </Link>
                      <Link
                        to='#'
                        className='px-4 py-2 text-1xl text-gray-800 dark:text-gray-200 flex justify-start gap-4 items-center hover:bg-red-600'
                        role='menuitem'
                        tabIndex='-1'
                        onClick={logout}
                      >
                        <FaArrowRightFromBracket size={20} />
                        <span>Sign Out</span>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to='/signin'
                  className='ml-4 px-4 py-1.5  border-2 border-orange-600 rounded text-lg font-bold text-gray-900 dark:text-white hover:bg-orange-600 hover:text-white'
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={mobileToggle ? 'block' : 'hidden'} id='mobile-menu'>
          <div className='flex flex-col space-y-1 px-2 pb-3 pt-2'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={
                  location.pathname === item.link
                    ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
                    : defaultClass
                }
                aria-current='page'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavHeader;
