import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Page1 from "../../pages/page1/Page1";
import Page2 from "../../pages/page2/Page2";
import Page3 from "../../pages/page3/Page3";
import Page4 from "../../pages/page4/Page4";
import Home from "../../pages/home/Home";
import {Forum} from "../../pages/forum/Forum";

class AppContent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/page1' component={Page1} />
                <Route path='/page2' component={Page2} />
                <Route path='/page3' component={Page3} />
                <Route path='/page4' component={Page4} />
                <Route path='/forum' component={Forum} />
            </Switch>
        );
    }
}

export default AppContent;
