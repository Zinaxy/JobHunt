import React from 'react';
import MainContent from '../components/layouts/MainContent';
import { LuSendHorizonal } from 'react-icons/lu';
import { contact } from '../assets';

const Contact = () => {
  const myClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';
  const selectClass =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  return (
    <MainContent>
      {' '}
      {/* {/*<!-- Start grid -->*/}
      <section className='pt-16'>
        <div className='container mx-auto'>
          <div className='grid items-center grid-cols-12 mt-5 lg:gap-8 gap-y-8'>
            <div className='col-span-12 lg:col-span-6'>
              <div className='mt-4'>
                <h3 className='mb-2 text-3xl text-gray-900 dark:text-white'>
                  Get in touch
                </h3>
                <p className='text-gray-500 dark:text-gray-300'>
                  Start working with Jobcy that can provide everything you need
                  to generate awareness, drive traffic, connect.
                </p>
                <form className='mt-4 contact-form'>
                  <span id='error-msg'></span>
                  <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12'>
                      <div className='mb-3'>
                        <label
                          htmlFor='nameInput'
                          className='text-gray-900 dark:text-gray-50'
                        >
                          Name
                        </label>
                        <input
                          type='text'
                          name='name'
                          id='name'
                          className={myClasses}
                          placeholder='Enter your name'
                        />
                      </div>
                    </div>
                    {/*<!--end col-->*/}
                    <div className='col-span-12 lg:col-span-6'>
                      <div className='mb-3'>
                        <label
                          htmlFor='emailInput'
                          className='text-gray-900 dark:text-gray-50'
                        >
                          Email
                        </label>
                        <input
                          type='email'
                          className={myClasses}
                          id='emaiol'
                          name='email'
                          placeholder='Enter your email'
                        />
                      </div>
                    </div>
                    {/*<!--end col-->*/}
                    <div className='col-span-12 lg:col-span-6'>
                      <div className='mb-3'>
                        <label
                          htmlFor='subjectInput'
                          className='text-gray-900 dark:text-gray-50'
                        >
                          Subject
                        </label>
                        <input
                          type='text'
                          className={myClasses}
                          id='subjectInput'
                          name='subject'
                          placeholder='Enter your subject'
                        />
                      </div>
                    </div>
                    {/*<!--end col-->*/}
                    <div className='col-span-12'>
                      <div className='mb-3'>
                        <label
                          htmlFor='meassageInput'
                          className='text-gray-900 dark:text-gray-50'
                        >
                          Your Message
                        </label>
                        <textarea
                          className={myClasses}
                          id='meassageInput'
                          placeholder='Enter your message'
                          name='comments'
                          rows='3'
                        ></textarea>
                      </div>
                    </div>
                    {/*<!--end col-->*/}
                  </div>
                  {/*<!--end row-->*/}
                  <div className='text-right'>
                    <button
                      type='submit'
                      id='submit'
                      name='submit'
                      className='flex items-center bg-orange-600 text-white gap-2 px-3 py-2 rounded'
                    >
                      {' '}
                      Send Message <LuSendHorizonal size={20} />
                    </button>
                  </div>
                </form>
                {/*<!--end form-->*/}
              </div>
            </div>
            {/*<!--end col-->*/}
            <div className='col-span-12 lg:col-span-5 lg:ml-20'>
              <div className='text-center'>
                <img src={contact} alt='' className='img-fluid' />
              </div>
              <div className='pt-3 mt-4'>
                <div className='flex items-center mt-2 text-gray-500'>
                  <div className=''>
                    <i className='uil uil-map-marker'></i>
                  </div>
                  <div className='ltr:ml-2 rtl:mr-2 grow-1'>
                    <p className='mb-0 dark:text-gray-300'>
                      2453 Clinton StreetLittle Rock, California, USA
                    </p>
                  </div>
                </div>
                <div className='flex items-center mt-2 text-gray-500'>
                  <div className='group-data-[theme-color=orange]:text-orange-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22'>
                    <i className='uil uil-envelope'></i>
                  </div>
                  <div className='ltr:ml-2 rtl:mr-2 grow-1'>
                    <p className='mb-0 dark:text-gray-300'>
                      contactus@Jobcy.com
                    </p>
                  </div>
                </div>
                <div className='flex items-center mt-2 text-gray-500'>
                  <div className='group-data-[theme-color=orange]:text-orange-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22'>
                    <i className='uil uil-phone-alt'></i>
                  </div>
                  <div className='ltr:ml-2 rtl:mr-2 grow-1'>
                    <p className='mb-0 dark:text-gray-300'>(+245) 223 1245</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {/*<!--end col-->*/}
          </div>
        </div>
        <div className='pt-20'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509157.364974411!2d-123.79641389801948!3d37.193115265681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1628684675253!5m2!1sen!2sin'
            height='350'
            className='w-full'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </section>
      {/* {/* {/*<!-- End grid -->*/}
    </MainContent>
  );
};

export default Contact;
