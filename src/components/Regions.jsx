import React from 'react';
import { MapPin } from 'lucide-react';

const Regions = () => {
  const regions = [
    "São Paulo",
    "Minas Gerais"
  ];

  return (
    <section id="regioes" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="title">Onde <span className="text-gradient">Atendemos</span></h2>
          <p className="subtitle">Levando a excelência da Tecnologia Alemã Indesq para você.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {regions.map((region, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '250px', justifyContent: 'center' }}>
              <MapPin size={20} style={{ color: 'var(--gold-accent)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{region}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p>Para demais regiões, por favor <strong>entrar em contato</strong> ao solicitar o orçamento.</p>
        </div>
      </div>
    </section>
  );
};

export default Regions;
