import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Route, Switch, withRouter} from 'react-router-dom'
import {HomePage} from "../pages/home/HomePage";
import {ForumPage} from "../pages/forum/ForumPage";
import {LOGGED_IN, NOT_LOGGED_IN, UserContext} from "../user/UserProvider";
import {LoginPage} from "../pages/login/LoginPage";
import {SignupPage} from "../pages/signup/SignupPage";

const tempStyle = {
    paper: {
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },
    mw: {
        minWidth: '200px'
    }
}

export const Layout = withRouter(({location}) => {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="md">

                <Navbar.Brand as={Link} to="/">Chimera</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav activeKey={location.pathname}>
                        <MenuLink to="/">Home</MenuLink>
                        {/*TODO remove notLoggedIn*/}
                        <MenuLink to="/forum" notLoggedIn>Forum</MenuLink>
                    </Nav>

                    <Nav activeKey={location.pathname}>
                        <MenuLink to="/login" notLoggedIn>Login</MenuLink>
                        <MenuLink to="/signup" notLoggedIn>Sign Up</MenuLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            {/*style={tempStyle.paper}*/}
            <div className="justify-content-center h-auto pb-3 pt-3">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/forum' component={ForumPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignupPage}/>
                </Switch>
            </div>
        </React.Fragment>
    );
});

const MenuLink = ({to, children, auth = LOGGED_IN, notLoggedIn = false}) => {

    const userContext = useContext(UserContext);

    if (notLoggedIn)
        auth = NOT_LOGGED_IN;

    return (
        userContext.resolveAuth(auth) ?
            <Nav.Link as={Link} to={to} eventKey={to}>{children}</Nav.Link> :
            null
    );
}