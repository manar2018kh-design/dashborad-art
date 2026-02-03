import React from "react";

function OrderStatus({ orders }) {
  const total = orders.length;
  const completed = orders.filter(order => order.status === "Completed").length;
  const pending = orders.filter(order => order.status === "Pending").length;
  const cancelled = orders.filter(order => order.status === "Cancelled").length;

  return (
    <div className="order-status">
      <h3>Order Status</h3>

      <div className="status-item">
        <span>Completed</span>
        <span>{completed}</span>
        <div className="progress-bar">
          <div className="progress-fill green" style={{ width: `${(completed / total) * 100}%` }}></div>
        </div>
      </div>

      <div className="status-item">
        <span>Pending</span>
        <span>{pending}</span>
        <div className="progress-bar">
          <div className="progress-fill yellow" style={{ width: `${(pending / total) * 100}%` }}></div>
        </div>
      </div>

      <div className="status-item">
        <span>Cancelled</span>
        <span>{cancelled}</span>
        <div className="progress-bar">
          <div className="progress-fill red" style={{ width: `${(cancelled / total) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;