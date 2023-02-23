import React from "react";
import ReactDOM from "react-dom";

import { defineCustomElements } from "@ionic/pwa-elements/loader";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

defineCustomElements(window);
