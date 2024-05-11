import React, { useState } from 'react';

const Products = () => {
  // State untuk menyimpan daftar produk
  const [products, setProducts] = useState([]);
  // State untuk menyimpan input pengguna
  const [productName, setProductName] = useState('');

  // Fungsi untuk menambah produk baru
  const addProduct = () => {
    if (productName.trim() !== '') {
      setProducts([...products, { id: Date.now(), name: productName }]);
      setProductName('');
    }
  };

  // Fungsi untuk menghapus produk berdasarkan ID
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      {/* Form untuk menambah produk */}
      <div>
        <input
          type="text"
          placeholder="Nama produk"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button onClick={addProduct}>Tambah</button>
      </div>
      {/* Daftar produk */}
      <div>
        {products.map(product => (
          <div key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => deleteProduct(product.id)}>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
