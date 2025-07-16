import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
const root = document.getElementById('root');
import { Provider } from "react-redux";
import { store } from "./components/StageManagement/store";

createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
