import { LuSendHorizonal } from 'react-icons/lu';
import { useStateContext } from '../../context/ContextProvider';
import { useRef, useState } from 'react';
import axiosClient from '../../utils/FetchApi';
import { TbLoader3 } from 'react-icons/tb';

const Experience = () => {
  const { setNotification } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

  const experienceRef = useRef();
  const companyRef = useRef();
  const descriptionRef = useRef();
  const startYearRef = useRef();
  const endYearRef = useRef();

  const handleExperience = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      experience: experienceRef.current.value,
      company: companyRef.current.value,
      description: descriptionRef.current.value,
      startYear: startYearRef.current.value,
      endYear: endYearRef.current.value,
    };
    axiosClient
      .post('/experience', payload)
      .then(() => {
        setLoading(false);
        window.location.reload();
        setNotification('Experience added successfull');
      })
      .catch((err) => {
        setLoading(false);
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };
  const inputClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';

  return (
    <form onSubmit={handleExperience} className=''>
      <div className='mt-4'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='company'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Company
              </label>
              <input
                ref={companyRef}
                type='text'
                className={inputClasses}
                id='company'
                placeholder=''
              />
              {errors && errors.company && (
                <span className='text-red-600 text-sm'>
                  {errors.company[0]}
                </span>
              )}
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='jobtitle'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Job Title
              </label>
              <input
                ref={experienceRef}
                type='text'
                className={inputClasses}
                id='jobtitle'
                placeholder=''
              />
              {errors && errors.experience && (
                <span className='text-red-600 text-sm'>
                  {errors.experience[0]}
                </span>
              )}
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='date_started'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Date Started
              </label>
              <input
                ref={startYearRef}
                type='date'
                className={inputClasses}
                id='date_started'
                placeholder='year'
              />
              {errors && errors.startYear && (
                <span className='text-red-600 text-sm'>
                  {errors.startYear[0]}
                </span>
              )}
            </div>
          </div>
          {/* <!--end col-->*/}
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='date_finished'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Date End
              </label>
              <input
                ref={endYearRef}
                type='date'
                className={inputClasses}
                id='date_finished'
                placeholder='year'
              />
              {errors && errors.endYear && (
                <span className='text-red-600 text-sm'>
                  {errors.endYear[0]}
                </span>
              )}
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-12'>
            <div className='mb-3'>
              <label
                htmlFor='about_Experience'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                About Your Experience
              </label>
              <textarea
                ref={descriptionRef}
                type='text'
                className={inputClasses}
                id='about_Experience'
              ></textarea>
              {errors && errors.description && (
                <span className='text-red-600 text-sm'>
                  {errors.description[0]}
                </span>
              )}
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
            {' '}
            {loading ? (
              <TbLoader3 size={20} className='animate-spin' />
            ) : (
              <LuSendHorizonal size={20} />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Experience;
