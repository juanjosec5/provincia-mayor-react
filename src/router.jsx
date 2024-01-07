import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
