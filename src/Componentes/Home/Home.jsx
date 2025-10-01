// src/pages/Home.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";


export default function Home() {
  return (
    <div className="mt-5 pt-4">
      {/* Hero Section */}
      <section className="bg-light text-dark py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Descubra seu Estilo</h1>
          <p className="lead">
            Roupas modernas e confortáveis para todas as ocasiões.
          </p>
          <a href="#produtos" className="btn btn-primary btn-lg">
            Ver Coleção
          </a>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Categorias</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/400x250?text=Feminino"
                  className="card-img-top"
                  alt="Feminino"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Feminino</h5>
                  <a href="#" className="btn btn-outline-primary">
                    Ver mais
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/400x250?text=Masculino"
                  className="card-img-top"
                  alt="Masculino"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Masculino</h5>
                  <a href="#" className="btn btn-outline-primary">
                    Ver mais
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/400x250?text=Promoções"
                  className="card-img-top"
                  alt="Promoções"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Promoções</h5>
                  <a href="#" className="btn btn-outline-primary">
                    Ver mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em destaque */}
      <section id="produtos" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Produtos em Destaque</h2>
          <div className="row g-4">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-md-3" key={item}>
                <div className="card h-100">
                  <img
                    src={`./images/feminino.jpg${item}`}
                    className="card-img-top"
                    alt={`Produto ${item}`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Produto {item}</h5>
                    <p className="card-text text-muted">R$ {(item * 59).toFixed(2)}</p>
                    <a href="#" className="btn btn-primary">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a loja */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Sobre a ModaShop</h2>
          <p className="lead mt-3">
            Somos apaixonados por moda e buscamos trazer sempre as melhores
            tendências, com qualidade e preço justo para você se vestir bem em
            qualquer ocasião.
          </p>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
