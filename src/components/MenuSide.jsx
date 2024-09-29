import React from 'react';

const MenuSide = ({ setSelectedTypes }) => {
  const jobTypes = [
    { name: 'Full Time', value: 'full_time' },
    { name: 'Part Time', value: 'part_time' },
    { name: 'Remote', value: 'remote' },
    { name: 'Internship', value: 'internship' },
  ];

  const handleCheckboxChange = (value) => {
    setSelectedTypes((prevTypes) => {
      if (prevTypes.includes(value)) {
        return prevTypes.filter((type) => type !== value);
      } else {
        return [...prevTypes, value];
      }
    });
  };

  return (
    <>
      <div className='relative  flex flex-row lg:flex-col border-gray-600 border text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800 shadow-md rounded-xl bg-clip-border'>
        <h5 className='hidden lg:block px-6 pt-6 pb-3 text-start font-bold text-2xl'>
          Job Type
        </h5>
        <nav className='flex min-w-[240px] lg:flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700'>
          {jobTypes.map((item, index) => (
            <div
              key={index}
              className='flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900'
            >
              <label className='flex flex-col md:flex-row  items-center w-full px-3 py-2 cursor-pointer'>
                <div className='grid mr-3 place-items-center'>
                  <div className='inline-flex items-center'>
                    <input
                      type='checkbox'
                      id={item.value}
                      value={item.value}
                      onChange={() => handleCheckboxChange(item.value)}
                      className='peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-orange-200 transition-all checked:border-orange-600 checked:bg-orange-600 hover:checked:bg-orange-600'
                    />
                  </div>
                </div>
                <p className='block font-sans text-sm lg:text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
                  {item.name}
                </p>
              </label>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MenuSide;
