import React from 'react';
import './Portfolio.css';

// Using Vite's glob import to automatically get all images in the folder
const images = import.meta.glob('../assets/portfolio/*.jpeg', { eager: true });
const productImages = Object.values(images).map((mod) => mod.default);

const Portfolio = () => {
  return (
    <section id="produtos" className="section portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Nosso <span className="text-gradient">Portfólio</span></h2>
          <p className="subtitle">
            Conheça nossos projetos reais. Trabalhamos exclusivamente com a marca <strong style={{color: 'var(--gold-accent)'}}>Indesq</strong>, garantia de qualidade superior em esquadrias de PVC.
          </p>
        </div>

        <div className="portfolio-grid">
          {productImages.map((imgSrc, index) => (
            <div key={index} className="portfolio-card glass-panel">
              <div className="card-image-wrapper">
                <img src={imgSrc} alt={`Projeto em PVC Indesq ${index + 1}`} className="card-image" />
              </div>
              <div className="card-content">
                <h3>Projeto Indesq #{index + 1}</h3>
                <p>Esquadrias de PVC com Tecnologia Alemã proporcionando isolamento perfeito.</p>
                <a href="#contato" className="btn btn-outline">Solicitar Orçamento</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
