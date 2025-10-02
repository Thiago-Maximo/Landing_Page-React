// src/Componentes/Banner/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para transformar o botão em link (opcional)

export default function Banner() {
  return (
    <section className="banner-section"> {/* Classe para CSS global */}
      <div
        className="d-flex justify-content-center align-items-center text-white"
        style={{
          height: '400px', // Aumentei um pouco para impacto; ajuste se quiser 300px
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textShadow: '0 0 10px rgba(0,0,0,0.7)',
          position: 'relative', // Para overlay
        }}
      >
        {/* Overlay semi-transparente para legibilidade */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            borderRadius: '8px', // Arredondado como no seu
          }}
        ></div>
        
        {/* Conteúdo Centralizado (acima do overlay) */}
        <div className="text-center p-4 position-relative z-2" style={{ maxWidth: '600px' }}> {/* z-2 para ficar visível */}
          <h1 className="display-4 fw-bold mb-3">Moda que Inspira</h1>
          <p className="lead mb-4">Descubra as últimas tendências em roupas</p>
          {/* Botão como Link (melhor para navegação SPA); mude para <button> se preferir */}
          <Link to="/masculino" className="btn btn-pink btn-lg" style={{ backgroundColor: '#ff4081', border: 'none', color: 'white' }}>
            Compre Agora
          </Link>
        </div>
      </div>
    </section>
  );
}
