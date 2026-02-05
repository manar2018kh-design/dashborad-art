import { useState } from "react";
import { orders } from "../data/data";


function OrderPage() {
  const [ordersList, setOrdersList] = useState(orders);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const viewOrder = (order) => {
    setSelectedOrder(order);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setSelectedOrder(null);
    setShowViewModal(false);
  };

  const updateOrderStatus = (newStatus) => {
    setOrdersList(
      ordersList.map((order) =>
        order.id === selectedOrder.id
          ? { ...order, status: newStatus }
          : order
      )
    );
    setSelectedOrder({ ...selectedOrder, status: newStatus });
  };

  const getStatusClass = (status) => {
    const s = status.toLowerCase();
    if (s === "completed") return "badge active";
    if (s === "pending") return "badge pending";
    if (s === "cancelled") return "badge inactive";
    return "badge";
  };

  return (
    <>
      {showViewModal && selectedOrder && (
        <div className="modal-overlay">
          <div className="modal order-modal">
            <h3>Order Details</h3>

            <div className="modal-section">
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer:</strong> {selectedOrder.customerName}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={getStatusClass(selectedOrder.status)}>
                  {selectedOrder.status}
                </span>
              </p>
            </div>

            <h4 className="order-items-title">Order Items</h4>

            <div className="order-items-wrapper">
              <table className="order-table">
                <thead>
                  <tr>
                    <th className="left">Product</th>
                    <th className="center">Price</th>
                    <th className="center">Qty</th>
                    <th className="center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((item, i) => (
                    <tr key={i}>
                      <td className="left">{item.product}</td>
                      <td className="center">${item.price.toLocaleString()}</td>
                      <td className="center">{item.qty}</td>
                      <td className="center">
                        ${(item.price * item.qty).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="order-status-section">
              <h4 className="order-status-title">Change Order Status</h4>
              <div className="order-status-buttons">
                {["Pending", "Completed", "Cancelled"].map((status) => (
                  <button
                    key={status}
                    className={`badge ${status.toLowerCase()} status-btn ${
                      selectedOrder.status === status ? "active-selected" : ""
                    }`}
                    onClick={() => updateOrderStatus(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn-cancel" onClick={closeViewModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="page-header">
        <h2>Orders</h2>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
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
                <strong>{o.customerName}</strong>
                <br />
                <small>{o.email}</small>
              </td>
              <td>{o.items.length}</td>
              <td>${calculateTotal(o.items).toLocaleString()}</td>
              <td>{o.date}</td>
              <td>
                <span className={getStatusClass(o.status)}>
                  {o.status}
                </span>
              </td>
              <td>
                <button className="view-btn" onClick={() => viewOrder(o)}>
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
