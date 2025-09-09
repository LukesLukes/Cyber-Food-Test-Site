import React from "react";
import "./styles.css";

const Contatos = () => {
  return (
    <section className="contatos-section" id="contato">
      <h2>Contato</h2>
      <p><strong>Entre em contato para dúvidas, sugestões ou parcerias!</strong></p>
      <div className="contatos-list">
        <a href="mailto:cyberfood@exemplo.com" className="contato-item">
          <span role="img" aria-label="email">📧</span>
          cyberfood@exemplo.com
        </a>
        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="contato-item">
          <span role="img" aria-label="whatsapp">💬</span>
          WhatsApp
        </a>
        <a href="https://instagram.com/cyberfoodtrucks" target="_blank" rel="noopener noreferrer" className="contato-item">
          <span role="img" aria-label="instagram">📸</span>
          @cyberfoodtrucks
        </a>
      </div>
    </section>
  );
};

export default Contatos;