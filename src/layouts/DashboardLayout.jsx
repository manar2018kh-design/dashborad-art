import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/maincontent";
import OrderPage from "../components/OrderPage";
import ProductPage from "../components/ProductPage";
import SettingPage from "../components/SettingPage";
import CustomerPage from "../components/CustomerPage";
import AnalyticsPage from "../components/AnalyticsPage";
import { artData } from "../data/data";
import ArtApi from "../components/ArtApi";
import "../App.css";  
function DashboardLayout({ handleLogout }) {
  const [showSideBar, setShowSidebar] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : artData;
  });
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  function toggleSideBar() {
    setShowSidebar(!showSideBar);
  }

  return (
    <div className="layout">
      {showSideBar && (
        <Sidebar
          activePage={activePage}
          onPageChange={setActivePage}
          onLogout={handleLogout}
        />
      )}
      <div className="main-area">
        <Header
          onToggleSideBar={toggleSideBar}
          setActivePage={setActivePage}
        />
        <main className="main">
          {activePage === "dashboard" && <MainContent activePage={activePage} products={products} setProducts={setProducts} />}
          {activePage === "orders" && <OrderPage />}
          {activePage === "product" && <ProductPage  products={products} setProducts={setProducts}/>}
          {activePage === "customers" && <CustomerPage />}
          {activePage === "analytics" && <AnalyticsPage />}
          {activePage === "settings" && <SettingPage />}
          {activePage === "api" && <ArtApi />}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;