import { NavLink } from "react-router-dom";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { IoHomeOutline, IoPeople } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LuBox } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiArtboardLine } from "react-icons/ri";
import ProductApi from "./ProductApi";
import m from "../assets/img/m.png";

function Sidebar({ onLogout }) {
  const navItems = [
    { path: "/", label: "Dashboard", icon: <IoHomeOutline /> },
    { path: "/products", label: "Product", icon: <ProductionQuantityLimitsIcon /> },
    { path: "/customers", label: "Customers", icon: <IoPeople /> },
    { path: "/orders", label: "Orders", icon: <LuBox /> },
    { path: "/api", label: "Art Api", icon: <RiArtboardLine /> },
    { path: "/analytics", label: "Analytics", icon: <TbBrandGoogleAnalytics /> },
    { path: "/settings", label: "Settings", icon: <SettingsSuggestIcon /> },
    {path: "/productapi", label: "Product Api", icon: <RiArtboardLine /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img src={m} alt="Logo" className="sidebar-logo" />
      </div>

      <h2 className="brand">Admin</h2>

      <ul className="nav-list">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            {item.icon} {item.label}
          </NavLink>
        ))}

        <li className="nav-item logout" onClick={onLogout}>
          <IoIosLogOut /> Logout
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
