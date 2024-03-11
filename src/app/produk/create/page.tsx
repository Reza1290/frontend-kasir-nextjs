'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const createProduk = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session, status } = useSession();

  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [aktif, setAktif] = useState(1);
  const [kategori, setKategori] = useState();
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  interface Category {
    id: number;
  }
  const handleSubmit = async () => {
    const produk = {
      name: name,
      description: desc,
      is_active: aktif,
      price: price,
      id_category: kategori,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/products`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produk),
      }
    );
  };

  useEffect(() => {
    if (status === 'loading') return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    if (!session?.user) return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    // Mengambil data produk dari API dengan menyertakan token JWT dalam header Authorization
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/api/product_categories_all`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
        setKategori(data.data[0].id);
      })
      .catch((error) => 1);
  }, [currentPage, session, status]);

  return (
    <div className='flex flex-col  items-center gap-4'>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='nama'>Nama Produk *</label>
        <input
          type='text'
          id='nama'
          placeholder='Nasi Goreng'
          className='p-2 rounded-md border'
          onChange={(e: any) => setName(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='desc'>Deskripsi Produk (optional)</label>
        <textarea
          id='desc'
          placeholder='Best Seller'
          className='p-2 rounded-md border'
          onChange={(e: any) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='harga'>Harga Satuan *</label>
        <input
          type='number'
          id='harga'
          placeholder='250000 (dalam rupiah)'
          className='p-2 rounded-md border'
          onChange={(e: any) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='is_aktif'>Aktif *</label>
        <select
          name='is_aktif'
          id='is_aktif'
          className='p-2 rounded-md border'
          onChange={(e: any) => setAktif(e.currentTarget.value)}
          defaultValue={1}
        >
          <option value='1'>Aktif</option>
          <option value='0'>Tidak Aktif</option>
        </select>
      </div>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='category'>Kategori *</label>
        <select
          name='category'
          id='category'
          className='p-2 rounded-md border'
          onChange={(e: any) => setKategori(e.currentTarget.value)}
        >
          <option disabled>Pilih Salah Satu</option>
          {Array.isArray(categories) &&
            categories.map((value: any, index) => (
              <option key={value.id} value={value.id}>
                {value.name}
              </option>
            ))}
        </select>
      </div>
      <div className='flex  max-w-[320px] w-full'>
        <button
          className='p-2 w-full rounded-lg bg-blue-500 text-white'
          onClick={() => handleSubmit()}
        >
          SIMPAN
        </button>
      </div>
    </div>
  );
};

export default createProduk;
