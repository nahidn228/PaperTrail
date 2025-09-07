import App from "@/App";

import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";

import { createBrowserRouter, Navigate } from "react-router";
import BookDetails from "@/pages/BookDetails";

import ProfilePage from "@/pages/ProfilePage";
import { withAuth } from "@/utils/withAuth";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { role, type TRole } from "@/constants/role";
import { adminSidebarItems } from "./adminSidebarItems";
import { generateRoutes } from "@/utils/generateRoutes";
import { userSidebarItems } from "./userSidebarItems";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Pricing from "@/pages/Pricing";
import AllBooks from "@/pages/AllBooks";
import AllBorrowSummary from "@/pages/AllBorrowSummary";
import LoginPage from "@/pages/Authentication/LoginPage";
import RegisterPage from "@/pages/Authentication/Register";
import PageTransition from "@/components/PageTransition";

const allRoles: TRole[] = ["Admin", "User"];
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PageTransition />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/books",
            element: <AllBooks />,
          },

          {
            path: "/books/:id",
            element: <BookDetails />,
          },
          {
            path: "/all-borrow-summary",
            element: <AllBorrowSummary />,
          },
          {
            Component: Faq,
            path: "/Faq",
          },
          {
            Component: Contact,
            path: "/contact",
          },
          {
            Component: Pricing,
            path: "/pricing",
          },
          {
            Component: withAuth(ProfilePage),
            path: "/profile",
          },
          {
            Component: LoginPage,
            path: "/login",
          },
          {
            Component: RegisterPage,
            path: "/registration",
          },
        ],
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, [role.admin] as TRole[]),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to={"/admin/analytics"} /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, allRoles as TRole[]),
    path: "/user",

    children: [
      { index: true, element: <Navigate to={"/user/analytics"} /> },
      ...generateRoutes(userSidebarItems),
    ],
  },
]);

export default router;
