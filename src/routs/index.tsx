import App from "@/App";
import AddBook from "@/pages/AddBook";

import BorrowSummary from "@/pages/BorrowSummary";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";

import SingleBook from "@/pages/SingleBook";
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

const allRoles: TRole[] = ["Admin", "User"];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book/:id",
        element: <SingleBook />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
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
        Component: ProfilePage,
        path: "/profile",
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
