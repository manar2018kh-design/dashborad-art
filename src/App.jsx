import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";
import { useState, createContext, useEffect } from "react";

import MainContent from "./components/maincontent";
import OrderPage from "./components/OrderPage";
import ProductPage from "./components/ProductPage";
import CustomerPage from "./components/CustomerPage";
import AnalyticsPage from "./components/AnalyticsPage";
import SettingPage from "./components/SettingPage";
import ArtApi from "./components/ArtApi";

import { artData } from "./data/data";

export const DarkModeContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const [darkMode, setDarkMode] = useState(false);

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : artData;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <Routes>

          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Login handleLogin={() => setIsLoggedIn(true)} />
            }
          />

          <Route
            path="/"
            element={
              isLoggedIn ? <DashboardLayout handleLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />
            }
          >
            <Route
              index
              element={<MainContent products={products} setProducts={setProducts} />}
            />
            <Route path="orders" element={<OrderPage />} />
            <Route
              path="products"
              element={<ProductPage products={products} setProducts={setProducts} />}
            />
            <Route path="customers" element={<CustomerPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingPage />} />
            <Route path="api" element={<ArtApi />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </BrowserRouter>
    </DarkModeContext.Provider>
  );
}

export default App;
