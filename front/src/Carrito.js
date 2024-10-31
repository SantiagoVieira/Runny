import React from 'react';

function Carrito() {
    return (
        <main>
            <h1>Tu Carrito</h1>
            <div id="cart-items"></div>
            <p>Total: $<span id="cart-total">0.00</span></p>
            <button id="checkout-button" className="cta-button">Proceder al Pago</button>
        </main>
    );
}

export default Carrito;
