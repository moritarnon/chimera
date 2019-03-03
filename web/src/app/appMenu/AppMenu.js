import React from "reactn";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/es/Divider/Divider";
import {Menu, MenuDropdown, MenuLink} from "./Menu";

export const AppMenu = ({dense = false}) => {
    return (
        <Menu dense={dense}>
            <MenuLink to="/" primary="Home"  />

            <Divider />

            <MenuLink to="/forum" primary="Fórum" />

            <MenuDropdown primary="Pages" secondary="All of them">
                <MenuLink to="/page1"
                          primary="Page 1" secondary="Testing material UI List"/>
                <MenuLink to="/page2" primary="Page 2"
                          secondary="Testing custom made menu"/>

                <MenuDropdown primary="Other pages">
                    <MenuLink to="/page3" primary="Page 3"/>
                    <MenuLink to="/page4" primary="Page 4"/>
                </MenuDropdown>
            </MenuDropdown>
        </Menu>
    );
};
AppMenu.propTypes = {
    dense: PropTypes.bool
};
export default AppMenu;

