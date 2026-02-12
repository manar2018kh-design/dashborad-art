import { useEffect, useState } from "react";

function ProductApi() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data);
                setLoading(false);
            })
            .catch((error) => console.log("error", error));
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="page-header">
                <h1>Products from Api</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Artist Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.Artist_Name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.available ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ProductApi;
