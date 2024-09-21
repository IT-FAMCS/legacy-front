import { useState } from "react";
import {
  LOGIN_URL,
  LOGOUT_URL,
  CHECK_TOKEN_URL,
  REGISTER_URL,
} from "../constants/auth-url";
import { RegisterData } from "../interfaces/register";
import { fetchPost } from "../api/fetchPost";
import { NotificationProps } from "../interfaces/notification";

export default function useAuth() {
  const [notification, setNotification] = useState<NotificationProps>({
    message: "",
    severity: "info",
    open: false,
    onClose: () => setNotification((prev) => ({ ...prev, open: false })),
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await fetchPost(LOGIN_URL, { email, password }, {}, setNotification);
      if (response.token) {
        localStorage.setItem("token", response.token);
        return true;
      } 
      setNotification({
        message: "Invalid credentials.",
        severity: "error",
        open: true,
        onClose: () => setNotification((prev) => ({ ...prev, open: false })),
      });
      return false;
      // !!!добавть что если запрос фигня -- окрашивать форму в красный типа ошибка (добавлять это в компоненте логина)
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetchPost(LOGOUT_URL, {}, {}, setNotification);
      localStorage.removeItem("token"); 
      //!!! при логауте переводить на страницу логина
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const checkToken = async () => {
    //вызываем когда надо проверить, зашел ли пользователь или нет
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }

    try {
      return await fetchPost(CHECK_TOKEN_URL, { token }, {}, setNotification);
    } catch (error) {
      console.error("Token check failed:", error);
      return false;
    }
  };

  const register = async (
    //при регистрации
    data: Omit<RegisterData, "confirmPassword"> //данные для сервера нужны без подтверждения пароля
  ) => {
    try {
      const response = await fetchPost(REGISTER_URL, data, {}, setNotification); // !!!добавть что если запрос фигня -- окрашивать форму в красный типа ошибка (добавлять это в компоненте регистрации)
      //!!!если вход удачный -- переходить на основную страницу
    } catch (error) {
      console.error("Registration failed:", error); //!!! тоже указывать ошибку в форме на странице
      throw error;
    }
  };

  return { login, logout, checkToken, register, notification };
}
