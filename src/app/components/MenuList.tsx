import React, { useState } from 'react';
import { BiSolidComponent } from 'react-icons/bi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const MenuList = ({ component, children, ...props }: any) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenuList = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='MenuList'>
      <a
        onClick={toggleMenuList}
        className={`MenuList-button ${
          isActive
            ? 'active flex items-center gap-5 text-gray-600 dark:text-gray-200 rounded-lg p-2 my-1 justify-between cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg select-none'
            : 'flex items-center gap-5 text-gray-600 dark:text-gray-200 rounded-lg p-2 my-1 justify-between  cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg select-none'
        }`}
      >
        <div className={`flex gap-5 items-center`}>
          <div className='px-2'>{component}</div>
          <div className='font-medium'>{props.title}</div>
        </div>
        {isActive ? (
          <div className='transition-all duration-1000 ease-out ease-in'>
            <MdKeyboardArrowUp />
          </div>
        ) : (
          <div className='transition-all duration-1000 ease-out ease-in'>
            <MdKeyboardArrowDown />
          </div>
        )}
      </a>
      <div
        className={`MenuList-panel ${
          isActive ? 'max-h-screen' : 'max-h-0 '
        } overflow-hidden transition-max-height duration-700 ease-out ease-in`}
      >
        <div className='flex flex-col gap-5 my-2  '>{children}</div>
      </div>
    </div>
  );
};

export default MenuList;
