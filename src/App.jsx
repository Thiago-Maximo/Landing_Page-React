import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componentes/NavBar/NavBar'
import Home from './Componentes/Home/Home'
import Banner from './Componentes/Banner/Banner'
import Footer from './Componentes/Footer/Footer'

function App() {

  return (
    <>
      {/* Barra de Navegação */}
      <header className='Barra-De-Navegacao'>
        <Navbar />
      </header>

      <section className='Banner'>
        <Banner></Banner>
      </section>

      {/* Sessão de Boas Vindas */}
      <section className='Boas-Vindas'>
        <div className="pt-5">
          <div className="container mt-5">
            <h1 className="text-center mt-5">Bem-vindo à ModaShop!</h1>
            <p className="text-center text-muted">Sua loja online de roupas.</p>
          </div>
        </div>
      </section>

      {/* Pagina Inicial */}
      <section className='pagina_inicial'>
        <Home></Home>
      </section>
      <Footer/>
    </>
  )
}

export default App
