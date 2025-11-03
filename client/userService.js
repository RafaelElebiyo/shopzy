import api from './api';

const userService = {  
    getUserById: async (id) => {
        const response = await api.get(`/users/${id}`);
        return response.data;
    },

    getAllCustomers: async () => { 
        const response = await api.get('/customers');
        return response.data;
    },

    getAllAdmins: async () => { 
        const response = await api.get('/admins');
        return response.data;
    },

    getAllDeliverers: async () => { 
        const response = await api.get('/deliverers');
        return response.data;
    },
    createUser: async (userData) => {
        const response = await api.post('/users/create', userData);
        return response.data;
    },
    createCustomer: async (customerData) => {
        const response = await api.post('/customers/create', customerData);
        return response.data;
    },
    updateUser: async (userId, userData) => {
        const response = await api.put(`/users/${userId}/update`, userData);
        return response.data;
    },
    deleteUser: async (userId) => {
        const response = await api.delete(`/users/${userId}/delete`);
        return response.data;
    }
 }

export default userService;
