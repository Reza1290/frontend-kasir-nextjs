'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const EditProduk = ({ params: { slug } }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product>();
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
    id_category: string;
    description: string;
    is_active: number;
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

    const respone = await axios.put(
      `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/products/${slug}`,
      produk,
      {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
  };

  useEffect(() => {
    if (status === 'loading') return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    if (!session?.user) return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    // Mengambil data produk dari API dengan menyertakan token JWT dalam header Authorization
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/api/products/${slug}`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data);
        setKategori(data.data.id_category);
      })
      .catch((error) => 1);
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/api/product_categories_all`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => 1);
  }, [session, status, slug]);

  return (
    <div className='flex flex-col  items-center gap-4'>
      EDIT
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='nama'>Nama Produk *</label>
        <input
          type='text'
          id='nama'
          placeholder='Nasi Goreng'
          className='p-2 rounded-md border'
          onChange={(e: any) => setName(e.target.value)}
          defaultValue={product?.name}
          required
        />
      </div>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='desc'>Deskripsi Produk (optional)</label>
        <textarea
          id='desc'
          placeholder='Best'
          className='p-2 rounded-md border'
          onChange={(e: any) => setDesc(e.target.value)}
          defaultValue={product?.description}
        >
          {product?.description}
        </textarea>
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
          defaultValue={product?.price}
        />
      </div>
      <div className='flex flex-col max-w-[320px] w-full'>
        <label htmlFor='is_aktif'>Aktif *</label>
        <select
          name='is_aktif'
          id='is_aktif'
          className='p-2 rounded-md border'
          onChange={(e: any) => setAktif(e.currentTarget.value)}
          defaultValue={product?.is_active}
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

export default EditProduk;
