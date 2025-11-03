import React, { useState, useEffect } from 'react';
import cartService from '../../../client/cartService';
import { useParams } from 'react-router-dom';
import "../styles/CartPage.css";

const CartPage = () => {
  const { userId } = useParams(); 
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userCart = await cartService.getCartByUserId(Number(userId)); 
        setCart(userCart);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]); 

  if (loading) return <div>Cargando carrito...</div>;
  if (!cart) return <div>No se encontró un carrito para este usuario.</div>;

  return (
    <div className="cart-page py-5">
      <div className="container">
        <h1>Carrito de Compras del Usuario {cart.user.userId}</h1>
        <p>Creado el: {new Date(cart.createdAt).toLocaleString()}</p>

        <div className="cart-content">
          {/* Lista de productos */}
          <div className="cart-items">
            <h2>Productos en el carrito:</h2>
            {cart.items && cart.items.length > 0 ? (
              <ul>
                {cart.items.map((item) => (
                  <li key={item.cartItemId} className="cart-item">
                    <span>{item.product.name}</span>
                    <span>Cantidad: {item.quantity}</span>
                    <span>Precio: ${item.product.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>El carrito está vacío.</p>
            )}
          </div>

          {/* Formulario de checkout */}
          <div className="checkout-form">
            <h2>Formulario de Checkout</h2>
            <form>
              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" placeholder="ejemplo@correo.com" />
              </div>
              <div className="form-group">
                <label>Dirección de envío</label>
                <input type="text" placeholder="Calle, ciudad, país" />
              </div>
              <div className="form-group">
                <label>Método de pago</label>
                <select>
                  <option value="card">Tarjeta de crédito</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Contra reembolso</option>
                </select>
              </div>
              <button type="submit">Finalizar Compra</button>
            </form>
          </div>

          {/* Resumen del carrito */}
          <div className="checkout-summary">
            <h2>Resumen del Carrito</h2>
            <p>Subtotal: ${cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}</p>
            <p>Envío: $10.00</p>
            <p>Impuestos: ${(cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * 0.15).toFixed(2)}</p>
            <h3>Total: ${(cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * 1.15 + 10).toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
