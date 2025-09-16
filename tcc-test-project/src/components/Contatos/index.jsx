// src/components/Contatos/index.jsx

import React from 'react';
import "./styles.css";

// Importe as imagens com os caminhos corretos
import emailIcon from '../../assets/images/email-icon.png';
import whatsappIcon from '../../assets/images/wp.png';
import instagramIcon from '../../assets/images/instagram-icon.png';

const Contatos = () => {
  return (
    <section className="contatos-section" id="contato">
      <h2>Contato</h2>
      <p><strong>Entre em contato para dúvidas, sugestões ou parcerias!</strong></p>
      <div className="contatos-list">
        <a href="mailto:cyberfood@exemplo.com" className="contato-item">
          <img src={emailIcon} alt="Ícone de E-mail" />
          <span>cyberfood@exemplo.com</span>
        </a>

        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="contato-item">
          <img src={whatsappIcon} alt="Ícone do WhatsApp" />
          <span>WhatsApp</span>
        </a>

        <a href="https://instagram.com/cyberfoodtrucks" target="_blank" rel="noopener noreferrer" className="contato-item">
          <img src={instagramIcon} alt="Ícone do Instagram" />
          <span>@cyberfoodtrucks</span>
        </a>
      </div>
    </section>
  );
};

export default Contatos;