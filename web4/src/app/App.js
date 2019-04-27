import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Layout} from "./layout/Layout";
import {UserProvider} from "./user/UserProvider";
import {BreakpointsProvider} from "./components/layout/BreakpointsProvider";

import "./icons/initIconLibrary";
import './App.scss';

export const App = () => {
    return (
        <div className="App">
            <BreakpointsProvider>
                <UserProvider>
                    <BrowserRouter>
                        <Layout />
                    </BrowserRouter>
                </UserProvider>
            </BreakpointsProvider>
        </div>
    );
}
