import React, {useState} from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, DropdownItem, NavbarToggler, Collapse
} from "reactstrap";
import {AppContent} from "../appContent/AppContent";
import {Link} from 'react-router-dom'

export const Layout1 = () => {

    const [open, setOpen] = useState(false);

    const onToggle = () => {
        setOpen(!open);
    }

    return (
        <React.Fragment>
            <Navbar expand="md" light>
                <NavbarBrand to="/" tag={Link}>Chimera</NavbarBrand>

                <NavbarToggler onClick={this.onToggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/components/" tag={Link}>Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>

            </Navbar>
            <Container>
                <AppContent/>
            </Container>
        </React.Fragment>
    );
}