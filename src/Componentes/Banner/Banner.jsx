// src/components/Carousel.jsx
export default function Carousel() {
  return (
    <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/banner1.jpg" className="d-block w-100" alt="Banner 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Moda Feminina</h5>
            <p>Roupas estilosas e confortáveis</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/banner2.jpg" className="d-block w-100" alt="Banner 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Moda Masculina</h5>
            <p>Novas tendências para todos os estilos</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/banner3.jpg" className="d-block w-100" alt="Banner 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Promoções Especiais</h5>
            <p>Ofertas imperdíveis em roupas selecionadas</p>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}
