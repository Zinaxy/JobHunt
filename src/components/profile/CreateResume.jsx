import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { profile } from '../../assets';
import axiosClient from '../../utils/FetchApi';
import { useStateContext } from '../../context/ContextProvider';
import { useEffect, useState } from 'react';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { TbLoader3 } from 'react-icons/tb';

const CreateResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [url, setUrl] = useState([]);
  const [resumeData, setResumeData] = useState(null);
  const [fileSize, setFileSize] = useState(0); // Initialize file size to 0
  /* const [coverLetterFile, setCoverLetterFile] = useState(null); */
  const [isLoading, SetLoading] = useState(false);

  const handleResumeChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  /* const handleCoverLetterChange = (event) => {
    setCoverLetterFile(event.target.files[0]);
  }; */

  const handleSubmit = async (event) => {
    event.preventDefault();
    SetLoading(true);
    const formData = new FormData();
    formData.append('resume', resumeFile);
    /*  formData.append('coverLetter', coverLetterFile); */

    try {
      const response = await axiosClient.post('/resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response) {
        SetLoading(false);
        setNotiffication('Resume Uploaded Successfull');
      }
    } catch (error) {
      SetLoading(false);
      setNotiffication('Resume Upload Failed');
    }
  };

  /* fetchdata */
  useEffect(() => {
    axiosClient
      .get('/resume')
      .then(({ data }) => {
        setUrl(data.url);
        setResumeData(data.resume);
        const fileSizeInMB = data.fileSize / (1024 * 1024);
        setFileSize(fileSizeInMB);
      })
      .catch((error) => {
        // Handle fetch error
        console.error('Error fetching resume data:', error);
        // You might want to set an error state or display an error message to the user
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      {' '}
      <ul className=''>
        <li>
          <div className='flex items-center mt-4 '>
            <div className='text-2xl text-gray-500 shrink-0'>
              <i className='uil uil-file'></i>
            </div>
            <div className='ml-4'>
              <h6 className='mb-0 text-gray-900 text-16 dark:text-gray-50'>
                {resumeData ? resumeData.resume : ' Resume.pdf'}
              </h6>
              <p className='mb-0 text-gray-500 dark:text-gray-300'>
                {fileSize.toFixed(2)} MB
              </p>
            </div>
            <div className='ml-auto text-xl flex gap-2 items-center'>
              <div className=''>
                <label
                  htmlFor='uploadFile1'
                  className='border-2 border-orange-600 hover:bg-gray-700 text-orange-600 text-sm px-2 py-2 my-5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]'
                >
                  <MdOutlineDriveFolderUpload size={20} />
                  <input
                    type='file'
                    id='uploadFile1'
                    className='hidden'
                    accept='application/pdf'
                    onChange={handleResumeChange}
                  />
                </label>
              </div>
              <div className=''>
                {' '}
                <a
                  href={url}
                  download=''
                  className='border-2 border-orange-600 hover:bg-gray-700 text-orange-600 text-sm px-2 py-2 my-5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]'
                >
                  <LuDownload size={20} />
                </a>
              </div>
            </div>
          </div>
        </li>
        {/*  <li>
          <div className='flex items-center mt-4 '>
            <div className='text-2xl text-gray-500 shrink-0'>
              <i className='uil uil-file'></i>
            </div>
            <div className='ml-4'>
              <h6 className='mb-0 text-gray-900 text-16 dark:text-gray-50'>
                Cover-letter.pdf
              </h6>
              <p className='mb-0 text-gray-500 dark:text-gray-300'>1.25 MB</p>
            </div>
            <div className='ml-auto text-xl flex gap-2 items-center'>
              <div className=''>
                <label
                  htmlFor='uploadFile1'
                  className='border-2 border-orange-600 hover:bg-gray-700 text-orange-600 text-sm px-2 py-2 my-5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]'
                >
                  <MdOutlineDriveFolderUpload size={20} />
                  <input
                    type='file'
                    id='uploadFile2'
                    className='hidden'
                    accept='application/pdf'
                    onChange={handleCoverLetterChange}
                  />
                </label>
              </div>
              <div className=''>
                {' '}
                <a
                  href='assets/images/dark-logo.png'
                  download=''
                  className='border-2 border-orange-600 hover:bg-gray-700 text-orange-600 text-sm px-2 py-2 my-5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]'
                >
                  <LuDownload size={20} />
                </a>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
      <div className='flex justify-end text-center'>
        <button
          type='submit'
          className='text-white bg-orange-600 px-3 py-2 rounded'
        >
          {isLoading ? (
            <TbLoader3 size={20} className='animate-spin' />
          ) : (
            ' Update'
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateResume;
