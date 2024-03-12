'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session, status } = useSession(); // Menggunakan useSession dari NextAuth

  useEffect(() => {
    // If the status is 'loading', or there is no user session, exit the effect
    if (status === 'loading' || !session?.user) return;

    // Fetch product categories data from the API
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/product_categories?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`, // Include JWT token in the header
          },
        }
      )
      .then((response) => {
        console.log(response);
        setProducts(response.data.data.data); // Update the state with the fetched products data
      })
      .catch((error) => {
        console.error('Error fetching product categories:', error);
        // Handle errors here, such as setting an error state
      });
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
            <th>No</th>
            <th>Kategori</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800 text-center'>
          {Array.isArray(products) &&
            products.map((product: any, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td className='flex items-center justify-center gap-2'>
                  <button className='size-10 bg-blue-500 flex items-center justify-center text-white rounded-md'>
                    <BiEdit className='size-6' />
                  </button>
                  <button className='size-10 bg-red-500 flex items-center justify-center text-white rounded-md'>
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

export default ProductList;
