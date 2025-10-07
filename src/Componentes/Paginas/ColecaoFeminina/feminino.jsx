// Componentes/Colecao/feminino.jsx
import React from 'react';
import './estilo.css'

function Feminino() {
    // Expanded products data with 15 items, swapped to women's clothing with real image URLs from Unsplash (focused on women's fashion)
    const products = [
        {
            id: 1,
            name: 'Blusa Casual Branca',
            price: 'R$ 89,90',
            image: 'https://img.ltwebstatic.com/images3_pi/2024/08/06/30/17229220141d1b722daa201fa5583a3db2ccfed2c6_thumbnail_384x.webp',
            description: 'Blusa de algodão confortável para o dia a dia.'
        },
        {
            id: 2,
            name: 'Saia Jeans Midi',
            price: 'R$ 149,90',
            image: 'https://www.youcom.com.br/_next/image?url=https%3A%2F%2Fimg.youcom.com.br%2FCustom%2FContent%2FProducts%2F99%2F76%2F997685_saia-jeans-com-barra-desfiada_l69_638065430279542863.webp&w=384&q=100',
            description: 'Saia jeans midi fit, ideal para looks modernos.'
        },
        {
            id: 3,
            name: 'Jaqueta de Couro',
            price: 'R$ 299,90',
            image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
            description: 'Jaqueta de couro sintético para um estilo rockeiro.'
        },
        {
            id: 4,
            name: 'Camiseta Básica Preta',
            price: 'R$ 39,90',
            image: 'https://m.magazineluiza.com.br/a-static/420x420/camiseta-feminina-baby-look-preta-basica-lisa-cotton-premium-valansuelo/valansueloconceptbrand/501/27d62b0cc0d7e74d68edfd95561b7fbf.jpeg',
            description: 'Camiseta 100% algodão, perfeita para uso diário.'
        },
        {
            id: 5,
            name: 'Shorts Feminino Floral',
            price: 'R$ 79,90',
            image: 'https://img.ltwebstatic.com/images3_pi/2024/01/18/e3/17055850744bc3cc6b17fb39339c69fcc3e74376bb_thumbnail_384x.webp',
            description: 'Shorts leve e respirável para atividades físicas ou passeios.'
        },
        {
            id: 6,
            name: 'Blazer Cinza',
            price: 'R$ 249,90',
            image: 'https://img.ltwebstatic.com/images3_spmp/2024/06/29/54/17196712627c6350edce7deeca7429e434e1f5015e_thumbnail_384x.webp',
            description: 'Blazer slim fit para eventos semi-formais.'
        },
        {
            id: 7,
            name: 'Suéter Preto',
            price: 'R$ 89,90',
            image: 'https://img.ltwebstatic.com/images3_pi/2024/11/06/39/1730877996af6bb7abfb7160e65f951122f45c6691_thumbnail_384x.webp',
            description: 'Suéter macio para dias frios e casuais.'
        },
        {
            id: 8,
            name: 'Jaqueta Jeans',
            price: 'R$ 179,90',
            image: 'https://img.ltwebstatic.com/images3_spmp/2024/04/05/9b/1712332356a56c4d2882e23fb6862973c7c772ea7e_thumbnail_384x.webp',
            description: 'Jaqueta jeans clássica para um visual despojado.'
        },
        {
            id: 9,
            name: 'Conjunto de Moletom',
            price: 'R$ 99,90',
            image: 'https://www.bing.com/th?id=OPHS.w6pRwwXZtbyVbQ474C474&o=5&pid=21.1&w=140&h=200&qlt=100&dpr=1&o=2&c=8&pcl=f5f5f5',
            description: 'Legging de moletom confortável para relaxar em casa.'
        }
    ];

    return (
        <>
            {/* Seção de Título da Página (integrada ao layout global) */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 fw-bold mb-3">Roupas Femininas</h1>
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

export default Feminino;
