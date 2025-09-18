// src/components/Login/index.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

// 1. Importe o nosso hook useAuth
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    // 2. Obtenha a função de login a partir do contexto
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você faria a validação real dos dados
        console.log('Tentativa de login com:', formData);
        
        // 3. Chame a função login do contexto em vez do alert
        // Passamos os dados do formulário para a função
        login(formData);

        // 4. Redirecione para a página inicial após o login
        navigate('/');
    };

    return (
        // ... seu JSX do formulário continua o mesmo
        <div className="login-page-container">
            <form className="login-form-container" onSubmit={handleSubmit}>
                <h3>Bem-vindo de volta!</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Sua senha"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-options">
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit" className="login-btn">Entrar</button>
                <p className="terms-text">
                    Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;