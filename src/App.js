// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Products from "./utils/products.json";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import Auth from "./components/Auth";
// import NewArrival from "./pages/NewArrival";
// import BestSeller from "./pages/BestSeller";
// import Sale from "./pages/Sale";
// import Footer from "./components/Footer";
// import ProductDetails from "./pages/ProductDetail";
// import AboutUs from "./pages/Links/AboutUs";
// import ContactPage from "./pages/Links/ContactUs";
// import TermsOfService from "./pages/Links/TermsConditions";
// import PrivacyPolicy from "./pages/Links/PrivacyPolicy";
// import RefundPolicy from "./pages/Links/RefundPolicy";
// import ShippingPolicy from "./pages/Links/ShippingPolicy";
// import AllData from "./pages/AllData";

// function AppContent() {
//   const location = useLocation();

//   return (
//     <>
//       {location.pathname !== "/login" && <Header />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="new-arrivals" element={<NewArrival />} />
//         <Route path="best-sellers" element={<BestSeller />} />
//         <Route path="sale" element={<Sale />} />
//         <Route path="/login" element={<Auth />} />
//         <Route path="/details/product/:id" element={<ProductDetails />} />
//         {/* Links */}
//         <Route path="about-us" element={<AboutUs />} />
//         <Route path="contact" element={<ContactPage />} />
//         <Route path="/terms-and-conditions" element={<TermsOfService />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/refund-policy" element={<RefundPolicy />} />
//         <Route path="/shipping-policy" element={<ShippingPolicy />} />
//         <Route path="all-products" element={<AllData />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//       {location.pathname !== "/login" && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Collections from "./pages/collection";
import Products from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import PlaceOrder from "./pages/placeOrder";
import Orders from "./pages/orders";
import NavBar from "./components/Navbar";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ScrollTop from "./components/ScrollTop";
import AboutUs from "./pages/about";
import ContactPage from "./pages/contact";
import TermsOfService from "./components/Links/TermsConditions";
import PrivacyPolicy from "./components/Links/PrivacyPolicy";
import RefundPolicy from "./components/Links/RefundPolicy";
import ShippingPolicy from "./components/Links/ShippingPolicy";

function AppContent() {
  const location = useLocation();
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        {/* Links */}
        <Route path="/terms-and-conditions" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {location.pathname !== "/login" &&
        location.pathname !== "/place-order" &&
        location.pathname !== "/orders" && <Footer />}
      <ScrollTop />
    </div>
  );
}

function App() {
  return (
    // <BrowserRouter>
    <AppContent />
    // {/* </BrowserRouter> */}
  );
}

export default App;
