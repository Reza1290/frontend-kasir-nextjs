'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Component from './page';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Home() {
  const handleClick = (list: number) => {
    router.push('/cart');
  };
  const handleRoute = () => {
    router.push('/cart');
  };

  const router = useRouter();
  return (
    <main className='flex flex-col items-center gap-10'>
      <Navbar />
      <div className='wrapper flex justify-between max-md:flex-col'>
        <div className='p-24 max-md:p-12 py-8 md:w-[50%] flex flex-col items-center justify-start gap-16'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-5xl text-primary font-bold'>
              Buat Bisnismu lebih efektif dan elegan
            </h1>
            <p className='text-primary/50 text-2xl'>
              Kami menyediakan kebutuhan anda. Pesan dalam satu klik.
            </p>
          </div>
          <button
            onClick={handleRoute}
            className='
            bg-biru rounded-2xl w-full text-2xl font-medium py-6 px-16 text-white
            hover:bg-white hover:text-biru
            border border-biru
            transition-all duration-300 ease-in
          '
          >
            Pesan Sekarang
          </button>
        </div>
        <div className='md:w-[50%] flex justify-center items-end'>
          <div className='bg-biru/20 rounded-full relative shadow-sm shadow-biru/20'>
            <img src='man.png' className='rounded-full' alt='' />
          </div>
        </div>
      </div>
      <div className='flex flex-col  wrapper p-4 my-16 m-6 gap-6'>
        <div className='bg-container rounded-3xl p-8 flex justify-between max-md:flex-col max-md:items-center'>
          <div className='text-white my-2'>
            <h1 className='text-3xl font-bold'>Layanan</h1>
            <h1 className='text-2xl'>Kami</h1>
          </div>
          <div className='grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1 justify-end'>
            <div
              onClick={() => handleClick(1)}
              className='bg-white cursor-pointer size-72 rounded-3xl p-4'
            >
              <div className='my-2'>
                <h1 className='text-blue-400 font-medium text-2xl'>Sl1cing</h1>
                <p className='font-medium text-lg'>Slicing design 1 Halaman</p>
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
              onClick={() => handleClick(2)}
              className='bg-white cursor-pointer size-72 rounded-3xl p-4'
            >
              <div className='my-2'>
                <h1 className='text-white font-medium text-2xl w-max p-2 py-1 rounded-xl bg-blue-400'>
                  SlEacing
                </h1>
                <p className='font-medium text-lg'>Slicing design 2 Halaman</p>
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
              onClick={() => handleClick(3)}
              className='bg-white cursor-pointer size-72 rounded-3xl p-4'
            >
              <div className='my-2'>
                <h1 className='text-blue-400 font-medium text-2xl'>Batch</h1>
                <p className='font-medium text-lg'>Slicing design 5 Halaman</p>
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
    </main>
  );
}
