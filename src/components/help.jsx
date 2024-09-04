import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'animate.css';

const Help = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Pesan Terkirim',
      text: `Email ${email} dari ${name} dengan pesan "${message}" telah terkirim!`,
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:bg-blue-600',
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
    });
    setEmail('');
    setName('');
    setMessage('');
  };

  const handleBackToDashboard = () => {
    window.location.href = '/';
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-gray-700 text-2xl sm:text-3xl font-bold mb-4">Hubungi Kami</h1>

      <div className="mb-8 text-center">
        <p className="text-gray-700">
          Silahkan isi formulir di bawah ini untuk mengirimkan pertanyaan atau
          masukan Anda kepada kami. Kami akan segera merespon pesan Anda.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama lengkap Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Alamat Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan alamat email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-2 sm:mb-0 rounded-lg shadow focus:outline-none"
          >
            Kirim Pesan
          </button>
          <button
            type="button"
            onClick={handleBackToDashboard}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg shadow focus:outline-none"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default Help;
