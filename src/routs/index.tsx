import App from "@/App";
import AddBook from "@/pages/AddBook";
import Books from "@/pages/Books";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
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
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/edit-book/:id",
        element: <AddBook />,
      },
    ],
  },
]);

export default router;
