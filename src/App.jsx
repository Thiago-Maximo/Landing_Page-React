// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './Componentes/NavBar/NavBar';
import Home from './Componentes/Home/Home';
import Banner from './Componentes/Banner/Banner';
import Footer from './Componentes/Footer/Footer';
import MensClothing from "./Componentes/Paginas/ColecaoMasculina/masculino.jsx";
import Aviso from "./Componentes/Aviso/Aviso.jsx";
import Feminino from "./Componentes/Paginas/ColecaoFeminina/feminino.jsx";
import Infantil from "./Componentes/Paginas/ColecaoInfantil/infantil.jsx";
// depois você cria Feminino.jsx também, se quiser

function App() {
  return (
    <Router>
      {/* Barra de Navegação */}
      <header className='Barra-De-Navegacao'>
        <Navbar />
      </header>

      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <>
              <section className='pagina_inicial'>
                <Home />
              </section>
            </>
          }
        />

        {/* Página Masculino */}
        <Route path="/masculino" element={<MensClothing />} />
        
        {/* Página Home (opcional, redireciona para /) */}
        <Route path="/Home" element={<Home />} />
        
        {/* Página Aviso (acesso direto via link) */}
        <Route path="/Aviso" element={<Aviso />} />

        <Route path="/ColecaoFeminina" element={<Feminino />} />

        <Route path="/ColecaoInfantil" element={<Infantil />} />

        {/* Exemplo para feminino (quando você criar a página Feminino.jsx) */}
       
        {/* <Route path="/infantil" element={<Infantil />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
