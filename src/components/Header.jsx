import { useContext, useEffect } from "react";
import { IconButton, Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../App";

function Header({ onToggleSideBar }) {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <button className="menu-btn" onClick={onToggleSideBar}>☰</button>

      <Stack direction="row" spacing={1}>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>

        <IconButton onClick={() => navigate("/orders")}>
          <Badge badgeContent={2} color="primary">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </IconButton>
      </Stack>
    </header>
  );
}

export default Header;
