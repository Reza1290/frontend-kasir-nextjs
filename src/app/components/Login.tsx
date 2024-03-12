'use client';

import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const { data: session } = useSession();

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    // e.preventDefault();
    const credentialDetails = {
      username: Username,
      password: Password,
    };

    // const respon = await axios.post(
    //   'http://167.172.70.125:8000/api/login',
    //   credentialDetails
    // );
    // console.log(respon.data);
    await signIn('credentials', {
      username: Username,
      password: Password,
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-md w-full'>
        <div className='bg-white border border-biru rounded-md p-6 flex flex-col gap-12 mx-4'>
          <div>
            <h1 className='text-4xl font-bold text-gray-800'>
              Selamat datang!
            </h1>
            <p className='text-gray-600'>Login Dengan Username dan Password!</p>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                placeholder='username'
                className='p-4 border-gray-200 border rounded-lg'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='password'
                className='p-4 border-gray-200 border rounded-lg'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div
            className='bg-biru rounded-lg p-5 flex justify-center gap-6 items-center group hover:bg-white border border-biru cursor-pointer'
            onClick={
              (e) => handleLogin(e)
              // handle(e)
            }
          >
            <p className='text-gray-200 text-lg group-hover:text-gray-800'>
              Masuk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
