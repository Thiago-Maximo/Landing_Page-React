// src/Componentes/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Aviso from '../Aviso/Aviso'; // Caminho corrigido (ajuste se necessário)
import './estilo.css'; // Seu CSS customizado (com .card-item, etc.)

export default function Home() {
  const [showAviso, setShowAviso] = useState(false);

  useEffect(() => {
    // Abre o popup toda vez que a Home carrega (sem localStorage para persistência)
    const timer = setTimeout(() => {
      setShowAviso(true); // Abre automaticamente após um pequeno delay (opcional)
    }, 500); // Delay de 0.5s para não aparecer muito rápido; mude para 0 se quiser imediato

    // Cleanup do timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, []); // Executa só uma vez ao montar a Home

  const handleCloseAviso = () => {
    setShowAviso(false);
    // Removido: localStorage.setItem('avisoVisto', 'true'); // Não persiste mais
  };

  return (
    <>
    
      <div className='container my-5'>
        <section className='Boas-Vindas'>
          <div className="pt-5">
            <div className="container mt-5">
              <h1 className="text-center mt-5">Bem-vindo à ModaShop!</h1>
              <p className="text-center text-muted">Sua loja online de roupas.</p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <Banner></Banner>
      </section>

      <div>
        {/* Categorias */}
        <div className="container my-5">
          <h2 className="text-center mb-4">Categorias em Destaque</h2>
          <div className="row justify-content-center"> {/* Centraliza o row */}
            <div className="col-md-4 mb-4">
              <div className="card card-item h-100"> {/* Adicionada className="card-item h-100" */}
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80"
                  className="card-img-top"
                  alt="Roupas femininas elegantes e modernas"
                  style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Feminino</h5>
                  <p className="card-text">Looks perfeitos para qualquer ocasião</p>
                  <Link to="/feminino" className="btn btn-outline-dark w-100">Ver Coleção</Link> {/* Link corrigido */}
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-item h-100">
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=400&q=80"
                  className="card-img-top"
                  alt="Roupas masculinas casuais e sofisticadas"
                  style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Masculino</h5>
                  <p className="card-text">Estilo e conforto para o dia a dia</p>
                  <Link to="/masculino" className="btn btn-outline-dark w-100">Ver Coleção</Link> {/* Link corrigido */}
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-item h-100">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.FILhXpL8rpG4tXprP6I_GgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" // URL estável do Unsplash para infantil
                  className="card-img-top"
                  alt="Roupas infantis coloridas e divertidas"
                  style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Infantil</h5>
                  <p className="card-text">Roupas fofas para os pequenos</p>
                  <Link to="/infantil" className="btn btn-outline-dark w-100">Ver Coleção</Link> {/* Link corrigido */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destaques da Temporada */}
        <div className="bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-4">Destaques da Temporada</h2>
            <div className="row justify-content-center"> {/* Centraliza o row */}
              <div className="col-md-3 col-6 mb-4">
                <div className="card card-item h-100"> {/* Adicionada className="card-item h-100" */}
                  <img
                    src="https://img.ltwebstatic.com/v4/j/pi/2025/04/14/a5/17446010188225057e0588e97fc292a204510ede68_thumbnail_384x.webp" // URL estável (vestido floral)
                    className="card-img-top"
                    alt="Vestido de verão floral com estampa tropical"
                    style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                    }}
                  />
                  <div className="card-body text-center"> {/* Adicionado text-center */}
                    <h5 className="card-title">Vestido Floral</h5>
                    <p className="card-text fw-bold">R$ 129,90</p> {/* fw-bold para destaque */}
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <div className="card card-item h-100">
                  <img
                    src="https://ae-pic-a1.aliexpress-media.com/kf/S4360cfec0941413abe59603ab07abe22R.jpg_220x220q75.jpg_.avif" // URL estável (jaqueta jeans)
                    className="card-img-top"
                    alt="Jaqueta jeans clara com corte moderno"
                    style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Jaqueta Jeans</h5>
                    <p className="card-text fw-bold">R$ 199,90</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <div className="card card-item h-100">
                  <img
                    src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=300&q=80" // URL estável (camiseta)
                    className="card-img-top"
                    alt="Camiseta básica de algodão em diversas cores"
                    style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Camiseta Básica</h5>
                    <p className="card-text fw-bold">R$ 49,90</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <div className="card card-item h-100">
                  <img
                    src="https://image.celine.com/33e2dece0ba280c5/original/2N785034S-08ZM_1_SS24_W.jpg?im=Resize=(480);AspectCrop=(1,1),xPosition=.5,yPosition=.5" // URL estável (calça jeans)
                    className="card-img-top"
                    alt="Calça jeans skinny com lavagem moderna"
                    style={{ maxHeight: '200px', objectFit: 'contain', objectPosition: 'center center' }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Calça Jeans</h5>
                    <p className="card-text fw-bold">R$ 159,90</p>
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

        {/* Modal Popup do Aviso - Aparece toda vez na home */}
        {showAviso && (
          <div
            className="modal fade show"
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} // Overlay escuro
            tabIndex="-1"
            role="dialog"
          >
            <Aviso onClose={handleCloseAviso} />
          </div>
        )}
      </div>
    </>
  );
}
