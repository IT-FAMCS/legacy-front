import { Navigate, Route, Routes } from "react-router-dom";

import CreatorsPage from "../../pages/creators-page";
import DepartmentTemplate from "../../pages/department-template/department-template";
import EventTemplate from "../../pages/event-template/event-template";
import HomePage from "../../pages/home-page/home-page";
import MainInfoTemplate from "../../pages/main-info-template/main-info-template";
import RegistrationPage from "../../pages/registration-page";
import { departmentsInfo } from "../../constants/departments-info";
import { eventsInfo } from "../../constants/events-info";
import { mainInfo } from "../../constants/main-info";

const routes = [
  { path: "/", element: <HomePage /> },
  ...departmentsInfo.map((department) => {
    return {
      path: `/${department.link}`,
      element: <DepartmentTemplate departmentName={department.link} />,
    };
  }),
  ...eventsInfo.map((event) => {
    return {
      path: `/${event.link}`,
      element: <EventTemplate eventTitle={event.link} />,
    };
  }),
  ...mainInfo.map((event) => {
    return {
      path: `/${event.link}`,
      element: <MainInfoTemplate mainInfoName={event.link} />,
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
