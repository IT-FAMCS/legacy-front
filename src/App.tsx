import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import RoutesComponent from "./components/routes-component";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./constants/themes";
import useAuth from "./hooks/useAuth";
import { UserTokenInfo } from "./interfaces/user";
import Footer from "./components/footer";
import { HeaderComponent } from "./components/header";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const { checkToken } = useAuth();
  const [user, setUser] = useState<UserTokenInfo>();

  useEffect(() => {
    checkToken().then((result) => {
      setUser(result);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
        <HeaderComponent themeMode={themeMode} toggleTheme={toggleTheme} />
        <main>
          <BrowserRouter>
            <RoutesComponent userInfo={user} />
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
