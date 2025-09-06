

import Loader from "@/components/Loader";
import type { TRole } from "@/constants/role";
import { useUserInfoQuery } from "@/redux/API/authApi";



import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole[]) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    console.log(data);

    if (isLoading) {
      return <Loader />;
    }

    if (!isLoading && !data?.data?.email) {
      return <Navigate to={"/login"} />;
    }
    if (requiredRole && !requiredRole.includes(data.data.role)) {
      return <Navigate to={"/unAuthorized"} />;
    }

    return <Component />;
  };
};