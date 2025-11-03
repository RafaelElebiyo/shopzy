import api from "./api";

const filterService = {
  getCategories: async () => {
    const response = await api.get("/categories");
    return response.data;
  },

  getBrands: async () => {
    const response = await api.get("/brands");
    return response.data;
  },

  getMaxAndMinPrice: async () => {
    const response = await api.get("/products/price-range");
    return response.data;
  },

  filterByPriceRange: async (min, max) => {
    const response = await api.get("/products/by-price-range", { params: { min, max } });
    return response.data;
  },

  filterByCategory: async (categoryId) => {
    const response = await api.get(`/products/${categoryId}/by-category`);
    return response.data;
  },

  filterByBrand: async (brandId) => {
    const response = await api.get(`/products/${brandId}/by-brand`);
    return response.data;
  },

  filterByRatingValue: async (rating) => {
    const response = await api.get("/products/by-rating", { params: { rating } });
    return response.data;
  }
};

export default filterService;
