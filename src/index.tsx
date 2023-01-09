import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import { ModalFrameProvider } from "./Contexts/ModalFrameContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <Detail /> },
      { path: "products/create", element: <Create /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalFrameProvider>
      <RouterProvider router={router} />
    </ModalFrameProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
