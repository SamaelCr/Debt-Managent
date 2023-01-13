import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Index from "./routes/index";
import Debt from "./routes/debt";
import Loan from "./routes/loan";
import Select from "./routes/select";
import History from "./routes/history";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "debt",
    element: <Debt />,
  },
  {
    path: "loan",
    element: <Loan />,
  },
  {
    path: "select",
    element: <Select />,
  },
  {
    path: "history",
    element: <History />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);