// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Inicio from './components/Inicio/index.jsx';
import Sobre from './components/SobreNos/index.jsx';
import Contatos from './components/Contatos/index.jsx';
import Login from './components/Login/index.jsx';
import Cadastro from './components/Cadastro/index.jsx';
import './App.css'; // Mantenha a importação do CSS principal
import OpcoesFoodTrucks from './components/OpcoesFoodTrucks/index.jsx';

// Componente para o layout principal do site
const MainLayout = () => (
  <>
    <div style={{ marginTop: '70px', width: '100%' }}>
      <Inicio />
      <OpcoesFoodTrucks />
      <Sobre />
      <Contatos />
    </div>
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;