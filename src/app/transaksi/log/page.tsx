'use client';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session, status } = useSession(); // Menggunakan useSession dari NextAuth

  useEffect(() => {
    if (status === 'loading') return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    if (!session?.user) return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk

    // Mengambil data produk dari API dengan menyertakan token JWT dalam header Authorization
    fetch(`${process.env.DOMAIN_API}/api/transactions?page=${currentPage}`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [currentPage, session, status]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  };

  return (
    <div className='shadow-sm overflow-hidden my-8'>
      <table className='border-collapse table-auto w-full text-md'>
        <thead>
          <tr>
            <th>Tanggal Transaksi</th>
            <th>Jumlah Uang Masuk</th>
            <th>Tipe Pembayaran</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800 text-center'>
          {Array.isArray(products) &&
            products.map((product: any, index) => (
              <tr key={product.id}>
                <td>{product.transaction_date}</td>
                <td>{product.total_amount}</td>
                <td>{product.payment_method}</td>
                {/* <td className='flex items-center justify-center gap-2'>
                  <button className='size-10 bg-blue-500 flex items-center justify-center text-white rounded-md'>
                    <BiEdit className='size-6' />
                  </button>
                  <button className='size-10 bg-red-500 flex items-center justify-center text-white rounded-md'>
                    <BiTrash className='size-6' />
                  </button>
                </td> */}
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

export default ProductList;
