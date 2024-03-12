'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session, status } = useSession(); // Menggunakan useSession dari NextAuth

  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (status === 'loading') return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    if (!session?.user) return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk

    // Mengambil data produk dari API dengan menyertakan token JWT dalam header Authorization
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/products?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((response) => setProducts(response.data.data.data))
      .catch((e) => 1);
  }, [currentPage, session, status]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className='shadow-sm overflow-hidden my-8'>
      <div className='flex justify-end'>
        <Link
          href={'produk/create'}
          className='bg-blue-500 text-white rounded-md py-2 px-5 text-xl my-2 cursor-pointer'
        >
          INPUT
        </Link>
      </div>
      <table className='border-collapse table-auto w-full text-md'>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Deskripsi</th>
            <th>Harga Satuan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800 text-center'>
          {Array.isArray(products) &&
            products.map((product: any, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category?.name}</td>
                <td className='line-clamp-1'>{product.description}</td>
                <td>{product.price}</td>
                <td className='flex items-center justify-center gap-2'>
                  <Link
                    href={'/produk/' + product.id}
                    className='size-10 bg-blue-500 flex items-center justify-center text-white rounded-md'
                  >
                    <BiEdit className='size-6' />
                  </Link>
                  <button
                    className='size-10 bg-red-500 flex items-center justify-center text-white rounded-md'
                    onClick={() => toggleModal()}
                  >
                    <BiTrash className='size-6' />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className='flex gap-2 my-4 justify-end'>
        <button
          className='bg-gray-200 rounded-md py-2 px-4'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className='bg-gray-200 rounded-md py-2 px-4'
          onClick={handleNextPage}
          disabled={!products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Modal = () => {
  const handleHapus = () => {};

  return (
    <div className='absolute w-full wrapper p-5 md:p-20  flex justify-center items-center h-screen'>
      <div className='flex flex-col bg-white p-5 rounded-lg border border-blue-500'>
        Hapus?w akowak koa ko
      </div>
    </div>
  );
};

export default ProductList;
