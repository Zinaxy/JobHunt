import { BsTwitterX, BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { profile } from '../../assets';
import axiosClient from '../../utils/FetchApi';
import { useStateContext } from '../../context/ContextProvider';
import { useEffect, useState } from 'react';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import CreateResume from './CreateResume';

const SideProfile = () => {
  const [personalInfo, setPersonalInfo] = useState([]);
  const socialIcons = [
    { name: 'facebook', icon: <FaFacebookF size={20} /> },
    { name: 'twitter', icon: <BsTwitterX size={20} /> },
    { name: 'whatsapp', icon: <BsWhatsapp size={20} /> },
    { name: 'github', icon: <BsGithub size={20} /> },
    { name: 'linkedin', icon: <BsLinkedin size={20} /> },
    { name: 'instagram', icon: <FaInstagram size={20} /> },
  ];
  const { user, setUser, token, setToken } = useStateContext();
  /* user infor */
  useEffect(() => {
    axiosClient.get('/profile-info').then(({ data }) => {
      setPersonalInfo(data.personalInfo);
      console.log(data.personalInfo.firstName);
    });
  }, []);

  /* uploading files */

  return (
    <div className='border rounded border-gray-100/50 dark:border-neutral-600'>
      <div className='p-5 border-b border-gray-100/50 dark:border-neutral-600'>
        <div className='text-center'>
          <img
            src={profile}
            alt=''
            className='w-20 h-20 p-1 mx-auto border-2 rounded-full border-gray-200/20'
          />
          <h6 className='mt-4 mb-0 text-lg text-gray-900 dark:text-gray-50'>
            {user.firstName}&nbsp;{user.lastName}
          </h6>
          <p className='mb-4 text-gray-500 dark:text-gray-300'>
            {user.proffesion}
          </p>
          <ul className='flex flex-wrap justify-center gap-2 mb-0'>
            {socialIcons.map((item, index) => (
              <li
                key={index}
                className='w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-orange-600 text-white hover:bg-orange-500/20 hover:text-white'
              >
                <Link
                  to='#'
                  className='flex flex-col justify-center items-center text-center px-2 py-2 '
                >
                  {item.icon}
                  <span className='hidden hover:block'> {item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='p-5 pt-0 border-b border-gray-100/50'>
        <h6 className='mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50'>
          Contacts
        </h6>
        <ul className='mb-0'>
          {user.firstName && user.lastName && (
            <li className='pb-3'>
              <div className='flex'>
                <label className='w-32 font-medium text-gray-900 dark:text-gray-50'>
                  Full Name:
                </label>
                <div>
                  <p className='mb-0 text-gray-500 text-break dark:text-gray-300'>
                    {user.firstName}&nbsp;{user.lastName}
                  </p>
                </div>
              </div>
            </li>
          )}
          {user.email && (
            <li className='pb-3'>
              <div className='flex'>
                <label className='w-32 font-medium text-gray-900 dark:text-gray-50'>
                  Email:
                </label>
                <div>
                  <p className='mb-0 text-gray-500 text-break dark:text-gray-300'>
                    {user.email}
                  </p>
                </div>
              </div>
            </li>
          )}
          {user.phoneNumber && (
            <li className='pb-3'>
              <div className='flex'>
                <label className='w-32 font-medium text-gray-900 dark:text-gray-50'>
                  Phone Number:
                </label>
                <div>
                  <p className='mb-0 text-gray-500 dark:text-gray-300'>
                    {user.phoneNumber}
                  </p>
                </div>
              </div>
            </li>
          )}
          {user.address && (
            <li className='pb-3'>
              <div className='flex'>
                <label className='w-32 font-medium text-gray-900 dark:text-gray-50'>
                  Location:
                </label>
                <div>
                  <p className='mb-0 text-gray-500 dark:text-gray-300'>
                    {user.address}
                  </p>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
      <div className='p-5'>
        <div className='pb-5  dark:border-neutral-600'>
          <h6 className='mb-5 font-semibold text-gray-900 text-17 dark:text-gray-50'>
            Documents
          </h6>
          <CreateResume />
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
