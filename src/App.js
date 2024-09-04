// App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Delete from "./components/DeleteStasiun";
import About from "./components/About";
import Help from "./components/help";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menandai status login

  // Fungsi untuk menangani submit login
  const handleLogin = () => {
    setIsLoggedIn(true); // Setelah login berhasil, atur isLoggedIn menjadi true
  };

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        {/* Rute untuk halaman Login */}
        <Route
          path="/"
          element={isLoggedIn ? <Layout /> : <Navigate to="/Login" />}
        >
          {/* Halaman Layout hanya diakses jika isLoggedIn true */}
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/DeleteStasiun" element={<Delete />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} /> {/* Tambahkan rute Help */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
