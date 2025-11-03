import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderService from "../../../client/orderService";

const OrderDetails = () => {
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
    <div>
      <h1>Detalles de la Orden {orderId}</h1>
      <p>Total: ${order.total}</p>
      <p>Fecha: {new Date(order.orderDate).toLocaleString()}</p>
      {/* Aquí puedes agregar más detalles de la orden */}
    </div>
  );
};

export default OrderDetails;
