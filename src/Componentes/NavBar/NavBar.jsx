// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#343a40' }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Sua Loja
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feminino
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Masculino
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Infantil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
