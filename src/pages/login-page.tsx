import * as React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useFormGuard from "../hooks/useFormGuard";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [isBadData, setIsBadData] = useState(false);
  const [isFormDirty, setIsFormDirty] = useFormGuard();

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password).then((res) => {
      if (res) {
        setIsFormDirty(false);
        window.location.reload();
      } else {
        setIsBadData(true);
      }
    });
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setIsFormDirty(true);
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
          onChange={handleInputChange(setEmail)}
          required
          fullWidth
          margin="normal"
          className={isBadData ? "error" : ""}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={handleInputChange(setPassword)}
          required
          fullWidth
          margin="normal"
          className={isBadData ? "error" : ""}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "0.5rem" }}
        >
          Войти
        </Button>
        {isBadData && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            Логин или пароль введены неверно
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;