// src/components/StartUse/index.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const StartUse = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Ativa a animação de clique
        setIsClicked(true);

        // Espera a animação acontecer antes de navegar
        setTimeout(() => {
            navigate('/menu');
        }, 800); // 800ms de delay
    };

    return (
        <section className="startuse-section">
            <div className="startuse-content">
                <h2>Pronto para explorar?</h2>
                <p>Acesse nosso menu e saboreie muito as maravilhas que os food trucks podem trazer.</p>
                <button
                    className={`menu-button ${isClicked ? 'clicked' : ''}`}
                    onClick={handleButtonClick}
                >
                    Explorar Menu
                </button>
            </div>
        </section>
    );
};

export default StartUse;