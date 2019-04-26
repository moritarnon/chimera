import React, {useContext, useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, Route, Switch, withRouter} from 'react-router-dom'
import {HomePage} from "../pages/home/HomePage";
import {TopicsPage} from "../pages/topics/TopicsPage";
import {LOGGED_IN, NOT_LOGGED_IN, UserContext} from "../user/UserProvider";
import {LoginPage} from "../pages/login/LoginPage";
import {ForumPage} from "../pages/forum/ForumPage";

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

                        {/*TODO remove notLoggedIn for forum pages when logging works*/}
                        <MenuDropdown title="Forum" id="forum-nav-dropdown" notLoggedIn>
                            <MenuLink dropdown to="/topics" notLoggedIn>Forum</MenuLink>
                            <MenuLink dropdown to="/forum/My Forum" notLoggedIn>My Forum</MenuLink>
                        </MenuDropdown>
                    </Nav>

                    <Nav activeKey={location.pathname}>
                        <MenuLink to="/login" notLoggedIn>Login</MenuLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/topics' component={TopicsPage}/>
                <Route path='/forum/:id' component={ForumPage}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        </React.Fragment>
    );
});

const MenuDropdown = withRouter(({children, title, id, location, auth = LOGGED_IN, notLoggedIn = false}) => {

    const userContext = useContext(UserContext);

    if (notLoggedIn)
        auth = NOT_LOGGED_IN;

    const isActive = children.some(ch => {
        return ch.props.to === location.pathname;
    });

    return (
        userContext.resolveAuth(auth) ?
            <NavDropdown title={title} id={id} active={isActive}>
                {children}
            </NavDropdown> :
            null
    );
});

const MenuLink = ({to, eventKey, children, auth = LOGGED_IN, dropdown = false, notLoggedIn = false}) => {

    const userContext = useContext(UserContext);

    if (notLoggedIn)
        auth = NOT_LOGGED_IN;

    const MainComponent = dropdown ? NavDropdown.Item : Nav.Link;

    return (
        userContext.resolveAuth(auth) ?
            <MainComponent as={Link} to={to} eventKey={to}>
                {children}
                </MainComponent> :
            null
    );
}