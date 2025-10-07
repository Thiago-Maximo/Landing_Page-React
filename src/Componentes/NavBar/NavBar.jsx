import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  // Fecha menu ao clicar em link ou redimensionar
  const closeMenu = () => {
    const collapse = collapseRef.current;
    const toggler = togglerRef.current;
    
    if (collapse && collapse.classList.contains('show')) {
      collapse.classList.remove('show'); // Remove a classe show
      // Remove qualquer altura inline para evitar conflitos com CSS transition
      collapse.style.height = '';
      collapse.style.maxHeight = '';
      
      // Atualiza o estado do toggler para refletir que está fechado
      if (toggler) {
        toggler.setAttribute('aria-expanded', 'false');
        toggler.classList.remove('collapsed'); // Adiciona a classe collapsed se necessário (Bootstrap usa isso)
      }
    }
  };

  // Função para alternar o menu (usada no toggler)
  const toggleMenu = () => {
    const collapse = collapseRef.current;
    const toggler = togglerRef.current;
    
    if (collapse) {
      const isOpen = collapse.classList.contains('show');
      
      if (isOpen) {
        closeMenu();
      } else {
        // Abre o menu
        collapse.classList.add('show');
        collapse.style.height = 'auto'; // Permite expansão
        collapse.style.maxHeight = '500px'; // Valor do CSS
        
        if (toggler) {
          toggler.setAttribute('aria-expanded', 'true');
          toggler.classList.add('collapsed'); // Bootstrap usa collapsed para indicar estado
        }
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adiciona listener global para fechar menu ao clicar fora (opcional, mas melhora UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (collapseRef.current && !collapseRef.current.contains(event.target) && 
          togglerRef.current && !togglerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#343a40' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Moda-Shop</Link>

        <button
          className="navbar-toggler"
          type="button"
          ref={togglerRef}
          onClick={toggleMenu} // Usa nossa função toggle em vez de data-bs-toggle para controle total
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={closeMenu}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ColecaoFeminina" onClick={closeMenu}>Feminino</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/masculino" onClick={closeMenu}>Masculino</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ColecaoInfantil" onClick={closeMenu}>Infantil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contato" onClick={closeMenu}>Contato</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
