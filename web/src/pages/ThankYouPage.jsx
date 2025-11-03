import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderService from "../../../client/orderService";

const ThankYouPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetchedOrder = await orderService.getOrderById(Number(orderId));
        setOrder(fetchedOrder);
      } catch (err) {
        setError(err.response?.data?.message || "No se pudo cargar la orden.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <div>Cargando detalles de la orden...</div>;
  if (error) return <div>{error}</div>;
  if (!order) return <div>No se encontró la orden.</div>;

  return (
    <div className="thank-you-page py-5">
      <div className="container">
        <h1>¡Gracias por tu compra, {order.user.name}!</h1>
        <p>Orden #: {order.orderId}</p>
        <p>Fecha: {new Date(order.orderDate).toLocaleString()}</p>
        <p>Estado: {order.status}</p>
        <p>Total: ${order.total.toFixed(2)}</p>

        <h2>Productos:</h2>
        <ul>
          {order.items.map((item) => (
            <li key={item.orderItemId}>
              {item.product.name} x {item.quantity} - ${item.unitPrice.toFixed(2)}
            </li>
          ))}
        </ul>

        <h2>Dirección de envío:</h2>
        <p>
          {order.address.street}, {order.address.city}, {order.address.state},{" "}
          {order.address.country} - {order.address.postalCode}
        </p>

        <h2>Pago:</h2>
        {order.payments.map((payment) => (
          <p key={payment.paymentId}>
            Método: {payment.method.name} - Monto: ${payment.amount.toFixed(2)} - Estado:{" "}
            {payment.status}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ThankYouPage;
