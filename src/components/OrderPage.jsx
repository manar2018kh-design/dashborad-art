import { useState } from "react";
import { orders } from "../data/data";

function OrderPage() {
  const [ordersList, setOrdersList] = useState(orders);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  const viewOrder = (order) => {
    setSelectedOrder(order);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setSelectedOrder(null);
    setShowViewModal(false);
  };

  const updateOrderStatus = (newStatus) => {
    if (selectedOrder) {
      setOrdersList(
        ordersList.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, status: newStatus }
            : order
        )
      );
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const getStatusClass = (status) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === "completed") return "badge active";
    if (lowerStatus === "pending") return "badge pending";
    if (lowerStatus === "cancelled") return "badge inactive";
    return "badge";
  };

  return (
    <>
      {showViewModal && selectedOrder && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: "650px" }}>
            <h3>Order Details</h3>
            <div style={{ marginBottom: "20px" }}>
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={getStatusClass(selectedOrder.status)}>
                  {selectedOrder.status}
                </span>
              </p>
            </div>

            <h4 style={{ marginBottom: "10px", color: "#4E1F00" }}>Order Items:</h4>
            <div style={{ width: "100%", overflowX: "auto", marginBottom: "20px" }}>
              <table style={{ 
                width: "100%", 
                borderCollapse: "collapse",
                background: "var(--bg-secondary)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
              }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      background: "linear-gradient(135deg, #d9c7a7 0%, #c9b894 100%)",
                      fontWeight: "700",
                      color: "#4E1F00",
                      fontSize: "0.85rem"
                    }}>Product</th>
                    <th style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      background: "linear-gradient(135deg, #d9c7a7 0%, #c9b894 100%)",
                      fontWeight: "700",
                      color: "#4E1F00",
                      fontSize: "0.85rem"
                    }}>Price</th>
                    <th style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      background: "linear-gradient(135deg, #d9c7a7 0%, #c9b894 100%)",
                      fontWeight: "700",
                      color: "#4E1F00",
                      fontSize: "0.85rem"
                    }}>Quantity</th>
                    <th style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      background: "linear-gradient(135deg, #d9c7a7 0%, #c9b894 100%)",
                      fontWeight: "700",
                      color: "#4E1F00",
                      fontSize: "0.85rem"
                    }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid rgba(78, 31, 0, 0.08)" }}>
                      <td style={{ padding: "12px 16px", textAlign: "left" }}>{item.product}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>${item.price.toLocaleString()}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>{item.qty}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>${(item.price * item.qty).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginBottom: "20px", paddingTop: "15px", borderTop: "2px solid #EBE5C2" }}>
              <h4 style={{ marginBottom: "15px", color: "#4E1F00", textAlign: "center" }}>Change Order Status</h4>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button 
                  className="badge pending" 
                  style={{ 
                    cursor: "pointer", 
                    border: selectedOrder.status.toLowerCase() === "pending" ? "3px solid #000" : "none", 
                    padding: "0.7rem 1.5rem", 
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => updateOrderStatus("Pending")}
                >
                  Pending
                </button>
                <button 
                  className="badge active" 
                  style={{ 
                    cursor: "pointer", 
                    border: selectedOrder.status.toLowerCase() === "completed" ? "3px solid #000" : "none", 
                    padding: "0.7rem 1.5rem", 
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => updateOrderStatus("Completed")}
                >
                  Completed
                </button>
                <button 
                  className="badge inactive" 
                  style={{ 
                    cursor: "pointer", 
                    border: selectedOrder.status.toLowerCase() === "cancelled" ? "3px solid #000" : "none", 
                    padding: "0.7rem 1.5rem", 
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => updateOrderStatus("Cancelled")}
                >
                  Cancelled
                </button>
              </div>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-cancel" onClick={closeViewModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="page-header">
        <h2>Orders</h2>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {ordersList.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>
                <div>
                  <strong>{o.customerName}</strong>
                  <br />
                  <small style={{ color: "#666" }}>{o.email}</small>
                </div>
              </td>
              <td>{o.items.length} items</td>
              <td>${calculateTotal(o.items).toLocaleString()}</td>
              <td>{o.date}</td>
              <td>
                <span className={getStatusClass(o.status)}>
                  {o.status}
                </span>
              </td>
              <td>
                <button 
                  onClick={() => viewOrder(o)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#000",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "underline",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#4E1F00"}
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OrderPage;