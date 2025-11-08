import { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' absolute top-2 right-0'>
      {isOpen ? (
        <div className='h-screen w-screen z-10 bg-white flex flex-col justify-start p-4 rounded'>
          <div
            className='flex justify-end font-semibold text-lg'
            title='Close'
            onClick={handleOpen}
          >
            X
          </div>
          <div className='flex flex-col gap-4 mt-4'>
            <a
              href='https://blog.gersonenriquez.com'
              className=' text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Blog
            </a>
            <a
              href='https://gersonenriquez.notion.site/7ebc6a676a864aff8de38c36d79b6674?v=62b4e41b54c54ae38c52b750d051cd4b'
              className='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
              target='_blank'
            >
              Book Notes
            </a>
          </div>
        </div>
      ) : (
        <div
          className='flex flex-col gap-1 sm:hidden mt-5 mr-5'
          onClick={handleOpen}
        >
          <span className=' flex w-6 bg-black-light h-0.5 text-gray text-opacity-0'>
            ----
          </span>
          <span className=' flex w-6 bg-black-light h-0.5 text-gray text-opacity-0'>
            ----
          </span>
          <span className=' flex w-6 bg-black-light h-0.5 text-gray text-opacity-0'>
            ----
          </span>
        </div>
      )}
    </div>
  );
};

export default Drawer;
