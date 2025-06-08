import React from "react";
import ReactDOM from "react-dom/client";
import "./static/css/index.css";
import App from "./App";
import Aside from "./components/Aside";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import StarryBackground from "./StarryBackground";
import { initializeGTM } from "./gtm";

// Inicializa o GTM
initializeGTM();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StarryBackground />
        <Aside />
        <App />
    </React.StrictMode>
);

// Envia métricas de performance para o GTM
reportWebVitals((metric) => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: "web-vitals",
            metric: {
                name: metric.name,
                value: metric.value,
                id: metric.id,
            },
        });
    }
});
