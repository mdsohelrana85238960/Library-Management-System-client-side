

import * as ReactDOM from "react-dom/client";
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./Component/Router/Router";
import AuthProvider from "./Component/Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider> 
     <RouterProvider router={router} /> 
     </AuthProvider>
  </React.StrictMode>
 
);

