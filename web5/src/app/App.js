import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Layout1} from "./layouts/Layout";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout1 />
            </BrowserRouter>
        </div>
    );
}
