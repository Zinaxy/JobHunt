import React from 'react';
import MainContent from './MainContent';

import { Outlet } from 'react-router-dom';
import { signup } from '../../assets';

const GuestLayout = () => {
  return (
    <MainContent>
      {' '}
      <section className='h-screen'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 lg:col-span-10 lg:col-start-2'>
              <div className='flex flex-col bg-white rounded-lg dark:bg-gray-900'>
                <div className='grid flex-col grid-cols-12'>
                  <div className='col-span-6 ltr:rounded-l-lg rtl:rounded-r-lg'>
                    <div className='p-10'>
                      <div className='mt-5'>
                        <img src={signup} alt='' />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-12 rounded-b-md lg:col-span-6 group-data-[theme-color=orange]:bg-orange-700 group-data-[theme-color=sky]:bg-sky-700 group-data-[theme-color=red]:bg-red-700 group-data-[theme-color=green]:bg-green-700 group-data-[theme-color=pink]:bg-pink-700 group-data-[theme-color=blue]:bg-blue-700 lg:rounded-b-none lg:ltr:rounded-r-lg rtl:rounded-l-lg'>
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContent>
  );
};

export default GuestLayout;
