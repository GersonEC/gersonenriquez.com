import react, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class=' absolute top-4 right-4'>
      {isOpen ? (
        <div class=' h-screen w-screen z-10 bg-dark flex flex-col justify-start p-8 rounded'>
          <div title='Close' onClick={handleOpen}>
            X
          </div>
          <div class='flex flex-col pt-2'>
            <a
              href='/now'
              class='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Now
            </a>
            <a
              href='/projects'
              class='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Projects
            </a>
            <a
              href='/articles/'
              class='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Articles
            </a>
            <a
              href='/booknotes/'
              class='mr-5 text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              Book Notes
            </a>
            <a
              href='/cv/'
              class=' text-lg hover:brightness-75 transition duration-200 ease-out-in'
            >
              CV
            </a>
          </div>
        </div>
      ) : (
        <div class='sm:hidden'>
          <img src='/menu.svg' alt='menu' onClick={handleOpen} />
        </div>
      )}
    </div>
  );
};

export default Drawer;
