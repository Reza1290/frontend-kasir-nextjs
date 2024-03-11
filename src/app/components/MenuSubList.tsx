'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const MenuSubList = ({ children, ...props }: any) => {
  const router = usePathname();
  const isActive = router === props.href;

  return (
    <Link href={props.href}>
      <div
        className={`mx-20 text-start text-gray-600 dark:text-gray-300 text-sm font-medium hover:px-5 hover:text-blue-300 dark:hover:text-blue-400 duration-500 ease-out rounded-md  ${
          isActive ? 'text-blue-500 font-normal' : ''
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default MenuSubList;
