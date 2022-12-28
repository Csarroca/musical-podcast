import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import Theme from "./styles/Theme/Theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
