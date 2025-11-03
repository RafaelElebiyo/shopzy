import api from './api';

const orderService = {  
    getOrdersByUserId: async (userId) => {
        const response = await api.get(`/orders/user/${userId}`);
        return response.data;
    },

    getOrderById: async (orderId) => {
        const response = await api.get(`/orders/${orderId}`);
        return response.data;
    },
    createOrder: async (userId, orderData) => {
        const response = await api.post(`/orders/user/${userId}/create`, orderData);
        return response.data;
    },
    cancelOrder: async (orderId) => {
        const response = await api.put(`/orders/${orderId}/cancel`);
        return response.data;
    },
    getOrderStatus: async (orderId) => {
        const response = await api.get(`/orders/${orderId}/status`);
        return response.data;
    }
}

export default orderService;
