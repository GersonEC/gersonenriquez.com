import { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' absolute top-4 right-4'>
      {isOpen ? (
        <div className='h-screen w-screen z-10 bg-dark flex flex-col justify-start p-8 rounded'>
          <div
            className='flex justify-end font-semibold text-2xl'
            title='Close'
            onClick={handleOpen}
          >
            X
          </div>
          <div className='flex flex-col gap-4 mt-4'>
            <a
              href='/now'
              className='mr-5 text-3xl hover:brightness-75 transition duration-200 ease-out-in'
            >
              Now
            </a>
            <a
              href='/projects'
              className='mr-5 text-3xl hover:brightness-75 transition duration-200 ease-out-in'
            >
              Projects
            </a>
            <a
              href='/articles/'
              className='mr-5 text-3xl hover:brightness-75 transition duration-200 ease-out-in'
            >
              Articles
            </a>
            <a
              href='https://gersonenriquez.notion.site/7ebc6a676a864aff8de38c36d79b6674?v=62b4e41b54c54ae38c52b750d051cd4b'
              className='mr-5 text-3xl hover:brightness-75 transition duration-200 ease-out-in'
              target='_blank'
            >
              Book Notes
            </a>
            <a
              href='/cv/'
              className=' text-3xl hover:brightness-75 transition duration-200 ease-out-in'
            >
              CV
            </a>
          </div>
        </div>
      ) : (
        <div className='sm:hidden'>
          <img src='/src/assets/menu.svg' alt='menu' onClick={handleOpen} />
        </div>
      )}
    </div>
  );
};

export default Drawer;
