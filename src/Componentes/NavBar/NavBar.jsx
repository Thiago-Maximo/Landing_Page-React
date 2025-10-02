// src/Componentes/NavBar/NavBar.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const collapseRef = useRef(null); // Ref para o elemento collapse

  // Função para fechar o menu (usada em links e resize)
  const closeMenu = () => {
    const collapse = collapseRef.current;
    if (collapse && collapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(collapse, { toggle: false });
      bsCollapse.hide();
    }
  };

  // Detecta redimensionamento e fecha se for desktop (lg: 992px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu(); // Fecha se menu estiver aberto
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Executa uma vez ao montar (caso abra em desktop)

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Sem dependências - executa só uma vez

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#343a40' }}> {/* fixed-top opcional para sticky */}
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">Moda-Shop</Link>

        {/* Toggler - SÓ Bootstrap nativo, sem onClick custom */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Collapse - Com ref */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feminino" onClick={closeMenu}>Feminino</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/masculino" onClick={closeMenu}>Masculino</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/infantil" onClick={closeMenu}>Infantil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato" onClick={closeMenu}>Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
