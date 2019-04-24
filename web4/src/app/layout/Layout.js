import React, {useContext, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Route, Switch, withRouter} from 'react-router-dom'
import {HomePage} from "../pages/home/HomePage";
import {ForumPage} from "../pages/forum/ForumPage";
import {LOGGED_IN, NOT_LOGGED_IN, UserContext} from "../user/UserProvider";
import {LoginPage} from "../pages/login/LoginPage";

export const Layout = withRouter(({location}) => {

    const [expanded, setExpanded] = useState(false);

    const onNavbarSelect = () => {
        setExpanded(false);
    }

    const onNavbarToggle = (expanded) => {
        setExpanded(expanded);
    }

    return (
        <React.Fragment>

            <Navbar bg="dark" variant="dark" expand="md"
                    onSelect={onNavbarSelect}
                    onToggle={onNavbarToggle}
                    expanded={expanded}>

                <Navbar.Brand as={Link} to="/">Chimera</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav activeKey={location.pathname}>
                        <MenuLink to="/">Home</MenuLink>
                        {/*TODO remove notLoggedIn for forum when logging works*/}
                        <MenuLink to="/forum" notLoggedIn>Forum</MenuLink>
                    </Nav>

                    <Nav activeKey={location.pathname}>
                        <MenuLink to="/login" notLoggedIn>Login</MenuLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <Container className="py-3 py-sm-2">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/forum' component={ForumPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                </Switch>
            </Container>
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