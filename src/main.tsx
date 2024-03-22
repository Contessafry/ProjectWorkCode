import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import { MainContext } from "./Context.tsx";
import AppRouter from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainContext>
      <AppRouter />
    </MainContext>
  </React.StrictMode>
);
