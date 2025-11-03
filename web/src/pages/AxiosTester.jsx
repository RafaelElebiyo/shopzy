import React, { useState, useEffect } from 'react';
import productService from '../../../client/productService';

const AxiosTester = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productById, setProductById] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [productsByBrand, setProductsByBrand] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // 1. Todos los productos
        const all = await productService.getAllProducts();
        setAllProducts(all);

        // 2. Producto por ID (usa el primero que haya en all)
        if (all.length > 0) {
          const firstId = all[0].productId;
          const product = await productService.getProductById(firstId);
          setProductById(product);
        }

        // 3. Productos por categoría (ejemplo categoryId = 1)
        const byCategory = await productService.getProductsByCategory(3);
        setProductsByCategory(byCategory);

        // 4. Productos por marca (ejemplo brandId = 1)
        const byBrand = await productService.getProductsByBrand(1);
        setProductsByBrand(byBrand);

        // 5. Populares
        const popular = await productService.getPopularProducts();
        setPopularProducts(popular);

        // 6. Mejor valorados
        const topRated = await productService.getTopRatedProducts();
        setTopRatedProducts(topRated);

        // 7. Nuevas llegadas
        const arrivals = await productService.getNewArrivals();
        setNewArrivals(arrivals);

        // 8. Buscar "smartphone"
        const search = await productService.searchProducts("smartphone");
        setSearchResults(search);

      } catch (error) {
        console.error("Error probando endpoints:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return <div>Cargando datos de prueba...</div>;
  }

  return (
    <div>
      <h1>Pruebas de Endpoints con Axios</h1>

      <h2>1. Todos los productos</h2>
      <pre>{JSON.stringify(allProducts, null, 2)}</pre>

      <h2>2. Producto por ID (con relacionados)</h2>
      <pre>{JSON.stringify(productById, null, 2)}</pre>

      <h2>3. Productos por Categoría (id=1)</h2>
      <pre>{JSON.stringify(productsByCategory, null, 2)}</pre>

      <h2>4. Productos por Marca (id=1)</h2>
      <pre>{JSON.stringify(productsByBrand, null, 2)}</pre>

      <h2>5. Productos Populares</h2>
      <pre>{JSON.stringify(popularProducts, null, 2)}</pre>

      <h2>6. Productos Mejor Valorados</h2>
      <pre>{JSON.stringify(topRatedProducts, null, 2)}</pre>

      <h2>7. Nuevas Llegadas</h2>
      <pre>{JSON.stringify(newArrivals, null, 2)}</pre>

      <h2>8. Búsqueda: "smartphone"</h2>
      <pre>{JSON.stringify(searchResults, null, 2)}</pre>
    </div>
  );
};

export default AxiosTester;
