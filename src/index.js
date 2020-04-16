import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
