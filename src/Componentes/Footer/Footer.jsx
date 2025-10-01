// src/components/Footer.jsx
import './estilo.css'


export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 text-center mt-5">
      <div className="container">
        <p className="mb-1">© 2025 ModaShop - Todos os direitos reservados</p>
        <small>
          Feito com ❤️ por <a href="#" className="text-primary text-decoration-none">Sua Equipe</a>
        </small>
      </div>
    </footer>
  );
}
