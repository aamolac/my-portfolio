import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import MenuProvider from "./store/ContextMenu.jsx";

import App from "./App.jsx";
import "./assets/css/style.css";

createRoot(document.getElementById("root")).render(
  <MenuProvider>
    <BrowserRouter basename="/my-portfolio/">
      <App />
    </BrowserRouter>
  </MenuProvider>
);
