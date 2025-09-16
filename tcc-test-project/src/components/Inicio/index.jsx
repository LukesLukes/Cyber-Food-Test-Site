// src/components/Inicio/index.jsx

import React from "react";
import "./styles.css";

const Inicio = () => {
  return (
    <section className="inicio-section" id="home">
      <div className="inicio-content">
        <h1>Bem-vindo ao Cyber Food!</h1>
        <p>
          Encontre os melhores food trucks da cidade, desde hambúrgueres artesanais até culinária oriental. Nosso objetivo é conectar você a experiências gastronômicas incríveis sobre rodas.
        </p>
        <p>
          Explore nossas opções e descubra uma variedade de sabores únicos. <strong>Prepare-se para uma jornada culinária inesquecível!</strong>
        </p>

        {/* Novos botões adicionados aqui */}
        <div className="inicio-buttons">
          <a href="/login" className="btn primary-btn">Login</a>
          <a href="/cadastro" className="btn secondary-btn">Cadastre-se</a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;