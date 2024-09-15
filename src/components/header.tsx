import { useState, useEffect } from "react";
import racoon from "../images/Raccoon.png";
import racoonGif from "../images/RacGif.gif";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button } from "@mui/material";

interface HeaderProps {
  themeMode: string;
  toggleTheme: () => void;
}

export const HeaderComponent = ({ toggleTheme, themeMode }: HeaderProps) => {
  const locale = window.location;

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
      </div>
    </header>
  );
};
