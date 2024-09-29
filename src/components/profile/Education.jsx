import { useRef, useState } from 'react';
import { LuSendHorizonal } from 'react-icons/lu';
import axiosClient from '../../utils/FetchApi';
import { useStateContext } from '../../context/ContextProvider';
import { TbLoader3 } from 'react-icons/tb';

const Education = () => {
  const { setNotification } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

  const degreeRef = useRef();
  const schoolNameRef = useRef();
  const descriptionRef = useRef();
  const startYearRef = useRef();
  const endYearRef = useRef();

  const handleEducation = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      degree: degreeRef.current.value,
      schoolName: schoolNameRef.current.value,
      description: descriptionRef.current.value,
      startYear: startYearRef.current.value,
      endYear: endYearRef.current.value,
    };
    axiosClient
      .post('/education', payload)
      .then(() => {
        setLoading(false);
        window.location.reload();
        setNotification('Education added successfull');
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
    <form onSubmit={handleEducation} className=''>
      {' '}
      <div className='mt-4'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='degree'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Degree/Diploma
              </label>
              <input
                ref={degreeRef}
                type='text'
                className={myClasses}
                id='degree'
                placeholder='Bachelor of Computer Applications'
              />
              {errors && errors.degree && (
                <span className='text-red-600 text-sm'>{errors.degree[0]}</span>
              )}
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='school'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                School/ University
              </label>
              <input
                ref={schoolNameRef}
                type='text'
                className={myClasses}
                id='school'
                placeholder='Midlands State University'
              />
              {errors && errors.schoolName && (
                <span className='text-red-600 text-sm'>
                  {errors.schoolName[0]}
                </span>
              )}
            </div>
          </div>
          {/* <!--end col-->*/}
          <div className='col-span-12 lg:col-span-6'>
            <div className='mb-3'>
              <label
                htmlFor='started_year'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Year Started
              </label>
              <input
                ref={startYearRef}
                type='date'
                className={myClasses}
                id='started_year'
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
                htmlFor='graduation_year'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Graduation Year
              </label>
              <input
                ref={endYearRef}
                type='date'
                className={myClasses}
                id='graduation_year'
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
                htmlFor='about_education'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                About Your education
              </label>
              <textarea
                ref={descriptionRef}
                type='text'
                className={myClasses}
                id='about_education'
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

export default Education;
