import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderService from "../../../client/orderService";

const OrdersPage = () => {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userOrders = await orderService.getOrdersByUserId(Number(userId));
        setOrders(userOrders);
      } catch (err) {
        setError(err.response?.data?.message || "No se pudieron cargar las órdenes.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [userId]);

  if (loading) return <div>Cargando órdenes...</div>;
  if (error) return <div>{error}</div>;
  if (orders.length === 0) return <div>No se encontraron órdenes para este usuario.</div>;

  return (
    <div>
      <h1>Órdenes del Usuario {userId}</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            Orden ID: {order.orderId} - Total: ${order.total} - Fecha: {new Date(order.orderDate).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;
