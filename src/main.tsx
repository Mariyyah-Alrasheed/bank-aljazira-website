import "./i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import DirectionProvider from "./components/DirectionProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/bank-aljazira-website">
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </BrowserRouter>
  </StrictMode>
);
