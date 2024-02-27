export default function Navbar() {
  return (
    <div className='wrapper'>
      <div className='flex justify-between items-center py-8'>
        <a href='' className='max-h-24 flex items-center'>
          <img src='ikon.png' alt='1' className='max-h-24' />
          <p className='text-primary text-xl font-bold'>CiptaKode ini 1</p>
        </a>
        <a
          href=''
          className='
            py-3 px-8 bg-biru rounded-full text-white  font-medium text-xl
            hover:bg-white hover:text-biru
            border border-biru
            transition-all duration-300 ease-in
            '
        >
          PESAN
        </a>
      </div>
    </div>
  );
}
