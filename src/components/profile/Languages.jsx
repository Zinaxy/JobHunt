import { LuSendHorizonal } from 'react-icons/lu';

const Languages = () => {
  const inputClasses =
    'appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none';
  const labelClass =
    'block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2';

  return (
    <form action='' className=''>
      <div className='mt-4'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12 lg:col-span-12'>
            <div className='mb-3'>
              <label
                htmlFor='Languages'
                className='text-sm text-gray-900 dark:text-gray-50'
              >
                Add Skill
              </label>
              <input
                type='text'
                className={inputClasses}
                id='Languages'
                placeholder='English'
              />
            </div>
          </div>
        </div>
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

export default Languages;
