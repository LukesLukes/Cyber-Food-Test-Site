// src/components/Sobre/index.jsx

import React from 'react';
import "./styles.css";

const Sobre = () => {
  return (
    <section className="sobre-section" id="sobre">
      <div className="sobre-container">
        <h2 className="sobre-title">Sobre o Cyber Food</h2>
        <p className="sobre-text">
          O Cyber Food nasceu da paixão por culinária de rua e tecnologia. Nossa missão é conectar
          pessoas a experiências gastronômicas únicas, facilitando a descoberta dos melhores
          food trucks da sua região. Acreditamos que a comida é uma forma de arte e que os
          chefs de rua merecem ser celebrados.
        </p>
        <p className="sobre-text">
          Com uma plataforma simples e intuitiva, você pode encontrar rapidamente food trucks
          de hambúrgueres artesanais, pizzas, culinária oriental e muito mais. Nosso objetivo é
          transformar a busca por comida de rua em uma jornada deliciosa e sem complicações.
        </p>
      </div>
    </section>
  );
};

export default Sobre;