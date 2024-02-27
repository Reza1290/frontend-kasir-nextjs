import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-10'>
      <Navbar />
      <div className='wrapper flex justify-between'>
        <div className='p-24 py-8 w-[50%] flex flex-col items-center justify-start gap-16'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-5xl text-primary font-bold'>
              Buat Bisnismu lebih efektif dan elegan
            </h1>
            <p className='text-primary/50 text-2xl'>
              Kami menyediakan kebutuhan anda. Pesan dalam satu klik.
            </p>
          </div>
          <button
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
        <div className='w-[50%] flex justify-center items-end'>
          <div className='bg-biru/20 rounded-full relative shadow-sm shadow-biru/20'>
            <img src='man.png' className='rounded-full' alt='' />
          </div>
        </div>
      </div>
      <div className='wrapper bg-container p-4 my-16 m-6 rounded-3xl h-72'></div>
    </main>
  );
}
