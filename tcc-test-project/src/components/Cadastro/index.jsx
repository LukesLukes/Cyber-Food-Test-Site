// Em src/components/Cadastro/index.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css'; // Importando o CSS que você forneceu

const Cadastro = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Suas funções validate(), handleChange() e handleSubmit() continuam aqui...
    // ...

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de validação aqui...
        // Simulando sucesso por enquanto
        const validationPassed = true; // Substitua pela sua lógica real
        if (validationPassed) {
            alert('Cadastro realizado com sucesso!');
            navigate('/');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    return (
        // Container da página com a imagem de fundo
        <div className="cadastro-page-container">
            {/* Container do formulário com efeito de vidro */}
            <form className="cadastro-form-container" onSubmit={handleSubmit}>
                <h3>Crie sua conta</h3>
                <p>Junte-se à comunidade!</p>

                {/* Grupo para o campo de Nome */}
                <div className="form-group">
                    <label htmlFor="name">Nome completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Grupo para o campo de Email */}
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

                {/* Grupo para o campo de Senha */}
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mínimo 6 caracteres"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* Botão de cadastro */}
                <button type="submit" className="cadastro-btn">Cadastre-se</button>

                {/* Texto com link para a página de login */}
                <p className="terms-text">
                    Já tem uma conta? <Link to="/login">Entre</Link>
                </p>
            </form>
        </div>
    );
};

export default Cadastro;