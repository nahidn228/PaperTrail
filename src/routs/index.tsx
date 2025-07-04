import App from "@/App";
import AddBook from "@/pages/AddBook";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import ShowSingleBook from "@/pages/ShowSingleBook";
import SingleBook from "@/pages/SingleBook";
import { createBrowserRouter } from "react-router";

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
        element: <ShowSingleBook />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);

export default router;
