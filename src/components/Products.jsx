import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { HiOutlineSearch } from "react-icons/hi";
import { Dropdown } from "flowbite-react";
import Swal from 'sweetalert2';

const Products = () => {
  const navigate = useNavigate();

  // State untuk menyimpan daftar produk
  const [products, setProducts] = useState([]);
  // State untuk menyimpan input pengguna
  const [productName, setProductName] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [productNumber, setProductNumber] = useState('');
  const [productFeed, setProductFeed] = useState(''); // State untuk jumlah pakan

  // Fungsi untuk menambah produk baru
  const addProduct = () => {
    if (
      productName.trim() !== '' &&
      productLocation.trim() !== '' &&
      productNumber.trim() !== '' &&
      productFeed.trim() !== ''
    ) {
      setProducts([
        ...products,
        {
          id: Date.now(),
          name: productName,
          location: productLocation,
          number: productNumber,
          feed: productFeed,
          image: 'images/default.jpg', // Assuming a default image for simplicity
        },
      ]);
      setProductName('');
      setProductLocation('');
      setProductNumber('');
      setProductFeed('');
    }
  };

  // Fungsi untuk menghapus produk berdasarkan ID
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Anda tidak dapat mengembalikan ini!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(products.filter(product => product.id !== id));
        Swal.fire(
          'Dihapus!',
          'Produk telah dihapus.',
          'success'
        );
      }
    });
  };

  // Fungsi untuk navigasi ke dashboard
  const goToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp animate__faster">
      <h1 className="text-center text-gray-700 text-2xl sm:text-3xl font-bold mb-4">Daftar Alat</h1>

      <div className="mb-8 text-center">
        <p className="text-gray-700">
          Silahkan isi formulir di bawah ini untuk menambahkan alat baru atau menghapusnya dari daftar.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">
            Nama Alat
          </label>
          <input
            type="text"
            id="productName"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama alat"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productLocation" className="block text-gray-700 font-bold mb-2">
            Lokasi Alat
          </label>
          <input
            type="text"
            id="productLocation"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan lokasi alat"
            value={productLocation}
            onChange={(e) => setProductLocation(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productNumber" className="block text-gray-700 font-bold mb-2">
            Nomor Pompa
          </label>
          <input
            type="text"
            id="productNumber"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nomor pompa"
            value={productNumber}
            onChange={(e) => setProductNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productFeed" className="block text-gray-700 font-bold mb-2">
            Jumlah Pakan
          </label>
          <input
            type="text"
            id="productFeed"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan jumlah pakan"
            value={productFeed}
            onChange={(e) => setProductFeed(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={addProduct}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow focus:outline-none"
          >
            Tambah
          </button>
          <button
            type="button"
            onClick={goToDashboard}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg shadow focus:outline-none"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </form>

      <div className="flex flex-col bg-white px-4 pt-3 pb-4 rounded-md w-full mt-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scroll-smooth">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between mb-3 ml-2 mt-2">
              <strong className="text-gray-700 pl-4 font-medium">Alat Pompa</strong>

              <div className="flex flex-row">
                <div className="relative pr-3">
                  <HiOutlineSearch
                    fontSize={16}
                    className="text-gray-600 absolute top-1/4 -translate-y-1/4 left-3"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-sm h-6 w-[10rem] border border-indigo-50 rounded-md pl-8 pr-4 bg-indigo-50"
                  />
                </div>

                <div className="flex gap-0.5 bg-indigo-50 text-gray-400 items-center font-semibold p-1 mb-2 rounded-md text-xs">
                  <Dropdown label="Last 30 Days" inline className="bg-indigo-50">
                    <Dropdown.Item>Last Week</Dropdown.Item>
                    <Dropdown.Item>Last Day</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>

            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-white outline outline-1 outline-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      Alat
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      Lokasi Alat
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      Nomor Pompa
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs text-center font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      Jumlah Pakan
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs text-center font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                
                <tbody className="bg-inherit">
                  {products.map((product) => (
                    <tr key={product.id} className="border-hidden">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-12">
                            <img
                              className="h-10 w-12 rounded-xl"
                              src={product.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">
                              {product.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs text-center font-medium text-gray-900">
                          {product.location}
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-center">
                        <span className="px-2 text-xs font-semibold text-black-800">
                          {product.number}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-center text-gray-500">
                        {product.feed}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
