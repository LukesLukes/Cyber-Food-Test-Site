// src/components/OpcoesFoodTrucks/index.jsx

import React from 'react';
import './styles.css';

const foodTrucks = [
  {
    nome: 'Truck do Hambúrguer',
    descricao: 'Os melhores hambúrgueres artesanais da cidade!',
    imagem: 'https://www.baressp.com.br/bares/fotos/BrasaTruck01.jpg',
  },
  {
    nome: 'Pizza na Rua',
    descricao: 'Pizzas feitas no forno a lenha, direto para você!',
    imagem: 'https://www.baressp.com.br/barreporter/imgs/Massa_na_Caveira_Food_Trucks_Pizzas_SP.jpg',
  },
  {
    nome: 'Doce Móvel',
    descricao: 'Doces, bolos e sobremesas irresistíveis!',
    imagem: 'https://alineapproves.com/wp-content/uploads/2015/07/avenida4-730x843.jpg',
  },
  {
    nome: 'Sabor Oriental',
    descricao: 'Comida japonesa e chinesa para todos os gostos.',
    imagem: 'https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/8hxw2505ojdc.jpg',
  },
];

export default function OpcoesFoodTrucks() {
  return (
    <section className="food-truck-container" id="trucks">
      <h2 className="titulo">Exemplos de Opções de Food Trucks</h2>
      <div className="lista-food-trucks">
        {foodTrucks.map((truck, index) => (
          <div className="card-food-truck" key={index}>
            <img src={truck.imagem} alt={truck.nome} />
            <h3>{truck.nome}</h3>
            <p>{truck.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
