import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer"; 
import "./styles/main.css";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import ProfilePage from "./pages/ProfilePage";
import OrderDetails from "./pages/OrderDetails";
import OrdersPage from "./pages/OrdersPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import CartPage from "./pages/CartPage";
import DriverDashboard from "./pages/DriverDashboard";
import AllProductsPage from "./pages/AllProductsPage";
import PopularProductsPage from "./pages/PopularProductsPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardAdmin from "./pages/DashboardAdmin";
import AxiosTester from "./pages/AxiosTester";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/axios-tester" element={<AxiosTester />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/products/popular" element={<PopularProductsPage />} />
        <Route path="/products/new" element={<NewArrivalsPage />} />
        <Route path="/cart/:userId" element={<CartPage />} />
        <Route path="/checkout/:userId" element={<CheckoutPage />} />
        <Route path="/thank-you/:orderId" element={<ThankYouPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/profile/:userId/orders" element={<OrdersPage />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route
          path="/driver-dashboard/:driverId"
          element={<DriverDashboard />}
        />
        <Route path="/dashboard-admin/:adminId" element={<DashboardAdmin />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
