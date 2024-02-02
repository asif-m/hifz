// @refresh reload
import "./app.css";
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";

export default function App() {
  return (
    <Router root={props => <Suspense>{props.children}</Suspense>}>
      <FileRoutes />
    </Router>
  );
}
