// src/App.jsx
// 1. Importe o 'Element'
import { Element } from 'react-scroll';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Inicio from './components/Inicio/index.jsx';
import Sobre from './components/SobreNos/index.jsx';
import Contatos from './components/Contatos/index.jsx';
import Login from './components/Login/index.jsx';
import Cadastro from './components/Cadastro/index.jsx';
import OpcoesFoodTrucks from './components/OpcoesFoodTrucks/index.jsx';
import StartUse from './components/StartUse/index.jsx'; // Importe o novo componente
import Menu from './pages/Menu/index.jsx'; // Importe a nova página
import './App.css'; // Mantenha a importação do CSS principal

// Componente para o layout principal do site
const MainLayout = () => (
  <>
    {/* A seção de Início não precisa de um nome, pois é o topo */}
    <Inicio />

    {/* 2. Envolva cada seção com o <Element> e dê um nome */}
    <Element name="food-trucks-section">
      <OpcoesFoodTrucks />
    </Element>
    <StartUse /> {/* Adicione a nova seção aqui */}
    <Element name="sobre-section">
      <Sobre />
    </Element>

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

           {/* Adicione a nova rota para o Menu */}
          <Route path="/menu" element={<Menu />} />
          {/* Outras rotas podem ser adicionadas aqui */}

        </Routes>
        <Contatos />
      </div>
    </Router>
  );
}

export default App;