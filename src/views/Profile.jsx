import React, { useState } from 'react';
import MainContent from '../components/layouts/MainContent';
import SideProfile from '../components/profile/SideProfile';
import AboutInfo from '../components/profile/AboutInfo';
import Settings from '../components/profile/Settings';
import Resume from '../components/profile/Resume';
import UpdatePassword from '../components/profile/UpdatePassword';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <MainContent>
      <div className='grid grid-cols-12 gap-y-10 lg:gap-10'>
        <div className='col-span-12 lg:col-span-4'>
          <SideProfile />
        </div>
        <div className='col-span-12 lg:col-span-8'>
          <div className='border rounded border-gray-100/50 dark:border-neutral-600 nav-tabs bottom-border-tab'>
            <div className='px-6 py-0 border-b border-gray-100/50 dark:border-neutral-600'>
              <ul className='items-center text-sm font-medium text-center text-gray-700 nav md:flex'>
                <li
                  className={activeTab === 'about' ? 'active' : ''}
                  role='presentation'
                >
                  <button
                    onClick={() => handleTabClick('about')}
                    className={
                      activeTab === 'about'
                        ? 'inline-block w-full py-4 px-[18px] dark:text-gray-50 bg-orange-600'
                        : 'inline-block w-full py-4 px-[18px] dark:text-gray-50 active'
                    }
                    type='button'
                  >
                    Overview
                  </button>
                </li>
                <li
                  className={activeTab === 'settings' ? 'active' : ''}
                  role='presentation'
                >
                  <button
                    onClick={() => handleTabClick('settings')}
                    className={
                      activeTab === 'settings'
                        ? 'inline-block w-full py-4 px-[18px] dark:text-gray-50 bg-orange-600'
                        : 'inline-block w-full py-4 px-[18px] dark:text-gray-50 active'
                    }
                    type='button'
                  >
                    Settings
                  </button>
                </li>
                {/*  <li
                  className={activeTab === 'passwordupdate' ? 'active' : ''}
                  role='presentation'
                >
                  <button
                    onClick={() => handleTabClick('passwordupdate')}
                    className={
                      activeTab === 'passwordupdate'
                        ? 'inline-block w-full py-4 px-[18px] dark:text-gray-50 bg-orange-600'
                        : 'inline-block w-full py-4 px-[18px] dark:text-gray-50 active'
                    }
                    type='button'
                  >
                    Update Password
                  </button>
                </li>
                <li
                  className={activeTab === 'resume' ? 'active' : ''}
                  role='presentation'
                >
                  <button
                    onClick={() => handleTabClick('resume')}
                    className={
                      activeTab === 'resume'
                        ? 'inline-block w-full py-4 px-[18px] dark:text-gray-50 bg-orange-600'
                        : 'inline-block w-full py-4 px-[18px] dark:text-gray-50 active'
                    }
                    type='button'
                  >
                    Update Resume
                  </button>
                </li> */}
              </ul>
            </div>
            <div className='p-6 tab-content'>
              <div
                id='overview-tab'
                className={
                  activeTab === 'about' ? 'block w-full tab-pane' : 'hidden'
                }
              >
                <AboutInfo />
              </div>
              <div
                id='settings-tab'
                className={
                  activeTab === 'settings' ? 'block w-full tab-pane' : 'hidden'
                }
              >
                <Settings />
              </div>
              {/*               <div
                id='resume-tab'
                className={
                  activeTab === 'passwordupdate'
                    ? 'block w-full tab-pane'
                    : 'hidden'
                }
              >
                <UpdatePassword />
              </div>
              <div
                id='resume-tab'
                className={
                  activeTab === 'resume' ? 'block w-full tab-pane' : 'hidden'
                }
              >
                <Resume />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Profile;
