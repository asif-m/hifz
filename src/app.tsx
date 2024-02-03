// @refresh reload
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { createTheme, ThemeProvider } from "@suid/material/styles";
import { CssBaseline } from "@suid/material";
import { StoreProvider, getInitialStoreData } from "./store/store";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <StoreProvider {...getInitialStoreData()}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}
