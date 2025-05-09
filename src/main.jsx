import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import ContextProvider from "./Context";
import Dashboard from "./Routes/Dashboard";
import AdminPanel from "./Routes/AdminPanel";
import CartPage from "./Routes/CartPage";
import UpdateUser from "./Routes/UpdateUser";

let router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin-panel",
    Component: AdminPanel,
  },
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
  {
    path: "/update-user",
    Component: UpdateUser,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
