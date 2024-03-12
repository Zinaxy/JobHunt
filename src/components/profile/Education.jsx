import { LuSendHorizonal } from 'react-icons/lu';

const Education = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <form action='' className=''>
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
                type='text'
                className={myClasses}
                id='degree'
                placeholder='Bachelor of Computer Applications'
              />
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
                type='text'
                className={myClasses}
                id='school'
                placeholder='Midlands State University'
              />
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
                type='date'
                className={myClasses}
                id='started_year'
                placeholder='year'
              />
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
                type='date'
                className={myClasses}
                id='graduation_year'
                placeholder='year'
              />
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
                type='text'
                className={myClasses}
                id='about_education'
              ></textarea>
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
            <LuSendHorizonal size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Education;
