import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { IoHomeOutline, IoPeople } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LuBox } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiArtboardLine } from "react-icons/ri";
import m from "../assets/img/m.png";

function Sidebar({ activePage, onPageChange, onLogout }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <IoHomeOutline /> },
    { id: "product", label: "Product", icon: <ProductionQuantityLimitsIcon /> },
    { id: "customers", label: "Customers", icon: <IoPeople /> },
    { id: "orders", label: "Orders", icon: <LuBox /> },
    { id: "api", label: "Art Api", icon: <RiArtboardLine /> },
    { id: "analytics", label: "Analytics", icon: <TbBrandGoogleAnalytics /> },
    { id: "settings", label: "Settings", icon: <SettingsSuggestIcon /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img src={m} alt="Logo" className="sidebar-logo" />
      </div>

      <h2 className="brand">Admin</h2>

      <ul className="nav-list">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => onPageChange(item.id)}
          >
            {item.icon} {item.label}
          </li>
        ))}

        <li className="nav-item logout" onClick={onLogout}>
          <IoIosLogOut /> Logout
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;