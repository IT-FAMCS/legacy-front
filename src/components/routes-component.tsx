import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import LoginPage from "../pages/login-page";
import CreatorsPage from "../pages/creators-page";
import DepartmentTemplate from "../pages/department-template/department-template";
import EventTemplate from "../pages/event-template/event-template";
import { departments, events } from "../constants";
import RegistrationPage from "../pages/registration-page";
import { UserTokenInfo } from "../interfaces/user";
import { mainInfo } from "../constants/all-main-info";
import MainInfoTemplate from "../pages/main-info-template/main-info-template";
import { useEffect, useState } from "react";
import Loader from "./loader";

function RoutesComponent({
  userInfo,
}: {
  userInfo: UserTokenInfo | undefined;
}) {
  const routes = [
    { path: "/", element: <HomePage /> },
    ...departments.map((department) => {
      return {
        path: `/${department.short_title}`,
        element: <DepartmentTemplate departmentName={department.short_title} />,
      };
    }),
    ...events.map((event) => {
      return {
        path: `/${event.short_title}`,
        element: <EventTemplate eventTitle={event.short_title} />,
      };
    }),
    ...mainInfo.map((event) => {
      return {
        path: `/${event.short_title}`,
        element: <MainInfoTemplate mainInfoName={event.short_title} />,
      };
    }),
    { path: "/registration", element: <RegistrationPage /> },
    { path: "/creators", element: <CreatorsPage /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => {
      setLoading(true);
      clearTimeout(timeout);
    };
  }, []); //if location pathname changing -> useEffect start work

  return userInfo === undefined || loading ? (
    <Loader /> //loading перенести сюда!!
  ) : (
    <Routes>
      {userInfo?.valid
        ? routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))
        : [
            <Route key={"login"} path={"/login"} element={<LoginPage />} />,
            <Route
              key={"login-navigate"}
              path="*"
              element={<Navigate to="/login" replace />}
            />,
          ]}
    </Routes>
  );
}

export default RoutesComponent;
