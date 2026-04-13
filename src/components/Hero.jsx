import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text glass-panel">
          <div className="badge" style={{display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(212, 175, 55, 0.2)', padding: '5px 15px', borderRadius: '50px', marginBottom: '1rem', color: 'var(--gold-accent)', fontWeight: '600'}}>
            <ShieldCheck size={16} /> Marca Indesq • Tecnologia Alemã
          </div>
          <h1>
            Esquadrias de PVC<br />
            <span className="text-gradient-gold">Alto Padrão</span>
          </h1>
          <p>
            Transforme seu ambiente com a excelência da <strong>Tecnologia Alemã Indesq</strong>. 
            Isolamento acústico perfeito, durabilidade vitalícia e design sob medida para o seu projeto.
          </p>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-gold hero-btn">
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
            <a href="#produtos" className="btn btn-outline hero-btn">
              Ver Portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
