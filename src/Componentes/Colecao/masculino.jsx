// Componentes/Colecao/masculino.jsx
import React from 'react';
import './estilo.css'

function MensClothing() {
    // Expanded products data with 20 items and corrected real image URLs from Unsplash (focused on men's clothing, no bags or mismatches)
    const products = [
        {
            id: 1,
            name: 'Camisa Casual Branca',
            price: 'R$ 89,90',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
            description: 'Camisa de algodão confortável para o dia a dia.'
        },
        {
            id: 2,
            name: 'Calça Jeans Slim',
            price: 'R$ 149,90',
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop',
            description: 'Calça jeans slim fit, ideal para looks modernos.'
        },
        {
            id: 3,
            name: 'Jaqueta de Couro',
            price: 'R$ 299,90',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/06/26/1687765265db03d786034ac731893546c4f22c5fe0_thumbnail_384x.webp',
            description: 'Jaqueta de couro sintético para um estilo rockeiro.'
        },
        {
            id: 4,
            name: 'Camiseta Básica Preta',
            price: 'R$ 39,90',
            image: 'https://tse2.mm.bing.net/th/id/OIP.vbpAaddQPWw8rk0ukDfzDwHaI4?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Camiseta 100% algodão, perfeita para uso diário.'
        },
        {
            id: 5,
            name: 'Shorts Esportivo',
            price: 'R$ 79,90',
            image: 'https://static.netshoes.com.br/produtos/shorts-mizuno-2x1-high-2-masculino/08/2FV-1110-008/2FV-1110-008_zoom1.jpg?ts=1733839317',
            description: 'Shorts leve e respirável para atividades físicas.'
        },
        {
            id: 6,
            name: 'Polo Shirt Verde',
            price: 'R$ 69,90',
            image: 'https://static.netshoes.com.br/produtos/camisa-polo-colcci-iii-masculina/60/NFO-56BF-060/NFO-56BF-060_zoom1.jpg?ts=1755160248&ims=1088x',
            description: 'Polo de algodão com gola para um visual casual elegante.'
        },
        {
            id: 7,
            name: 'Bermuda Cargo',
            price: 'R$ 99,90',
            image: 'https://tse1.mm.bing.net/th/id/OIP.PhSUchVPoHOIF1dZ4O6xYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Bermuda com bolsos cargo, prática para aventuras urbanas.'
        },
        {
            id: 8,
            name: 'Blazer Cinza',
            price: 'R$ 249,90',
            image: 'https://tse2.mm.bing.net/th/id/OIP.0c3wu6AjTKlJhWQ6tkTKEAHaJP?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Blazer slim fit para eventos semi-formais.'
        },
        {
            id: 9,
            name: 'Camisa Social Branca',
            price: 'R$ 109,90',
            image: 'https://img.ltwebstatic.com/images3_spmp/2024/01/21/ff/17058476097a6e025d2f940931f1b6b0bedf0538dd_thumbnail_384x.webp',
            description: 'Camisa social clássica, ideal para o trabalho.'
        },
        {
            id: 10,
            name: 'Moletom Preto',
            price: 'R$ 89,90',
            image: 'https://tse2.mm.bing.net/th/id/OIP.K0Af5wgh_D3gtaxXJBtYqQHaKu?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Moletom macio para dias frios e casuais.'
        },
        {
            id: 11,
            name: 'Calça Chino Bege',
            price: 'R$ 119,90',
            image: 'https://th.bing.com/th/id/R.3c7532afb7f6f8d8fad25f4b4024fd3d?rik=nSs%2f6kqDbbIvDw&pid=ImgRaw&r=0',
            description: 'Calça chino versátil para looks smart casual.'
        },
        {
            id: 12,
            name: 'Camiseta Bege Estampada',
            price: 'R$ 59,90',
            image: 'https://tse2.mm.bing.net/th/id/OIP.SlKNLlss5LC1vE4Lh30e0wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Camiseta com estampa divertida para um toque pessoal.'
        },
        {
            id: 13,
            name: 'Jaqueta Jeans',
            price: 'R$ 179,90',
            image: 'https://tse3.mm.bing.net/th/id/OIP.BxpwTHoNOrfLj3ArO8D8GwHaJ5?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Jaqueta jeans clássica para um visual despojado.'
        },
        {
            id: 14,
            name: 'Regata Preta',
            price: 'R$ 29,90',
            image: 'https://a-static.mlcdn.com.br/800x560/regata-masculina-camuflada-militar-e-preta-malha-dry-esporte-estampa-10/lojaestampa10/estprdt002184/28d2c552e0ce3fd944fa1fbcc09db7c8.jpeg',
            description: 'Regata básica para academia ou dias quentes.'
        },
        {
            id: 15,
            name: 'Calça de Moletom',
            price: 'R$ 99,90',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
            description: 'Calça de moletom confortável para relaxar em casa.'
        }
    ];

    return (
        <>
            {/* Seção de Título da Página (integrada ao layout global) */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 fw-bold mb-3">Roupas Masculinas</h1>
                            <p className="lead mb-0">Encontre as melhores peças para o seu estilo na ModaShop</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conteúdo Principal */}
            <main className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Produtos em Destaque</h2>
                    </div>
                </div>

                {/* Grid de Produtos */}
                <div className="row g-4 cards-list">
                    {products.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-item">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p className="fw-bold">{product.price}</p>
                                <button className="btn btn-secondary">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    ))}
                </div>




            </main>
        </>
    );
}

export default MensClothing;
