import { useRef, useState } from 'react';
import { LuSendHorizonal } from 'react-icons/lu';
import { TbLoader3 } from 'react-icons/tb';
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../utils/FetchApi';

const LanguagesAll = () => {
  const { setNotification } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

  const languageNameRef = useRef();

  const handleLanguage = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      languageName: languageNameRef.current.value,
    };
    axiosClient
      .post('/language', payload)
      .then(() => {
        setLoading(false);
        window.location.reload();
        setNotification('Language added successfull');
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
    <form onSubmit={handleLanguage} className=''>
      <div className='mt-4'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12 lg:col-span-12'>
            <div className='mb-3'>
              <label
                htmlFor='Languages'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Add language
              </label>
              <input
                ref={languageNameRef}
                type='text'
                className={inputClasses}
                id='Languages'
                placeholder='English'
              />
              {errors && errors.languageName && (
                <span className='text-red-600 text-sm'>
                  {errors.languageName[0]}
                </span>
              )}
            </div>
          </div>
        </div>
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

export default LanguagesAll;
