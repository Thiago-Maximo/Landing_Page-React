// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: '200px',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '0 0 10px rgba(0,0,0,0.7)',
      }}
    >
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '8px', width: '100%', maxWidth: '900px' }}>
        <p className="mb-1">&copy; {new Date().getFullYear()} Sua Loja de Roupas. Todos os direitos reservados.</p>
        <p className="mb-0">
          <a href="#" className="text-white me-3 text-decoration-none">Política de Privacidade</a>
          <a href="#" className="text-white me-3 text-decoration-none">Termos de Uso</a>
          <a href="#" className="text-white text-decoration-none">Contato</a>
        </p>
      </div>
    </footer>
  );
}
