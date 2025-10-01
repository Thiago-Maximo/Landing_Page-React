// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-primary" href="#">
          ModaShop
        </a>

        {/* Botão toggle (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feminino</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Masculino</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Promoções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
