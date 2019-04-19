import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "../pages/home/Home";

class AppContent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        );
    }
}

export default AppContent;
