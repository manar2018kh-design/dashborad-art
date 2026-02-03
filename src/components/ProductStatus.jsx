import React from "react";

function ProductStatus({ products }) {
  const total = products.length;
  const active = products.filter(product => product.active === true).length;
  const outOfStock = products.filter(product => product.active === false).length;

  return (
    <div className="order-status">
      <h3>Product Status</h3>

      <div className="status-item">
        <span>Active</span>
        <span>{active}</span>
        <div className="progress-bar">
          <div className="progress-fill green" style={{ width: `${total > 0 ? (active / total) * 100 : 0}%` }}></div>
        </div>
      </div>

      <div className="status-item">
        <span>Out Of Stock</span>
        <span>{outOfStock}</span>
        <div className="progress-bar">
          <div className="progress-fill red" style={{ width: `${total > 0 ? (outOfStock / total) * 100 : 0}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductStatus;