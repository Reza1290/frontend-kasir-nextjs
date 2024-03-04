'use client';
import { useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const Cart = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

  const [Cart, setCart] = useState(2);
  const [Pay, setPay] = useState(1);

  if (status === 'loading') {
    return <>...</>;
  }

  const setSelected = (x: number) => {
    setCart(x);
  };

  return (
    <main className='flex flex-col items-center gap-10'>
      <Navbar />
      <div className='wrapper flex justify-between max-md:flex-col max-md:justify-center max-md:items-center'>
        <div className='flex flex-col wrapper p-4 m-6 gap-6'>
          <div className='bg-container rounded-3xl p-8 flex justify-between max-md:flex-col max-md:items-center'>
            <div className='grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1 justify-end w-full'>
              <div
                onClick={() => setSelected(1)}
                className={`bg-white cursor-pointer  rounded-3xl p-4 transition-all duration-200 border-4 border select-none  ${
                  Cart === 1
                    ? ' border-blue-600 ring-blue-600 ring'
                    : ' border-white'
                }`}
              >
                <div className='my-2'>
                  <h1 className='text-blue-400 font-medium text-2xl'>
                    Sl1cing
                  </h1>
                  <p className='font-medium text-lg'>
                    Slicing design 1 Halaman
                  </p>
                </div>
                <h1 className='font-bold text-5xl'>IDR 340K</h1>
                <div className='border-t  flex flex-col my-4 py-2 gap-1'>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> 2x Revisi</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Desktop Mobile Responsive</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Bebas Konsultasi</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setSelected(2)}
                className={`bg-white cursor-pointer  rounded-3xl p-4 transition-all duration-200 border-4 border select-none  ${
                  Cart === 2
                    ? ' border-blue-600 ring-blue-600 ring'
                    : ' border-white'
                }`}
              >
                <div className='my-2'>
                  <h1 className='text-white font-medium text-2xl w-max p-2 py-1 rounded-xl bg-blue-400'>
                    SlEacing
                  </h1>
                  <p className='font-medium text-lg'>
                    Slicing design 2 Halaman
                  </p>
                </div>
                <h1 className='font-bold text-5xl'>IDR 900K</h1>
                <div className='border-t  flex flex-col my-4 py-2 gap-1'>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> 3x Revisi</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Desktop Mobile Responsive</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Bebas Konsultasi</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Framework JS</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setSelected(3)}
                className={`bg-white cursor-pointer  rounded-3xl p-4 transition-all duration-200 border-4 border select-none  ${
                  Cart === 3
                    ? ' border-blue-600 ring-blue-600 ring'
                    : ' border-white'
                }`}
              >
                <div className='my-2'>
                  <h1 className='text-blue-400 font-medium text-2xl'>Batch</h1>
                  <p className='font-medium text-lg'>
                    Slicing design 5 Halaman
                  </p>
                </div>
                <h1 className='font-bold text-5xl'>IDR 1500K</h1>
                <div className='border-t  flex flex-col my-4 py-2 gap-1'>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> 8x Revisi</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Desktop Mobile Responsive</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Bebas Konsultasi</p>
                  </div>
                  <div className='flex items-center justify-start gap-4'>
                    <svg
                      className='size-4 fill-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                    </svg>
                    <p> Framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wrapper flex  px-10 mx-auto '>
        <div className='rounded-3xl border p-8 w-full flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Purchase</h1>
          <div className='flex justify-between gap-10 w-full'>
            <div
              onClick={() => setPay(1)}
              className={` ${
                Pay === 1 ? 'ring ring-blue-600 bg-white' : 'bg-gray-100'
              } border rounded-xl cursor-pointer p-4 flex  flex-col w-full`}
            >
              <p>Uang Muka (40%)</p>
              <p className='font-bold'>
                {Cart === 1
                  ? 'IDR 136K'
                  : Cart === 2
                  ? 'IDR 360K'
                  : Cart === 3 && 'IDR 600K'}
              </p>
            </div>
            <div
              onClick={() => setPay(2)}
              className={` ${
                Pay === 2 ? 'ring ring-blue-600 bg-white' : 'bg-gray-100'
              } border rounded-xl cursor-pointer p-4 flex  flex-col w-full`}
            >
              <p>Lunas</p>
              <p className='font-bold'>
                {Cart === 1
                  ? 'IDR 340K'
                  : Cart === 2
                  ? 'IDR 900K'
                  : Cart === 3 && 'IDR 1500K'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
