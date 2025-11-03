import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import productService from "../../../client/productService";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { product, relatedProducts } = await productService.getProductById(productId);
        setProduct(product);
        setRelatedProducts(relatedProducts);
      } catch (err) {
        console.error("Error al cargar el producto:", err);
        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<div key={i} className="bi-star-fill"></div>);
    }

    if (hasHalfStar) {
      stars.push(<div key="half" className="bi-star-half"></div>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<div key={`empty-${i}`} className="bi-star"></div>);
    }

    return stars;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Cargando producto...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger text-center m-5" role="alert">
      {error}
    </div>
  );

  if (!product) return (
    <div className="alert alert-warning text-center m-5" role="alert">
      Producto no encontrado
    </div>
  );

  const mainImage = product.images && product.images.length > 0 
    ? product.images[0].url 
    : "https://dummyimage.com/600x700/dee2e6/6c757d.jpg";

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Product section */}
      <section className="py-5">
        <div className="container px-4 px-lg-8 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-5">
              <img 
                className="card-img-top mb-5 mb-md-0" 
                src={mainImage} 
                alt={product.name} 
              />
            </div>
            <div className="col-md-5 mx-4">
              <div className="small mb-1">SKU: {product.sku}</div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              
              {/* Rating */}
              {product.averageRating > 0 && (
                <div className="d-flex small text-warning mb-2">
                  {renderStars(product.averageRating)}
                  <span className="text-muted ms-2">({product.averageRating.toFixed(1)})</span>
                </div>
              )}

              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through text-muted me-2">
                  {formatPrice(product.price * 1.2)}
                </span>
                <span>{formatPrice(product.price)}</span>
                {product.tax && (
                  <small className="text-muted d-block mt-1">
                    + {product.tax.percentage}% {product.tax.name}
                  </small>
                )}
              </div>
              
              <p className="lead">{product.description}</p>
              
              {/* Stock info */}
              <div className="mb-3">
                {product.stockQuantity > 0 ? (
                  <span className="text-success">
                    <i className="bi bi-check-circle-fill me-1"></i>
                    In stock ({product.stockQuantity} Available)
                  </span>
                ) : (
                  <span className="text-danger">
                    <i className="bi bi-x-circle-fill me-1"></i>
                    Out of stock
                  </span>
                )}
              </div>

              {/* Brand and Category */}
              <div className="mb-4">
                {product.brand && (
                  <small className="text-muted d-block">
                    Brand: {product.brand.name}
                  </small>
                )}
                {product.category && (
                  <small className="text-muted d-block">
                    Category: {product.category.name}
                    {product.category.parent && ` > ${product.category.parent.name}`}
                  </small>
                )}
              </div>

              <div className="d-flex">
                <input 
                  className="form-control text-center me-3" 
                  id="inputQuantity" 
                  type="number" 
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={product.stockQuantity}
                  style={{ maxWidth: "5rem", minWidth: "4rem" }} 
                />
                <button 
                  className="btn btn-outline-dark flex-shrink-0" 
                  type="button"
                  disabled={product.stockQuantity === 0}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {product.stockQuantity > 0 ? "Add to cart" : "Out of stock"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      {product.reviews && product.reviews.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container px-4 px-lg-5">
            <h2 className="fw-bolder mb-4">Customer Reviews</h2>
            <div className="row">
              {product.reviews.map((review) => (
                <div key={review.reviewId} className="col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="card-title mb-0">{review.user.name}</h6>
                        <small className="text-muted">
                          {new Date(review.reviewDate).toLocaleDateString()}
                        </small>
                      </div>
                      <div className="d-flex small text-warning mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="card-text">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products section */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Related products</h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {relatedProducts.map((relatedProduct) => {
                const relatedImage = relatedProduct.images && relatedProduct.images.length > 0 
                  ? relatedProduct.images[0].url 
                  : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";

                return (
                  <div key={relatedProduct.productId} className="col mb-5" >
                    <div className="card h-100">
                      {/* Product image */}
                      <img 
                        className="card-img-top" 
                        src={relatedImage} 
                        alt={relatedProduct.name} 
                      />
                      {/* Product details */}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name */}
                          <h5 className="fw-bolder">{relatedProduct.name}</h5>
                          {/* Rating */}
                          {relatedProduct.averageRating > 0 && (
                            <div className="d-flex justify-content-center small text-warning mb-2">
                              {renderStars(relatedProduct.averageRating)}
                            </div>
                          )}
                          {/* Product price */}
                          {formatPrice(relatedProduct.price)}
                        </div>
                      </div>
                      {/* Product actions */}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href={`/products/${relatedProduct.productId}`}>
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </>
  );
};

export default SingleProductPage;