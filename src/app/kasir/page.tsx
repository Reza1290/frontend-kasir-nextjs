'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { BiMinus, BiPlus, BiX } from 'react-icons/bi';

const Kasir = () => {
  const [nowMenu, setNowMenu] = useState(0);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const { data: session, status } = useSession();

  const [modal, setModal] = useState(false);

  const [cart, setCart]: any = useState([]);
  const [total, setTotal] = useState(0);

  const toogleModal = () => {
    setModal(!modal);
  };

  const calculateTotal = () => {
    let sum = 0;
    cart.forEach((item: any) => {
      sum += item.subtotal;
    });
    setTotal(sum);
  };

  const setToCart = (index: any) => {
    const product: Object = products[index];

    // Check if the product is already in the cart
    const isProductInCart = cart.some((item: any) => item.id === product.id);

    if (!isProductInCart) {
      const initialQuantity = 1; // Set initial quantity to product price
      const subtotal = product.price * initialQuantity;

      setCart((old: any) => [
        ...old,
        {
          ...product,
          quantity: 1,
          subtotal: subtotal,
        },
      ]);
      setTotal((oldTotal) => oldTotal + subtotal);
    }
  };

  const quantityHandle = (mode: number, index: number, q: number) => {
    setCart((oldCart: any) => {
      const updatedCart = [...oldCart];
      const productToUpdate = updatedCart[index];
      calculateTotal();

      if (mode === 1) {
        productToUpdate.quantity = q + 1;
        productToUpdate.subtotal =
          productToUpdate.price * productToUpdate.quantity;
      } else if (mode === 2) {
        if (productToUpdate.quantity > 0) {
          productToUpdate.quantity = q - 1;
          productToUpdate.subtotal =
            productToUpdate.price * productToUpdate.quantity;
        } else {
          // Remove the product from the cart if quantity becomes zero
          updatedCart.splice(index, 1);
        }
      }
      return updatedCart;
    });
  };

  const handleMenu = (menu: any) => {
    setNowMenu(menu);
  };

  useEffect(() => {
    if (status === 'loading') return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk
    if (!session?.user) return; // Jika tidak ada sesi atau masih memuat, hentikan pengambilan data produk

    // Mengambil data produk dari API dengan menyertakan token JWT dalam header Authorization
    fetch(`http://localhost:8000/api/product_categories_all`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategory(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));

    fetch(`http://localhost:8000/api/products`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));

    // console.log(category);
  }, [session, status]);

  return (
    <>
      {modal == true && (
        <Modal data={cart} close={toogleModal} totalBelanja={total} />
      )}
      <div className='wrapper bg-white mx-5 my-4 p-5 rounded-md'>
        <h1 className='font-bold text-4xl' onClick={() => console.log(session)}>
          Kasir
        </h1>
      </div>
      <div className='wrapper bg-white mx-5 p-5 rounded-md'>
        <div className='flex flex-wrap gap-10'>
          {Array.isArray(category) &&
            category.map((value: any, index) => (
              <div
                key={value.id}
                onClick={() => handleMenu(index)}
                className={`${
                  nowMenu == index ? 'bg-blue-500' : 'border-blue-500 border'
                } p-2 rounded-md px-5 cursor-pointer`}
              >
                <h1
                  className={`${
                    nowMenu == index ? 'text-white' : 'text-black'
                  }   `}
                >
                  {value.name}
                </h1>
              </div>
            ))}
        </div>
      </div>
      <div className='wrapper bg-white mx-5 my-5 p-5 rounded-md'>
        <div className='flex justify-between gap-5 max-md:flex-col'>
          <div className='w-full border rounded-xl p-5 md:max-w-[500px] flex gap-5 flex-wrap justify-center'>
            {Array.isArray(products) &&
              products.map((value: any, index) => {
                if (value.id_category === category[nowMenu].id) {
                  return (
                    <div
                    key={value.id}
                      className='bg-blue-500 flex flex-col justify-center items-center flex-col size-48 rounded-lg cursor-pointer'
                      onClick={() => setToCart(index)}
                    >
                      <h1 className='text-white text-4xl font-bold text-center'>
                        {value.name}
                      </h1>
                      <h1 className='text-white text-3xl'>{value.price}</h1>
                    </div>
                  );
                }
              })}
          </div>
          <div className='flex flex-col border rounded-xl p-5 md:min-w-[700px] gap-2 h-max'>
            <h1 className='text-center font-semibold text-3xl'>Pesanan</h1>
            <div className='flex flex-col gap-4'>
              {Array.isArray(cart) &&
                cart.map((value: any, index) => {
                  return (
                    <div key={value.id} className='flex justify-between items-center border border-blue-400 rounded-md p-2 gap-1 max-md:flex-col'>
                      {/* <div className='size-16 bg-blue-400 rounded-md'></div> */}
                      <div className='flex flex-col justify-center mx-5'>
                        <h1>{value.name}</h1>
                        <h1 className=''>
                          <span className='font-bold'>Rp. {value.price}</span>
                        </h1>
                      </div>
                      <div className='flex gap-2 max-sm:flex-col'>
                        <div className='flex gap-2'>
                          <div
                            className='size-16 bg-red-400 rounded-md flex justify-center items-center text-white cursor-pointer'
                            onClick={() =>
                              quantityHandle(2, index, value.quantity)
                            }
                          >
                            <BiMinus className='size-12' />
                          </div>
                          <div className='size-16 border rounded-md flex justify-center items-center text-black font-bold text-xl'>
                            {value.quantity}
                          </div>

                          <div
                            className='size-16 bg-blue-400 rounded-md flex justify-center items-center text-white cursor-pointer'
                            onClick={() =>
                              quantityHandle(1, index, value.quantity)
                            }
                          >
                            <BiPlus className='size-12' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-center mx-5 w-[120px] text-end'>
                          Rp. {value.subtotal}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className=' rounded-md flex justify-end p-5 text-2xl text-black text-end uppercase mt-10'>
              Total <span className='mx-4 font-bold'>Rp. {total}</span>
            </div>

            <div
              className='bg-blue-500 rounded-md flex justify-center p-5 text-2xl text-white uppercase cursor-pointer'
              onClick={() => toogleModal()}
            >
              Konfirmasi
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Modal = ({ data, close, totalBelanja }: any) => {
  const { data: session } = useSession();

  const handleSubmit = async () => {
    const transaksi = {
      transaction_date: new Date().toISOString().split('T')[0],
      total_amount: totalBelanja,
      payment_method: 'cash',
      items: data,
    };
    if (transaksi.items.length == 0) {
      alert('Tambahkan Pesanan Dahulu');
      return;
    }
    const response = await fetch('http://localhost:8000/api/transactions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaksi),
    });
    const hasil = await response.json();
    console.log(hasil);
    if (hasil.error) {
      alert('Gagal ' + hasil.error);
      return;
    }
    if (hasil.success) {
      alert('Berhasil!');
      window.location.reload();
    }
  };

  return (
    <div className='absolute w-full wrapper p-5 md:p-20  flex justify-center items-center h-screen'>
      <div className='flex flex-col bg-white p-5 rounded-lg border border-blue-500'>
        <div className='flex justify-between items-center gap-6 border-b'>
          <h1 className='text-xl'>Periksa Kembali Pesanan Yang Dimasukkan</h1>
          <BiX
            className='text-4xl font-bold cursor-pointer'
            onClick={() => close()}
          />
        </div>
        <div className='flex flex-col gap-2 my-4'>
          {Array.isArray(data) &&
            data.map((value: any, index) => {
              return (
                <div key={value.id} className='flex justify-between'>
                  <h1>{value.name}</h1>
                  <p>
                    ({value.quantity}) Rp. {value.subtotal}
                  </p>
                </div>
              );
            })}
        </div>
        <div className='border-t flex flex-col items-end'>
          <h1>Total Rp. {totalBelanja}</h1>
        </div>
        <div className='flex justify-between mt-10 gap-4'>
          <button
            className='w-full py-4 bg-gray-800 rounded-lg text-white'
            onClick={() => close()}
          >
            Cancel
          </button>
          <button
            className='w-full py-4 bg-blue-500 rounded-lg text-white'
            onClick={() => handleSubmit()}
          >
            Selesaikan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kasir;
