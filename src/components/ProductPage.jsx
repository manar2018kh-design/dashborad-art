import { useState } from "react";
function ProductPage({ products, setProducts }) {
  const [formData, setFormData] = useState({ name: "", artistName: "", price: "", stock: "", image: "" });
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct !== null) {
      setProducts(
        products.map((item) =>
          item.id === editingProduct
            ? { ...item, name: formData.name, artistName: formData.artistName, price: Number(formData.price), stock: Number(formData.stock), active: Number(formData.stock) > 0, image: formData.image }
            : item
        )
      );
    } else {
      const newProduct = { 
        id: products.length + 1, 
        name: formData.name, 
        artistName: formData.artistName, 
        price: Number(formData.price), 
        stock: Number(formData.stock), 
        active: Number(formData.stock) > 0, 
        image: formData.image || "" 
      };
      setProducts([...products, newProduct]);
    }
    closeForm();
  };

  const deleteArt = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const openAddForm = () => {
    setEditingProduct(null);
    setFormData({ name: "", artistName: "", price: "", stock: "", image: "" });
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setEditingProduct(product.id);
    setFormData({ 
      name: product.name, 
      artistName: product.artistName, 
      price: product.price, 
      stock: product.stock, 
      image: product.image || "" 
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingProduct(null);
    setFormData({ name: "", artistName: "", price: "", stock: "", image: "" });
    setShowForm(false);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artistName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
        ? product.active
        : !product.active;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editingProduct !== null ? "Edit Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Artist Name</label>
                <input type="text" name="artistName" value={formData.artistName} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                {formData.image && <img src={formData.image} alt="preview" style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "10px" }} />}
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn-add">{editingProduct !== null ? "Update Product" : "Add Product"}</button>
                <button type="button" className="btn-cancel" onClick={closeForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="page-header">
        <h2>Art Works</h2>
        <button className="btn-add" onClick={openAddForm}>Add Product +</button>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by title or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Out Of Stock</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Artist Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item) => (
            <tr key={item.id}>
              <td><img src={item.image || "default.jpg"} alt={item.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} /></td>
              <td>{item.name}</td>
              <td>{item.artistName}</td>
              <td>${item.price.toLocaleString()}</td>
              <td>{item.stock}</td>
              <td><span className={item.active ? "badge active" : "badge inactive"}>{item.active ? "Active" : "Out Of Stock"}</span></td>
              <td>
                <button className="btn-edit" onClick={() => openEditForm(item)}>Edit</button>
                <button className="btn-delete" onClick={() => deleteArt(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductPage;
