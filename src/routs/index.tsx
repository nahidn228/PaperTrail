import App from "@/App";
import AddBook from "@/pages/AddBook";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";

import SingleBook from "@/pages/SingleBook";
import { createBrowserRouter } from "react-router";
import BookDetails from "@/pages/BookDetails";
import LoginPage from "@/pages/Authentication/LoginPage";
import RegisterPage from "@/pages/Authentication/Register";

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
        element: <Books />,
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
        Component: LoginPage,
        path: "/login",
      },
      {
        Component: RegisterPage,
        path: "/registration",
      },
    ],
  },
]);

export default router;
