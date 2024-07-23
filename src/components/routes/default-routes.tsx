import { Navigate, Route, Routes } from "react-router-dom";
import { departments, events } from "../../constants";
import { mainInfo } from "../../constants/all-main-info";
import CreatorsPage from "../../pages/creators-page";
import DepartmentTemplate from "../../pages/department-template/department-template";
import EventTemplate from "../../pages/event-template/event-template";
import HomePage from "../../pages/home-page/home-page";
import MainInfoTemplate from "../../pages/main-info-template/main-info-template";
import RegistrationPage from "../../pages/registration-page";

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

export function DefaultRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
