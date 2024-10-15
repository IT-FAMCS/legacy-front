import { useState, useEffect } from "react";
import racoon from "../images/Raccoon.png";
import racoonGif from "../images/RacGif.gif";
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
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  const [countClick, setCountClick] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);
  const [isThemeChangeBlocked, setIsThemeChangeBlocked] = useState(false);

  const handleClick = () => {
    setCountClick((prevCount) => prevCount + 1);

    if (countClick + 1 === 5) {
      setShowImage(true);

      setTimeout(() => {
        setShowImage(false);
      }, 3000);

      setCountClick(0);
    }
  };

  const handleThemeButtonClick = () => {
    if (isThemeChangeBlocked) {
      return;
    }

    setCountClick((prevCount) => prevCount + 1);

    if (countClick + 1 === 5) {
      setIsBackgroundChanged(true);
      setIsThemeChangeBlocked(true);

      setTimeout(() => {
        setIsBackgroundChanged(false);
        setIsThemeChangeBlocked(false);
      }, 3000);

      setCountClick(0);
    } else {
      toggleTheme();
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = isBackgroundChanged
      ? "rgb(199, 238, 207)" //цвет из брендбука, пусть пока так
      : "themeMode";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isBackgroundChanged]);

  const menuItems = (
    <List>
      <ListItem button onClick={() => locale.replace("/")}>
        <ListItemText primary="На главную" style={{ color: "white" }} />
      </ListItem>
      <ListItem button onClick={toggleTheme}>
        <ListItemText
          primary="Сменить тему"
          onClick={handleThemeButtonClick}
          style={{ color: "white" }}
        />
      </ListItem>
      <ListItem button onClick={handleLogout}>
        <ListItemText primary="Выйти" style={{ color: "white" }} />
      </ListItem>
    </List>
  );

  return (
    <header className="app-header">
      <div className="app-header__block">
        <img src={racoon} alt="Raccoon logo" className="racccon-logo"></img>
        <div className="project-name" onClick={handleClick}>
          LEGACY
        </div>

        {showImage && (
          <img
            src={racoonGif}
            alt="Hidden"
            style={{
              position: "absolute",
              top: "95%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30vw",
              height: "auto",
              zIndex: 1000,
            }}
          />
        )}
      </div>
      <div className="app-header__block">
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "rgb(25, 70, 124)",
                  width: 250,
                },
              }}
            >
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
            <IconButton
              sx={{ ml: 1 }}
              onClick={handleThemeButtonClick}
              color="inherit"
            >
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
