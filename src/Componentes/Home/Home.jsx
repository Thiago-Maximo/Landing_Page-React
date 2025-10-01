// src/components/Home.jsx
import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Categorias */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Categorias em Destaque</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80"
                className="card-img-top"
                alt="Roupas femininas elegantes e modernas"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Feminino</h5>
                <p className="card-text">Looks perfeitos para qualquer ocasião</p>
                <a href="#" className="btn btn-outline-dark">Ver Coleção</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=400&q=80"
                className="card-img-top"
                alt="Roupas masculinas casuais e sofisticadas"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Masculino</h5>
                <p className="card-text">Estilo e conforto para o dia a dia</p>
                <a href="#" className="btn btn-outline-dark">Ver Coleção</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://images.unsplash.com/photo-1519238263530-99bdd11dc6fc?auto=format&fit=crop&w=400&q=80"
                className="card-img-top"
                alt="Roupas infantis coloridas e divertidas"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Infantil</h5>
                <p className="card-text">Roupas fofas para os pequenos</p>
                <a href="#" className="btn btn-outline-dark">Ver Coleção</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destaques da Temporada */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Destaques da Temporada</h2>
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1583744946564-52abfa9fd965?auto=format&fit=crop&w=300&q=80"
                  className="card-img-top"
                  alt="Vestido de verão floral com estampa tropical"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Vestido Floral</h5>
                  <p className="card-text">R$ 129,90</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80"
                  className="card-img-top"
                  alt="Jaqueta jeans clara com corte moderno"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Jaqueta Jeans</h5>
                  <p className="card-text">R$ 199,90</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=300&q=80"
                  className="card-img-top"
                  alt="Camiseta básica de algodão em diversas cores"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Camiseta Básica</h5>
                  <p className="card-text">R$ 49,90</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=300&q=80"
                  className="card-img-top"
                  alt="Calça jeans skinny com lavagem moderna"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Calça Jeans</h5>
                  <p className="card-text">R$ 159,90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2>Fique por dentro das novidades</h2>
              <p className="mb-4">Cadastre-se para receber nossas promoções e lançamentos</p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Seu melhor email" 
                  aria-label="Seu email" 
                />
                <button className="btn btn-dark" type="button">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
