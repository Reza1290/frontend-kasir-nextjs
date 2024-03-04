'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className='wrapper'>
      <div className='flex justify-between items-center py-8'>
        <a href='' className='max-h-24 flex items-center'>
          <img src='ikon.png' alt='1' className='max-h-24' />
          <p className='text-primary text-xl font-bold'>CiptaKode</p>
        </a>
        <div className='flex justify-between items-center gap-4'>
          {session ? (
            <>
              <p>{session?.user.name}</p>
              <a
                onClick={() => signOut()}
                className='
            py-3 px-8 bg-biru rounded-full text-white  font-medium text-xl
            hover:bg-white hover:text-biru
            border border-biru
            transition-all duration-300 ease-in
            cursor-pointer
            '
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a
                href='/login'
                className='
            py-3 px-8 bg-biru rounded-full text-white  font-medium text-xl
            hover:bg-white hover:text-biru
            border border-biru
            transition-all duration-300 ease-in
            '
              >
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
