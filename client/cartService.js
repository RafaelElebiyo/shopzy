import api from './api';

const cartService = {  
    getCartByUserId: async (userId) => {
        const response = await api.get(`/cart/${userId}/user`);
        return response.data;
    },
    addToCart: async (userId, product) => {
        const response = await api.post(`/cart/${userId}/add`, product);
        return response.data;
    },
    removeFromCart: async (userId, productId) => {
        const response = await api.delete(`/cart/${userId}/remove/${productId}`);
        return response.data;
    },
    updateCartItem: async (userId, productId, quantity) => {
        const response = await api.put(`/cart/${userId}/update/${productId}`, { quantity });
        return response.data;
    },
    clearCart: async (userId) => {
        const response = await api.delete(`/cart/${userId}/clear`);
        return response.data;
    },
    getCartCount: async (userId) => {
        const response = await api.get(`/cart/${userId}/count`);
        return response.data;
    },
    getCartTotal: async (userId) => {
        const response = await api.get(`/cart/${userId}/total`);
        return response.data;
    }
 }

export default cartService;