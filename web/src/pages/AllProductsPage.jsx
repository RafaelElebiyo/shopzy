import React, { useState, useEffect } from 'react';
import productService from '../../../client/productService';
import filterService from '../../../client/filterService';

// Import components
import Navbar from '../components/Header/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/Product/ProductsGrid';

// Import filter components
import Sidebar from '../components/Sidebar/Sidebar';
import FilterSection from '../components/Sidebar/FilterSection';
import PriceRangeFilter from '../components/Sidebar/PriceRangeFilter';
import RatingFilter from '../components/Sidebar/RatingFilter';
import BrandFilter from '../components/Sidebar/BrandFilter';
import CategoryFilter from '../components/Sidebar/CategoryFilter';
import FilterList from '../components/Sidebar/FilterList';

const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Dynamic filter data
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceLimits, setPriceLimits] = useState({ min: 0, max: 1000 });

  const sortOptions = ['Most Popular', 'Price: Low to High', 'Price: High to Low', 'Highest Rated'];

  // 🔹 Load filters and products
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [products, fetchedCategories, fetchedBrands, priceRangeData] = await Promise.all([
          productService.getAllProducts(),
          filterService.getCategories(),
          filterService.getBrands(),
          filterService.getMaxAndMinPrice()
        ]);

        setAllProducts(products);
        setFilteredProducts(products);

        // Normalize categories and brands for display
        setCategories([{ categoryId: 0, name: 'All' }, ...fetchedCategories]);
        setBrands(fetchedBrands);

        // Price range limits from backend
        setPriceLimits({
          min: priceRangeData.minPrice || 0,
          max: priceRangeData.maxPrice || 1000
        });
        setPriceRange([
          priceRangeData.minPrice || 0,
          priceRangeData.maxPrice || 1000
        ]);

      } catch (error) {
        console.error("❌ Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  // 🔹 Filter products locally
  useEffect(() => {
    let filtered = [...allProducts];

    // Category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product =>
        product.category?.name === selectedCategory
      );
    }

    // Price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Ratings
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product =>
        selectedRatings.some(rating => product.rating >= rating)
      );
    }

    // Brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand?.name)
      );
    }

    setFilteredProducts(filtered);
  }, [allProducts, selectedCategory, priceRange, selectedRatings, selectedBrands]);

  // 🔹 Handlers
  const handleAddToCart = (product) => {
    console.log('🛒 Añadiendo al carrito:', product);
  };

  const handleRatingChange = (rating, checked) => {
    setSelectedRatings(prev =>
      checked ? [...prev, rating] : prev.filter(r => r !== rating)
    );
  };

  const handleBrandChange = (brand, checked) => {
    setSelectedBrands(prev =>
      checked ? [...prev, brand] : prev.filter(b => b !== brand)
    );
  };

  if (loading) {
    return <div className="text-center mt-5">Loading products...</div>;
  }

  return (
    <div>
      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5 mt-5">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-2 mb-4">
              <Sidebar title="Filters">

                <FilterSection title="Categories">
                  <CategoryFilter
                    categories={categories.map(c => c.name)}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </FilterSection>

                <FilterSection title="Price Range">
                  <PriceRangeFilter
                    min={priceLimits.min}
                    max={priceLimits.max}
                    onPriceChange={setPriceRange}
                  />
                </FilterSection>

                <FilterSection title="Brands">
                  <BrandFilter
                    brands={brands.map(b => b.name)}
                    selectedBrands={selectedBrands}
                    onBrandChange={handleBrandChange}
                  />
                </FilterSection>

                <FilterSection title="Customer Reviews">
                  <RatingFilter
                    checkedRatings={selectedRatings}
                    onRatingChange={handleRatingChange}
                  />
                </FilterSection>

              </Sidebar>
            </div>

            {/* Product Grid */}
            <div className="col-lg-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <span className="text-muted">
                    Showing {filteredProducts.length} of {allProducts.length} products
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">Sort by:</span>
                  <FilterList
                    items={sortOptions}
                    activeItem={sortOptions[0]}
                  />
                </div>
              </div>

              <ProductGrid
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProductsPage;
