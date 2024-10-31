import React from 'react';
import './index.css'; // Importa el CSS específico de este componente si prefieres modularidad

function Inicio() {
    return (
        <section className="inicio-section">
            <main>
                <h1>Bienvenido a <span className="brand-name">Runny_u</span></h1>
                <p>Descubre los mejores restaurantes y pide tu comida favorita.</p>
                <a href="/restaurants" className="cta-button">Ver Restaurantes</a>
            </main>
        </section>
    );
}

export default Inicio;


