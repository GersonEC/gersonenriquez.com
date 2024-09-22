import react, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' absolute top-4 right-4'>
      {isOpen ? (
        <div className=' h-screen w-screen z-10 bg-dark flex flex-col justify-start p-8 rounded'>
          <div title='Close' onClick={handleOpen}>
            X
          </div>
          <div className='flex flex-col pt-2'>
            <a
              href='/now'
              className='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Now
            </a>
            <a
              href='/projects'
              className='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Projects
            </a>
            <a
              href='/articles/'
              className='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Articles
            </a>
            <a
              href='/booknotes/'
              className='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Book Notes
            </a>
            <a
              href='/cv/'
              className=' text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              CV
            </a>
          </div>
        </div>
      ) : (
        <div className='sm:hidden'>
          <img src='/menu.svg' alt='menu' onClick={handleOpen} />
        </div>
      )}
    </div>
  );
};

export default Drawer;
