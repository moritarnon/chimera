import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home} from "../pages/home/Home";

export const AppContent = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    );
}
