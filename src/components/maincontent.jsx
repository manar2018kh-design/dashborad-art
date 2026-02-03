import StatCard from "./StatCard";
import ProductPage from "./ProductPage";
import OrderPage from "./OrderPage";
import { artData, orders } from "../data/data";
import { topCustomers } from "../data/data";
import OrderStatus from "./OrderStatus";
import ProductStatus from "./ProductStatus";


function MainContent({ activePage, products, setProducts }) { 

  const renderTopCustomers = () => {
    return topCustomers.map((c) => (
      <div className="customer-card" key={c.id}>
        <div className="customer-header">
          <div className="customer-avatar">
            {c.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="customer-name">{c.name}</p>
            <p className="customer-status">{c.orders} orders</p>
          </div>
        </div>
      </div>
    ));
  };

  if (activePage === "product") return <ProductPage products={products} setProducts={setProducts} />;
  if (activePage === "motorcycles") return <ProductPage products={products} setProducts={setProducts} />;
  if (activePage === "orders") return <OrderPage />;

  const totalProducts = products.length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce(
    (total, order) => {
      const orderTotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
      return total + orderTotal;
    }, 0);

  return (
    <div className="main-content">
      <h2>Good morning, manar! 👋</h2>
      <h3>Here's what's happening with your gallery today</h3>
      
      <h3>Statistics</h3>
      <div className="card-grid">
        <StatCard title="Total Products" value={totalProducts} />
        <StatCard title="Total Orders" value={totalOrders} />
        <StatCard title="Revenue" value={`$${totalRevenue.toLocaleString(2)}`} />
      </div>
      
      <ProductStatus products={products} />
      <OrderStatus orders={orders} />
      
      <h3 className="section-title">Top Customers</h3>
      <div className="customer-cards">{renderTopCustomers()}</div>
    </div>
  );
}

export default MainContent;