import * as React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [isBadData, setIsBadData] = useState(false);

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password).then((res) => {
      if (res) {
        window.location.reload();
      } else {
        setIsBadData(true);
      }
    });
  };

  return (
    <div className="login-wrapper">
      <h3>Вход в наследие</h3>
      <form
        onSubmit={loginSubmit}
        className={`login-form ${isBadData ? "error" : ""}`}
      >
        <TextField
          label="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
          className={isBadData ? "error" : ""}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
          className={isBadData ? "error" : ""}
        />
        <Button type="submit" variant="contained" color="primary">
          Войти
        </Button>
        {isBadData && (
          <p style={{ color: "red" }}>Логин или пароль введены неверно</p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
