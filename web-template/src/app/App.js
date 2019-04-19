import React from 'react';
import {AppContent} from "./appContent/AppContent";
import {BrowserRouter} from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <AppContent/>
            </BrowserRouter>
        </div>
    );
}
