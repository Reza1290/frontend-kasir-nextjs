'use client';

import { signOut } from 'next-auth/react';
import ButtonSidebar from '../components/ButtonSidebar';
// import ButtonTheme from '../components/ButtonTheme';
import MenuButton from '../components/MenuButton';
import MenuList from '../components/MenuList';
import MenuSubList from '../components/MenuSubList';
import { useState } from 'react';
import {
  BiCategory,
  BiLogOut,
  BiLogoProductHunt,
  BiMinus,
  BiPackage,
  BiPlus,
  BiSolidComponent,
  BiSolidDashboard,
  BiSolidLayout,
  BiTransfer,
  BiUser,
  BiX,
} from 'react-icons/bi';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children, ...props }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (router == '/kasir') {
    return (
      <div className='flex flex-col items-center justify-center'>
        {children}
      </div>
    );
  }

  return (
    <main className='ease-out delay-150 duration-200'>
      <div
        id='sidebar'
        className={`p-6 w-72 h-screen bg-white dark:bg-slate-800 z-20 fixed top-0 -left-96 xl:left-0 xl:w-72  peer-focus:left-0 
            ${isSidebarOpen ? 'left-0' : 'xl:min-xl:-left-96'}
                peer:transition ease-out delay-150 duration-200 overflow-y-auto
            `}
      >
        <div className='flex flex-col justify-start item-center'>
          <div className='flex justify-between items-center'>
            <a
              href={'../'}
              className='text-lg font-bold text-gray-800 dark:text-gray-200'
            >
              Nasigor Gila 19
            </a>
            {/* <ButtonTheme /> */}
            {isSidebarOpen && (
              <button onClick={toggleSidebar}>
                <BiX className='text-3xl' />
              </button>
            )}
          </div>
          <div className='my-4 pb-4'>
            <h1 className='m-2 text-gray-800 dark:text-gray-200'>Menu</h1>
            <MenuButton component={<BiSolidDashboard />} href={'/'}>
              Dashboard
            </MenuButton>
            <MenuButton component={<BiSolidComponent />} href={'/stock'}>
              Stock
            </MenuButton>
            <MenuButton component={<BiPackage />} href={'/produk'}>
              Produk
            </MenuButton>
            <MenuButton component={<BiCategory />} href={'/category'}>
              Category
            </MenuButton>
            <MenuList component={<BiTransfer />} title={'Transaksi'}>
              <MenuSubList href={'/transaksi/log'}>Log</MenuSubList>
              <MenuSubList href={'/transaksi/rincian'}>Rincian</MenuSubList>
            </MenuList>
            <MenuList component={<BiUser />} title={'Akun'}>
              <MenuSubList href={'/me'}>Profil</MenuSubList>
              <div onClick={() => signOut()}>Logout</div>
            </MenuList>
          </div>
        </div>
      </div>
      <div className='p-10 xl:ml-96'>
        <div className='flex justify-between w-full'>
          <ButtonSidebar onClick={toggleSidebar} isOpen={isSidebarOpen} />
          {router}
        </div>
        <div className='my-10 bg-white rounded-xl p-10'>{children}</div>
      </div>
      {/* </div> */}
    </main>
  );
}
