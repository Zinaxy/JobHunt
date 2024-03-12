import { FaPlus } from 'react-icons/fa';
import Education from './Education';
import { useState } from 'react';
import Experience from './Exprience';
import Skills from './Skills';
import Languages from './Languages';
import LanguagesAll from './LanguagesPage';

const AboutInfo = () => {
  const [education, setEducation] = useState(true);
  const [exprience, setExprience] = useState(true);
  const [skillsExpanded, setSkills] = useState(true);
  const [languagesExpanded, setLanguages] = useState(true);

  const handleEducation = () => {
    setEducation(!education);
  };

  const handleExprience = () => {
    setExprience(!exprience);
  };
  const handleSkills = () => {
    setSkills(!skillsExpanded);
  };
  const handleLanguages = () => {
    setLanguages(!languagesExpanded);
  };
  return (
    <>
      <div className='mt-2 space-y-8'>
        <div>
          <h5 className='text-lg font-bold text-gray-900 dark:text-gray-50'>
            About
          </h5>
          <p className='mt-4 text-gray-500 dark:text-gray-300'>
            Developer with over 5 years' experience working in both the public
            and private sectors. Diplomatic, personable, and adept at managing
            sensitive situations. Highly organized, self-motivated, and
            proficient with computers. Looking to boost students’ satisfactions
            scores for <b>International University</b>. Bachelor's degree in
            communications.
          </p>
          <p className='mt-3 text-gray-500 dark:text-gray-300'>
            It describes the candidate's relevant experience, skills, and
            achievements. The purpose of this career summary is to explain your
            qualifications for the job in 3-5 sentences and convince the manager
            to read the whole resume document.
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
          Education
          <div className=''>
            <button
              onClick={handleEducation}
              className='px-2 py-2 bg-orange-600 flex items-center rounded-full text-white'
            >
              <FaPlus size={20} />
            </button>
          </div>
        </h6>
        <div className={education ? '' : 'hidden'}>
          <div className='relative flex mt-5'>
            <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>
            <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
              1
            </div>
            <div className='ml-4'>
              <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                BCA - Bachelor of Computer Applications
              </h6>
              <p className='mb-2 text-gray-500 dark:text-gray-300'>
                International University - (2004 - 2010)
              </p>
              <p className='text-gray-500 dark:text-gray-300'>
                There are many variations of passages of available, but the
                majority alteration in some form. As a highly skilled and
                successfull product development and design specialist with more
                than 4 Years of My experience.
              </p>
            </div>
          </div>

          <div className='relative flex mt-5'>
            <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>

            <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
              2
            </div>
            <div className='ml-4'>
              <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                MCA - Master of Computer Application
              </h6>
              <p className='mb-2 text-gray-500 dark:text-gray-300'>
                International University - (2010 - 2012)
              </p>
              <p className='text-gray-500 dark:text-gray-300'>
                There are many variations of passages of available, but the
                majority alteration in some form. As a highly skilled and
                successfull product development and design specialist with more
                than 4 Years of My experience.
              </p>
            </div>
          </div>

          <div className='flex mt-5 re'>
            <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
              3
            </div>
            <div className='ml-4'>
              <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                Design Communication Visual
              </h6>
              <p className='mb-2 text-gray-500 dark:text-gray-300'>
                International University - (2012-2015)
              </p>
              <p className='text-gray-500 dark:text-gray-300'>
                There are many variations of passages of available, but the
                majority alteration in some form. As a highly skilled and
                successfull product development and design specialist with more
                than 4 Years of My experience.
              </p>
            </div>
          </div>
        </div>
        <div className={education ? 'hidden' : ''}>
          <Education />
        </div>
      </div>
      handleExprience
      {/* expriences */}
      <div className='mt-6'>
        <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
          Experiences
          <div className=''>
            <button
              onClick={handleExprience}
              className='px-2 py-2 bg-orange-600 flex items-center rounded-full text-white'
            >
              <FaPlus size={20} />
            </button>
          </div>
        </h6>
        {/* exprience details */}
        <div className={exprience ? '' : 'hidden'}>
          {' '}
          <div className='relative flex mt-5'>
            <div className="after:content-[''] after:absolute after:hidden after:md:block after:border after:border-dashed after:h-24 after:left-5 after:top-10 after:border-orange-500/20"></div>
            <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
              W
            </div>
            <div className='ml-4'>
              <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                Web Design & Development Team Leader
              </h6>
              <p className='mb-2 text-gray-500 dark:text-gray-300'>
                Creative Agency - (2013 - 2016)
              </p>
              <p className='text-gray-500 dark:text-gray-300'>
                There are many variations of passages of available, but the
                majority alteration in some form. As a highly skilled and
                successfull product development and design specialist with more
                than 4 Years of My experience.
              </p>
            </div>
          </div>
          <div className='flex mt-5'>
            <div className='w-10 h-10 text-xl leading-10 text-center rounded-full shrink-0 bg-orange-500/20 text-orange-500'>
              P
            </div>
            <div className='ml-4'>
              <h6 className='mb-1 text-gray-900 text-16 dark:text-gray-50'>
                Project Manager
              </h6>
              <p className='mb-2 text-gray-500 dark:text-gray-300'>
                Jobcy Technology Pvt.Ltd - (Pressent)
              </p>
              <p className='text-gray-500 dark:text-gray-300'>
                There are many variations of passages of available, but the
                majority alteration in some form. As a highly skilled and
                successfull product development and design specialist with more
                than 4 Years of My experience.
              </p>
            </div>
          </div>
        </div>
        {/* exprience form */}
        <div className={exprience ? 'hidden' : ''}>
          <Experience />
        </div>
      </div>
      <div className='mt-6'>
        <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
          Skills
          <button
            onClick={handleSkills}
            className='px-2 py-2 bg-orange-600 flex items-center rounded-full text-white'
          >
            <FaPlus size={20} />
          </button>
        </h6>
        {/* skills */}
        <div className={skillsExpanded ? '' : 'hidden'}>
          {' '}
          <div className='flex flex-wrap gap-3 mt-3'>
            <span className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'>
              Cloud Management
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'>
              Responsive Design
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'>
              Network Architecture
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'>
              PHP
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'>
              Bootstrap
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded font-medium'>
              UI &amp; UX Designer
            </span>
          </div>
        </div>
        {/* skills form */}
        <div className={skillsExpanded ? 'hidden' : ''}>
          <Skills />
        </div>
      </div>
      <div className='mt-6'>
        <h6 className='text-lg font-bold text-gray-900 dark:text-gray-50 flex justify-between items-center'>
          Spoken languages
          <button
            onClick={handleLanguages}
            className='px-2 py-2 bg-orange-600 flex items-center rounded-full text-white'
          >
            <FaPlus size={20} />
          </button>
        </h6>
        <div className={languagesExpanded ? '' : 'hidden'}>
          {' '}
          <div className='flex flex-wrap gap-3 mt-3'>
            <span className='mt-2 text-13 px-2 py-0.5 bg-red-500/20 text-red-500 rounded font-medium'>
              English
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-green-500/20 text-green-500 rounded font-medium'>
              German
            </span>
            <span className='mt-2 text-13 px-2 py-0.5 bg-sky-500/20 text-sky-500 rounded font-medium'>
              French
            </span>
          </div>
        </div>
        <div className={languagesExpanded ? 'hidden' : ''}>
          <LanguagesAll />
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
