import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// styles
import "@/styles/index.scss";

// components and pages
import Navbar from "@/components/Navbar/index.jsx";
import Home from "@/pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
