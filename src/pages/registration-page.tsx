import * as React from "react";
import { useState } from "react";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import useAuth from "../hooks/useAuth";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const { register } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    try {
      await register({
        email: formData.username,
        username: formData.username,
        password: formData.password,
      });
      setPopupMessage(
        `Пользователь ${formData.username} зарегистрирован с паролем ${formData.password}`
      );
      setPopupOpen(true);
      setFormData({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Логин: ${formData.username}, Пароль: ${formData.password}`
    );
  };

  return (
    <div className="registration-wrapper">
      <h3>Регистрация пользователя (в разработке)</h3>
      <form onSubmit={handleSubmit} className="registration-form">
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Зарегистрироваться
        </Button>
      </form>
      <Snackbar
        open={popupOpen}
        autoHideDuration={6000}
        onClose={() => setPopupOpen(false)}
      >
        <Alert onClose={() => setPopupOpen(false)} severity="success">
          {popupMessage}
          <Button onClick={handleCopy} color="inherit">
            Скопировать информацию
          </Button>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default RegistrationPage;
