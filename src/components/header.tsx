import racoon from "../images/Raccoon.png";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface HeaderProps {
  themeMode: string;
  toggleTheme: () => void;
}

export const HeaderComponent = ({ toggleTheme, themeMode }: HeaderProps) => {
  const locale = window.location;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    fetch(`${process.env.REACT_APP_HAND_URL}/api/users/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          localStorage.removeItem("token");
          window.location.replace("/login");
        }
      })
      .catch(error => console.error("Error logging out:", error));
  };

  const menuItems = (
    <List>
      <ListItem button onClick={() => locale.replace("/")}>
        <ListItemText primary="На главную" />
      </ListItem>
      <ListItem button onClick={handleLogout}>
        <ListItemText primary="Выйти" />
      </ListItem>
    </List>
  );

  return (
    <header className="app-header">
      <div className="app-header__block">
        <img src={racoon} alt="Raccoon logo" className="racccon-logo"></img>
        <div className="project-name">LEGACY</div>{" "}
      </div>
      <div className="app-header__block">
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {menuItems}
            </Drawer>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                if (locale.pathname !== "/") {
                  locale.replace("/");
                }
              }}
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              На главную
            </Button>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {themeMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <IconButton
          edge="end"
          aria-label="account of current user"
          onClick={handlePopoverOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Button onClick={handleLogout} sx={{ m: 1 }}>
            Выйти
          </Button>
        </Popover>
          </>
        )}
      </div>
    </header>
  );
};