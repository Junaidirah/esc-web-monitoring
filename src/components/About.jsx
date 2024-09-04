import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/');
  };

  // Daftar gambar untuk slideshow
  const images = [
    '/GEDUNG-BANGKIT.jpg',
    '/logo512.png',
    // '/image3.jpg',
    // '/image4.jpg',
    // '/image5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk beralih ke gambar berikutnya
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Fungsi untuk beralih ke gambar sebelumnya
  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Autoplay slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Ubah angka 3000 (ms) sesuai dengan durasi slide yang diinginkan

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Memastikan bahwa interval di-reset setiap kali indeks gambar berubah

  return (
    <div className="bg-white">
      {/* Slideshow Section */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-cover bg-center h-full" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold">Tentang Kami</h1>
            <p className="mt-4 text-lg md:text-xl text-white">Solusi Teknologi Terbaik untuk Kebutuhan Anda</p>
          </div>
        </div>
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md z-10">
          &lt;
        </button>
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md z-10">
          &gt;
        </button>
      </div>

      {/* Content Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-600 leading-loose">
              <p className="mb-4">
                Selamat datang di perusahaan kami! Kami berfokus pada pengembangan
                situs web, pengembangan aplikasi seluler, pengembangan game,
                realitas virtual, realitas tertambah, videografi, dan fotografi.
                Tujuan kami adalah memberikan solusi teknologi terbaik untuk
                kebutuhan Anda.
              </p>
              <p>
                Kami berdedikasi untuk menciptakan konten berkualitas tinggi untuk
                Instagram dan TikTok, serta memberikan layanan terbaik untuk klien
                kami. Kami percaya bahwa dengan kreativitas dan teknologi, kami
                dapat membantu bisnis Anda tumbuh dan berkembang.
              </p>
            </div>
            {/* <img src="/TU.jpg" alt="Team Photo" className="rounded-lg md:h-auto" /> */}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <button
            onClick={goToDashboard}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:bg-blue-600"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
