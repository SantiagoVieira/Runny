import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Restaurantes from './Restaurantes';
import Carrito from './Carrito';
import './index.css';

function App() {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/restaurants">Restaurantes</Link></li>
                        <li><Link to="/cart">Carrito</Link></li>
                        <li><a href="/login" className="cta-button:hover" onClick={() => handleAuth()}>Iniciar Sesión</a></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/restaurants" element={<Restaurantes />} />
                <Route path="/cart" element={<Carrito />} />
            </Routes>
            <footer>
                <p>&copy; Proyecto de prueba lenguajes y paradigmas de programación.</p>
            </footer>
        </Router>
    );
}

function handleAuth() {
    // Lógica de autenticación
}

export default App;


