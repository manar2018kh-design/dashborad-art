import { customers } from "../data/data";
function CustomerPage(){
    return(
      <>
          <div className="page-header">
        <h2>Customers</h2>

      </div>
     
  
       <div className="customer-cards">
  {customers.map((c) => (
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
          <p className="customer-status">{c.status}</p>
        </div>
      </div>

      <div className="customer-body">
        <p>{c.email}</p>
        <p>{c.phone}</p>
        <p>{c.location}</p>
      </div>

      <div className="customer-footer">
        <div>
          <p className="customer-num">${c.totalSpent}</p>
          <span>Total</span>
        </div>
        <div>
          <p className="customer-num">{c.orders}</p>
          <span>Orders</span>
        </div>
      </div>
    </div>
  ))}
</div>
       </> 
    )
} export default CustomerPage