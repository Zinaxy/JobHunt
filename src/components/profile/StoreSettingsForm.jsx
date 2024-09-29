import React from 'react';

const StoreSettingsForm = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <div className='pt-8 space-x-8'>
      <div>
        <h5 className='mb-3 text-gray-900 fs-17 fw-semibold dark:text-gray-50'>
          My Account
        </h5>
        {/* form profile */}
        <form onSubmit={handleSubmit} className=''>
          {' '}
          <div className='text-center'>
            <div className='relative mb-4'>
              <img
                src={profile}
                className='w-40 h-40 p-1 mx-auto border-2 rounded-full border-gray-100/50 dark:border-neutral-600'
                id='profile-img'
                alt=''
              />
              <div className='absolute  leading-8 text-center rounded-full shadow-md bottom-2 right-[36%] z-40 bg-orange-600 dark:bg-orange-400 text-white cursor-pointer'>
                <input
                  id='profile-img-file-input'
                  type='file'
                  className='hidden'
                />
                <label
                  htmlFor='profile-img-file-input'
                  className='flex justify-center items-center py-1.5 px-1.5'
                >
                  <RiImageEditLine size={20} className='mr-2' />
                  Edit profile
                </label>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='grid grid-cols-12 gap-5'>
              <div className='col-span-12 lg:col-span-6'>
                <div className='mb-3'>
                  <label
                    htmlFor='firstName'
                    className='text-sm text-gray-900 dark:text-gray-50'
                  >
                    First Name
                  </label>
                  <input type='text' className={myClasses} id='firstName' />
                </div>
              </div>
              {/* <!--end col-->*/}
              <div className='col-span-12 lg:col-span-6'>
                <div className='mb-3'>
                  <label
                    htmlFor='lastName'
                    className='text-sm text-gray-900 dark:text-gray-50'
                  >
                    Last Name
                  </label>
                  <input type='text' className={myClasses} id='lastName' />
                </div>
              </div>
              <div className='col-span-12 lg:col-span-6'>
                <div className='mb-3'>
                  <label
                    htmlFor='firstName'
                    className='text-sm text-gray-900 dark:text-gray-50'
                  >
                    Date of Birth
                  </label>
                  <input type='date' className={myClasses} id='firstName' />
                </div>
              </div>
              {/* <!--end col-->*/}
              <div className='col-span-12 lg:col-span-6'>
                <div className='mb-3'>
                  <label
                    htmlFor='lastName'
                    className='text-sm text-gray-900 dark:text-gray-50'
                  >
                    Phone Number
                  </label>
                  <input type='tel' className={myClasses} id='lastName' />
                </div>
              </div>
              {/* <!--end col-->*/}
              <div className='col-span-12 lg:col-span-6'>
                <div className='mb-3'>
                  <label
                    htmlFor='choices-single-categories'
                    className='text-sm text-gray-900 dark:text-gray-50'
                  >
                    Gender
                  </label>
                  <div className='mt-1'>
                    <select
                      className={selectClass}
                      name='choices-single-categories'
                      id='choices-single-categories'
                      aria-label='Default select example'
                    >
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      <option value='Others'>Others</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <!--end col-->*/}
              <div className='col-span-12 lg:col-span-6'>
                <div className='mb-3'>
                  <label
                    htmlFor='email'
                    className='text-sm text-gray-900 dark:text-gray-50'
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    className={myClasses}
                    id='email'
                    value='Jansh@gmail.com'
                  />
                </div>
              </div>
              {/* <!--end col-->*/}
            </div>
            <div className='mb-3'>
              <label
                htmlFor='address'
                className='form-label dark:text-gray-300'
              >
                Residential Address
              </label>
              <textarea className={myClasses} id='address' rows='3'>
                45 Zinaxy Jozi
              </textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='exampleFormControlTextarea1'
                className='form-label dark:text-gray-300'
              >
                Introduce Yourself
              </label>
              <textarea
                className={myClasses}
                id='exampleFormControlTextarea1'
                rows='5'
              >
                Developer with over 5 years' experience working in both the
                public and private sectors. Diplomatic, personable, and adept at
                managing sensitive situations. Highly organized, self-motivated,
                and proficient with computers. Looking to boost students’
                satisfactions scores for International University. Bachelor's
                degree in communications.
              </textarea>
            </div>
            <div className='mt-2 text-right'>
              <button
                type='submit'
                className='px-4 py-3 text-white bg-orange-600 rounded'
              >
                Update Profile
              </button>
            </div>
          </div>
        </form>
        {/* <!--end row-->*/}
      </div>
      {/* <!--end account-->*/}
    </div>
  );
};

export default StoreSettingsForm;
