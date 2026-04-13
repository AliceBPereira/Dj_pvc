import React from 'react';
import { MessageSquare, PhoneCall, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <h2>Pronto para Transformar seu Projeto?</h2>
            <p>
              O orçamento de portas e janelas de PVC é feito sob medida. 
              Entre em contato com nossa equipe enviando as medidas ou agendando uma visita técnica.
            </p>
            
            <div className="contact-methods">
              <div className="method">
                <div className="icon-box"><PhoneCall size={24} /></div>
                <div>
                  <h4>Telefone</h4>
                  <span>(11) 99999-9999</span>
                </div>
              </div>
              <div className="method">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>E-mail</h4>
                  <span>orcamento@danieljuniorpvc.com.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-action">
            <div className="action-box">
              <h3>Fale Conosco Imediatamente</h3>
              <p>O jeito mais rápido de obter sua cotação é pelo WhatsApp.</p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-btn w-full">
                <MessageSquare size={20} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
