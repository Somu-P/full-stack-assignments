import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserContext from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <UserContext>
    <App />
  </UserContext>
);
