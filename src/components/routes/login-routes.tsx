import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login-page";

export function LoginRoutes() {
  return (
    <Routes>
      <Route key={"login"} path={"/login"} element={<LoginPage />} />
      <Route
        key={"login-navigate"}
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}
