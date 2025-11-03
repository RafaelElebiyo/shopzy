import api from './api';

const productService = {
  getAllProducts: async () => {
    const response = await api.get('/products');
    return response.data;
  },

  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    const relatedResponse = await api.get(`/products/${id}/related`);
    return { product: response.data, relatedProducts: relatedResponse.data };
  },

  getPopularProducts: async () => {
    const response = await api.get('/products/popular');
    return response.data;
  },

  getTopRatedProducts: async () => {
    const response = await api.get('/products/top-rated');
    return response.data;
  },

  getNewArrivals: async () => {
    const response = await api.get('/products/new-arrivals');
    return response.data;
  },

  searchProducts: async (query) => {
    const response = await api.get('/products/search', { params: { query } });
    return response.data;
  },
  createProduct: async (productData) => {
    const response = await api.post('/products/create', productData);
    return response.data;
  },

  updateProduct: async (productId, productData) => {
    const response = await api.put(`/products/${productId}/update`, productData);
    return response.data;
  },

  updateProductImage: async (productId, imageData) => {
    const response = await api.put(`/products/${productId}/update-image`, imageData);
    return response.data;
  },

  deleteProduct: async (productId) => {
    const response = await api.delete(`/products/${productId}/delete`);
    return response.data;
  }
};

export default productService;
