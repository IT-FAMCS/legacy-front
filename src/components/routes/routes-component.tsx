import { Routes } from "react-router-dom";
import { UserTokenInfo } from "../../interfaces/user";
import { useEffect, useState } from "react";
import Loader from "../loader";
import { LoginRoutes } from "./login-routes";
import { DefaultRoutes } from "./default-routes";

function RoutesComponent({
  userInfo,
}: {
  userInfo: UserTokenInfo | undefined;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => {
      setLoading(true);
      clearTimeout(timeout);
    };
  }, []);

  return userInfo === undefined || loading ? (
    <Loader />
  ) : userInfo?.valid ? (
    <DefaultRoutes />
  ) : (
    <LoginRoutes />
  );
}

export default RoutesComponent;