import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes";
import AuthDataProvider from "./providers/AuthDataProvider";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthDataProvider>
         <RouterProvider router={routes} />
      </AuthDataProvider>
   </StrictMode>
);
