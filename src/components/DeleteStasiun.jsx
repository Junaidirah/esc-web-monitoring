import React, {  } from 'react';

const Delete = ({ onDelete }) => {
    // Fungsi untuk menangani penghapusan
    const handleDelete = () => {
      // Memanggil fungsi onDelete yang diteruskan dari komponen induk
      onDelete();
    };
  
    return (
      <button onClick={handleDelete}>
        Hapus
      </button>
    );
  };
  
  export default Delete;
