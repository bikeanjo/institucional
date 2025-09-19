import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Routes from "./Routes";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import App from "./App";
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App>
          <Routes />
        </App>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
