'use client';

import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  // const handle = async (e: any) => {
  //   e.preventDefault();
  //   const cookie = await axios.post('http://localhost:1290/login', {
  //     email: 'reza@g.com',
  //   });

  //   console.log(cookie);
  // };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-md w-full'>
        <div className='bg-white border border-biru rounded-md p-6 flex flex-col gap-12'>
          <div>
            <h1 className='text-4xl font-bold text-gray-800'>
              Selamat datang!
            </h1>
            <p className='text-gray-600'>
              Silahkan Login Menggunakan Akun Google untuk melanjutkan
            </p>
          </div>
          <div
            className='bg-biru rounded-lg p-5 flex justify-center gap-6 items-center group hover:bg-white border border-biru cursor-pointer'
            onClick={(e) =>
              signIn('google', { callbackUrl: '/', redirect: true })
              // handle(e)
            }
          >
            <img
              className='w-8 h-8 hidden group-hover:block'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png'
              alt=''
            />
            <img
              className='w-8 h-8 group-hover:hidden'
              src='https://ragsdalemartin.com/wp-content/uploads/2020/07/white-google-logo.png'
              alt=''
            />
            <p className='text-gray-200 text-lg group-hover:text-gray-800'>
              Masuk Dengan Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
