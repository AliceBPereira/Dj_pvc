import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="text-gradient-gold">Daniel Junior</span>
          <span className="logo-sub">Indesq • Tecnologia Alemã</span>
        </a>

        <div className="nav-links">
          <a href="#produtos">Produtos</a>
          <a href="#regioes">Áreas de Atendimento</a>
          <a href="#contato" className="btn btn-gold btn-sm">
            <Phone size={16} /> Solicitar Orçamento
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open glass-panel' : ''}`}>
        <a href="#produtos" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
        <a href="#regioes" onClick={() => setMobileMenuOpen(false)}>Áreas de Atendimento</a>
        <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="btn btn-gold w-full text-center">
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
