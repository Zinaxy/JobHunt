import React, { Children } from 'react';

const MainContent = ({ children }) => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className=''>
        {/* <!-- Start grid -->*/}
        <section className='py-20'>
          <div className='container mx-auto'>{children}</div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
