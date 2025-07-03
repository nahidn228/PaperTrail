import App from "@/App";
import Books from "@/pages/Books";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
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
    ],
  },
]);

export default router;
