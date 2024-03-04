import { BrowserRouter, Routes, Routes } from "react-router-dom";

import Header from './components/layout/Header"';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './Pages/ContactoPage';
import HomePage from './Pages/HomePage';
import NosotrosPage from './Pages/NosotrosPage';
import NovedadesPage from './Pages/NovedadesPage';

function app() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Routes path="/" element={<HomePage/>} />
        <Routes path="nosotros" element={<NosotrosPage/>} />
        <Routes path="novedades" element={<NovedadesPage/>} />
        <Routes path="contacto" element={<ContactoPage/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
};