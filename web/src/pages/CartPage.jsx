import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import CartActions from "../components/Cart/CartActions";
import CartSummary from "../components/Cart/CartSummary";
import CartTable from "../components/Cart/CartTable";
import cartService from "../../../client/cartService";
import Hero from "../components/Hero/Hero";
import "../styles/CartPage.css"; // Importamos CSS personalizado

const CartPage = () => {
  const { userId } = useParams();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  // Funciones para manejar carrito
  const handleRemoveItem = (itemId) => {
    const updatedItems = cart.items.filter(
      (item) => item.cartItemId !== itemId
    );
    setCart({ ...cart, items: updatedItems });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Evitar cantidades negativas
    const updatedItems = cart.items.map((item) =>
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

  if (loading)
    return <div className="text-center py-5">Cargando carrito...</div>;
  if (!cart)
    return (
      <div className="text-center py-5">
        No se encontró un carrito para este usuario.
      </div>
    );

  // Calcular subtotal, impuesto y total
  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% de impuesto
  const total = subtotal + tax;

  return (
    <>
      <Hero
        title="Cart"
        subtitle={`${cart.user.name} | Created at: ${new Date(
          cart.createdAt
        ).toLocaleString()}`}
        backgroundImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFy0dHR0tKy0tLS0tKy0tLS0tLS0tLSstLS0tLSstLS0tLS0rKy0tLSstLSstLS0tLS0rLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAoEAEBAAECBAYCAwEAAAAAAAAAARECITFBUXEDEmGBkfCxwaHR4RP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERITFREv/aAAwDAQACEQMRAD8A+JSsYysiWqi3V0/tNMX0XHqDFqLaIpBFBF0wrU29/wAAtuOHbLmqAshgjevlMy/gRm45faU4d0oqNadVnBlZAK1o0Zx9+V/5bW5mJ856SJjoqaVDVqykFejwfCm/C3bbO3v1FmmaOeLzvT0nqNTHK7ennykXVdzDDqsqaq1a5iKRcFopEosgHAMCiS7YAQI1ejOSAqUoBhvXpx95s6Ore3GZVFmi46Yc6uu3hUwESTL0aNPl7saduGf2uvxL2vpeHwRLyeLqk2xvzt/GOQzfCvG7d1CY56Y3lnTfhNSKlBYKgWkBbpLSl0gWoLIBpiVbqQBrRozzjMddHh5snXhvMZ7qlY1z1TRP3842b49p8r2gatnKcP59zVoxx23vHr0+9Umm8eHC8WvN/PHfj3tGXLV9/wAdbeHBi2Z4+/8AUTVqFdNN3/fQ/wCknDj1cb3S00+XTV4lu+dxny4mb7T9guRECopFtyigSL5azkAwZQBrDV07Znv6JYS35EZka1GLE8oqebk7XGOHHH+/hiaevwsxzz6TgqV01eH177b+2eTndVkxnH3qmrXeGdunJnIknrXmnes3VVl+8jyXjjYVJUXE6rPExw2RTTo9u65k9fvRirp09dhC5t60W6+m05CjILEUgQgJagANaUi5BeZ7pF2ETLUxfT8M5qcQb88nCe/6wz5kyeYMG/Jcb7M5Sg1t3ZtWoKLp0+3dZccF1as42ntz7iM/ygQVBQAyIAoAiyCA1hKQtBTKAGSCAti2YqGAWoshjrQS1rRovaeqW/aAtk5btWycnPKCLaEBTI1L0++4IwpkFJUABcAAGQC0EAXIAtMIAZKUAkBAUwFACoCosgCAACgIACiKCKAAACKsBMFWpAAAIFoCCgIKgAACo1dO2QTILPUERqzF6mqghkACBkBUlAXzJqoUEFKBk03BAFlSqkAoZAQAFIigihgFQoBDBDALhAoAAAAAABktAMooBRAFEAUQBVSGQBcIBlcpEBr2QAMi1AEVbNs558N89+gIAARFoAi0AJAEABQMgLZP5QtAAlAwZX1QAogLDAZAyUygCmSgimQEUhgEAAAAFQBYVAXIUAKACKtnr+du4IYEBSIAKAIqALUFBAAFQAAAXIgKVFAIAGQhQQFyAFKCAoIKgAoBQQFQAAAAABQBcJAAIuJzBCIAUUoCKYBAABS0DKAAtQAAAWlqAKSgIpklABdIMigBAAFkQBAABQQAAWoCouUAAAVAAFyBUUBagUEUQFygAAoItiAAAAAAAAACwAQABaACAAAAAC1AAAAAB//Z"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Acciones del carrito */}
            <CartActions onClearCart={handleClearCart} />

            {/* Tabla de productos */}
            <CartTable
              cartItems={cart.items.map((item) => ({
                ...item,
                id: item.cartItemId,
                name: item.product.name,
                price: item.product.price,
                image: item.product.image,
                quantity: item.quantity,
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
    </>
  );
};

export default CartPage;
