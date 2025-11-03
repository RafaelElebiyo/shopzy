import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import CartActions from '../components/Cart/CartActions';
import CartSummary from '../components/Cart/CartSummary';
import CartTable from '../components/Cart/CartTable';
import cartService from '../../../client/cartService';
import '../styles/CartPage.css'; // Importamos CSS personalizado

const CartPage = () => {
  const { userId } = useParams();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  // Funciones para manejar carrito
  const handleRemoveItem = (itemId) => {
    const updatedItems = cart.items.filter(item => item.cartItemId !== itemId);
    setCart({ ...cart, items: updatedItems });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Evitar cantidades negativas
    const updatedItems = cart.items.map(item =>
      item.cartItemId === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart({ ...cart, items: updatedItems });
  };

  const handleClearCart = () => {
    setCart({ ...cart, items: [] });
  };

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

  if (loading) return <div className="text-center py-5">Cargando carrito...</div>;
  if (!cart) return <div className="text-center py-5">No se encontró un carrito para este usuario.</div>;

  // Calcular subtotal, impuesto y total
  const subtotal = cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% de impuesto
  const total = subtotal + tax;

  return (
    <div className="container my-5">
      <h1 className="mb-4">Carrito de Compras</h1>
      <p className="text-muted">Usuario: {cart.user.userId} | Creado el: {new Date(cart.createdAt).toLocaleString()}</p>

      <div className="row">
        <div className="col-lg-8">
          {/* Acciones del carrito */}
          <CartActions onClearCart={handleClearCart} />

          {/* Tabla de productos */}
          <CartTable 
            cartItems={cart.items.map(item => ({
              ...item,
              id: item.cartItemId,
              name: item.product.name,
              price: item.product.price,
              image: item.product.image,
              quantity: item.quantity
            }))}
            onRemove={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>

        <div className="col-lg-4">
          {/* Resumen del pedido */}
          <CartSummary 
            subtotal={subtotal}
            tax={tax}
            total={total}
            cartItems={cart.items}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
