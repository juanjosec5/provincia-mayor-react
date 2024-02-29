import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <RouterProvider router={router} />
  </React.StrictMode>
);

