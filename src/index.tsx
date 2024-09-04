import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Private from "./pages/private/Private";
import Publique from "./pages/Publique";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route
                path="/publique"
                element={<Publique />}
            />
            <Route
                path="/"
                element={<App />}
            />
            <Route path="/private">
                <Route
                    path=""
                    element={<Private />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
);
