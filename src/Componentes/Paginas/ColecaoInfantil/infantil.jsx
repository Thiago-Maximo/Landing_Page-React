// Componentes/Colecao/infantil.jsx
import React, { useState } from 'react';
import './estilo.css'

function Infantil() {
    // Expanded products data with 15 items, focused on children's clothing with categories: 'bebe', 'crianca', 'menina', 'menino'
    // Updated with compatible image URLs from Unsplash specifically for kids' clothing (searched for baby/kids outfits, t-shirts, dresses, etc.)
    const products = [
        {
            id: 1,
            name: 'Bodystock Bebê Branca',
            price: 'R$ 39,90',
            image: 'https://www.bing.com/th?id=OPHS.4KI9GrY21hfzXA474C474&o=5&pid=21.1&w=140&h=140&qlt=100&dpr=1&o=2&c=8&pcl=f5f5f5',
            description: 'Bodystock de algodão confortável para bebês no dia a dia.',
            category: 'bebe'
        },
        {
            id: 2,
            name: 'Macaquinho Bebê Azul',
            price: 'R$ 59,90',
            image: 'https://th.bing.com/th/id/OIP.5FCGqra2Fsmwj7xYQ-yDsgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3',
            description: 'Macaquinho versátil e macio, ideal para brincadeiras leves.',
            category: 'bebe'
        },
        {
            id: 3,
            name: 'Camiseta Básica Preta Menina',
            price: 'R$ 39,90',
            image: 'data:image/webp;base64,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',
            description: 'Camiseta 100% algodão com toque feminino, perfeita para uso diário.',
            category: 'menina'
        },
        {
            id: 4,
            name: 'Shorts Esportivo Menino',
            price: 'R$ 59,90',
            image: 'data:image/webp;base64,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',
            description: 'Shorts leve e respirável para esportes e aventuras.',
            category: 'menino'
        },
        {
            id: 5,
            name: 'Polo Shirt Colorida Unisex',
            price: 'R$ 49,90',
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=400&fit=crop',
            description: 'Polo de algodão com gola para um visual casual elegante.',
            category: 'crianca'
        },
        {
            id: 6,
            name: 'Vestido Floral Menina',
            price: 'R$ 79,90',
            image: 'data:image/webp;base64,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',
            description: 'Vestido leve com estampa floral, prático para dias quentes.',
            category: 'menina'
        },
        {
            id: 7,
            name: 'Moletom Cinza Menino',
            price: 'R$ 89,90',
            image: 'https://th.bing.com/th/id/OIP.EI34bu3vSNU9oEjgsn1aCQHaKP?w=186&h=258&c=7&r=0&o=7&pid=1.7&rm=3',
            description: 'Moletom macio e resistente para dias frios e brincadeiras.',
            category: 'menino'
        },
        {
            id: 8,
            name: 'Suéter Leve Bebê Bege',
            price: 'R$ 69,90',
            image: 'https://th.bing.com/th/id/OIP.A6QkP4YmIHEYdkAjGKkXOgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3',
            description: 'Suéter leve e confortável para transições de temperatura em bebês.',
            category: 'bebe'
        },
        {
            id: 9,
            name: 'Calça Chino Menina',
            price: 'R$ 89,90',
            image: 'data:image/webp;base64,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',
            description: 'Calça chino versátil com corte feminino para looks smart casual.',
            category: 'menina'
        },
        {
            id: 10,
            name: 'Camiseta Estampada Divertida Menino',
            price: 'R$ 44,90',
            image: 'https://th.bing.com/th?id=OPHS.RMtU%2ful9%2bmdSow474C474&w=178&h=231&o=7&pid=1.7&rm=3',
            description: 'Camiseta com estampa animada e temática para meninos.',
            category: 'menino'
        },
        {
            id: 11,
            name: 'Regata Básica Bebê Unisex',
            price: 'R$ 29,90',
            image: 'https://th.bing.com/th/id/OIP.UUPL3hUl50gh6pFTDw-_pQHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3p',
            description: 'Regata básica e macia para dias quentes ou sob outras roupas.',
            category: 'bebe'
        },
        {
            id: 12,
            name: 'Calça de Moletom Menino',
            price: 'R$ 79,90',
            image: 'https://th.bing.com/th/id/OIP.agxrkBsw0N6DCINCljTSJwHaHa?w=216&h=216&c=7&r=0&o=7&pid=1.7&rm=3',
            description: 'Calça de moletom confortável para relaxar ou brincar.',
            category: 'menino'
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = products.filter(product => 
        selectedCategory === 'all' || product.category === selectedCategory
    );

    return (
        <>
            {/* Seção de Título da Página (integrada ao layout global) */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 fw-bold mb-3">Roupas Infantis Unisex</h1>
                            <p className="lead mb-0">Encontre as melhores peças versáteis para as crianças na ModaShop</p>
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

                {/* Filtros por Categoria */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="d-flex justify-content-center flex-wrap gap-2">
                            <button 
                                className={`btn ${selectedCategory === 'all' ? 'btn-secondary' : 'btn-outline-secondary'}`} 
                                onClick={() => setSelectedCategory('all')}
                            >
                                Todos
                            </button>
                            <button 
                                className={`btn ${selectedCategory === 'bebe' ? 'btn-secondary' : 'btn-outline-secondary'}`} 
                                onClick={() => setSelectedCategory('bebe')}
                            >
                                Bebê
                            </button>
                            <button 
                                className={`btn ${selectedCategory === 'menina' ? 'btn-secondary' : 'btn-outline-secondary'}`} 
                                onClick={() => setSelectedCategory('menina')}
                            >
                                Menina
                            </button>
                            <button 
                                className={`btn ${selectedCategory === 'menino' ? 'btn-secondary' : 'btn-outline-secondary'}`} 
                                onClick={() => setSelectedCategory('menino')}
                            >
                                Menino
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid de Produtos Filtrados */}
                <div className="row g-4 cards-list">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-item">
                                <img src={product.image} alt={product.name} className="img-fluid" />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p className="fw-bold">{product.price}</p>
                                <button className="btn btn-secondary">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="col-12 text-center">
                            <p className="text-muted">Nenhum produto encontrado para esta categoria.</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

export default Infantil;
