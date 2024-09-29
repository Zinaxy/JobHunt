import React, { useRef, useState } from 'react';
import axiosClient from '../utils/FetchApi';
import { useStateContext } from '../context/ContextProvider';
import { LuSendHorizonal } from 'react-icons/lu';
import { TbLoader3 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateJobForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { setNotification } = useStateContext();
  const [errors, setErrors] = useState();
  const companyNameRef = useRef();
  const locationRef = useRef();
  const emailRef = useRef();
  const expireDateRef = useRef();
  const jobTitleRef = useRef();
  const jobTypeRef = useRef();
  const salaryRangeRef = useRef();
  const descriptionRef = useRef();
  const qualificationsRef = useRef();
  const responsiblitiesRef = useRef();
  const desireSkillsRef = useRef();

  const navigate = useNavigate(); // Initialize useNavigate

  const handleJob = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      companyName: companyNameRef.current.value,
      location: locationRef.current.value,
      email: emailRef.current.value,
      expireDate: expireDateRef.current.value,
      jobTitle: jobTitleRef.current.value,
      jobType: jobTypeRef.current.value,
      salaryRange: salaryRangeRef.current.value,
      description: descriptionRef.current.value,
      qualifications: qualificationsRef.current.value,
      responsiblities: responsiblitiesRef.current.value,
      desireSkills: desireSkillsRef.current.value,
    };

    axiosClient
      .post('/storejobs', payload)
      .then(() => {
        setLoading(false);
        setNotification('Job Posted Successfull');
        navigate('/findjobs'); // Navigate to '/findjobs' after successful submission
      })
      .catch((err) => {
        setLoading(false);
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
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
    <form onSubmit={handleJob} className='w-full p-8 text-start '>
      <h5 className='text-start font-bold text-2xl dark:text-white text-gray-800 mb-4'>
        Company Details
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        {/* company name */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='company'>
            Company Name
          </label>
          <input
            ref={companyNameRef}
            className={myClasses}
            id='company'
            type='text'
            placeholder=''
          />
          {errors && errors.companyName && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.companyName[0]}
            </p>
          )}
        </div>
        {/* company location */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='location'>
            Location
          </label>
          <input
            ref={locationRef}
            className={myClasses}
            id='location'
            type='text'
            placeholder='eg.. Harare'
          />
          {errors && errors.location && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.location[0]}
            </p>
          )}
        </div>
        {/* link to apply */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='applylink'>
            Email to send Applications
          </label>
          <input
            ref={emailRef}
            className={myClasses}
            id='applylink'
            type='email'
            placeholder='eg.. example@gmail.com'
          />
          {errors && errors.email && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.email[0]}
            </p>
          )}
        </div>
        {/* expire date */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='expiredate'>
            Expire Date
          </label>
          <input
            ref={expireDateRef}
            className={myClasses}
            id='expiredate'
            type='date'
            placeholder=''
          />
          {errors && errors.expireDate && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.expireDate[0]}
            </p>
          )}
        </div>
      </div>

      <h5 className='text-start font-bold text-2xl dark:text-white text-gray-800 mb-4'>
        Job Info
      </h5>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='jobTitle'>
            Job Title
          </label>
          <input
            ref={jobTitleRef}
            className={myClasses}
            id='jobTitle'
            type='text'
            placeholder='e.g. Senior React Developer'
          />
          {errors && errors.jobTitle && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.jobTitle[0]}
            </p>
          )}
        </div>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='jobtype'>
            Job Type
          </label>
          <div className='relative'>
            <select className={selectClass} id='jobtype' ref={jobTypeRef}>
              <option disabled defaultValue={'SELECT JOB TYPE'}>
                Select Job Type
              </option>
              <option value={'Full Time'}>Full Time</option>
              <option value={'Part Time'}>Part Time</option>
              <option value={'Remote'}>Remote</option>
              <option value={'Interniship'}>Interniship</option>
              <option value={'Others'}>Others</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800 dark:text-gray-200'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
            {errors && errors.jobType && (
              <p className='text-red-500 text-xs italic mb-3'>
                {errors.jobType[0]}
              </p>
            )}
          </div>
        </div>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className={labelClass} htmlFor='salary'>
            Salary Range
          </label>
          <input
            ref={salaryRangeRef}
            className={myClasses}
            id='salary'
            type='text'
            placeholder='e.g. $50k - $80k'
          />
          {errors && errors.salaryRange && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.salaryRange[0]}
            </p>
          )}
        </div>
      </div>

      <h5 className='text-start font-bold text-2xl dark:text-white text-gray-800 mb-4'>
        Job Description
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea
            rows={6}
            className={myClasses}
            id='description'
            ref={descriptionRef}
          ></textarea>
          {errors && errors.description && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.description[0]}
            </p>
          )}
        </div>
      </div>
      <h5 className='text-start font-bold text-2xl dark:text-white text-gray-800 mb-4'>
        Qualifications
        <span className='text-sm'>(SEPERATE THEM BY COMMA)</span>
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea
            ref={qualificationsRef}
            rows={6}
            className={myClasses}
            id='qualifications'
          ></textarea>
          {errors && errors.qualifications && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.qualifications[0]}
            </p>
          )}
        </div>
      </div>
      <h5 className='text-start font-bold text-2xl dark:text-white text-gray-800 mb-4'>
        Responseblities{' '}
        <span className='text-sm'>(SEPERATE THEM BY COMMA)</span>
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea
            ref={responsiblitiesRef}
            rows={6}
            className={myClasses}
            id='responseblities'
          ></textarea>
          {errors && errors.responsiblities && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.responsiblities[0]}
            </p>
          )}
        </div>
      </div>
      <h5 className='text-start font-bold text-2xl dark:text-white text-gray-800 mb-4'>
        Exprience <span className='text-sm'>(SEPERATE THEM BY COMMA)</span>
      </h5>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <textarea
            rows={6}
            className={myClasses}
            id='exprience'
            ref={desireSkillsRef}
          ></textarea>
          {errors && errors.desireSkills && (
            <p className='text-red-500 text-xs italic mb-3'>
              {errors.desireSkills[0]}
            </p>
          )}
        </div>
      </div>
      <div className=''>
        <button
          type='submit'
          className='bg-orange-600 px-10 rounded py-4 text-white font-bold'
        >
          {' '}
          {isLoading ? (
            <TbLoader3 size={20} className='animate-spin' />
          ) : (
            <span className='flex items-center gap-2'>
              Post Job
              <LuSendHorizonal size={20} />
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateJobForm;
