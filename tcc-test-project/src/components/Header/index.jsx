// src/components/Header/index.jsx

import React from 'react';
// 1. Importe o Link de 'react-scroll' em vez de 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
// Mantenha o Link do router para o logo, se ele leva para a home
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './styles.css';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="header-principal">
            <div className="logo">
                <RouterLink to="/">CYBER FOOD</RouterLink>
            </div>

            {/* 2. Substitua os links de navegação */}
           <nav className="nav-menu">
                {/* Adicione spy={true} e activeClass="active" a cada link */}
                <ScrollLink to="inicio-section" spy={true} activeClass="active" smooth={true} duration={500}>Introdução</ScrollLink>
                <ScrollLink to="food-trucks-section" spy={true} activeClass="active" smooth={true} duration={500} offset={-90}>Food Trucks</ScrollLink>
                <ScrollLink to="sobre-section" spy={true} activeClass="active" smooth={true} duration={500} offset={-90}>Sobre</ScrollLink>
                <ScrollLink to="contatos-section" spy={true} activeClass="active" smooth={true} duration={500} offset={-90}>Contato</ScrollLink>
            </nav>

            <div className="auth-section">
                {isAuthenticated && (
                    <button onClick={handleLogout} className="logout-button">Sair</button>
                )}
            </div>
        </header>
    );
};

export default Header;