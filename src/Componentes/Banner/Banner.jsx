// src/components/Banner.jsx
import React from 'react';

export default function Banner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: '300px',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '0 0 10px rgba(0,0,0,0.7)',
      }}
    >
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
        <h1 className="display-4 fw-bold">Moda que Inspira</h1>
        <p className="lead mb-4">Descubra as últimas tendências em roupas</p>
        <button type="button" className="btn btn-pink btn-lg" style={{ backgroundColor: '#ff4081', border: 'none' }}>
          Compre Agora
        </button>
      </div>
    </div>
  );
}
