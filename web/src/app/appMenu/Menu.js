import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles/index";
import {withRouter} from "react-router-dom";
import clsx from "clsx";

const styles = theme => ({
    menuItem: {},
    dropdownLabel: {
        fontWeight: "bold"
    },
    nested0: {},
    nested1: {
        paddingLeft: theme.spacing.unit * 4
    },
    nested2: {
        paddingLeft: theme.spacing.unit * 6
    },
    nested3: {
        paddingLeft: theme.spacing.unit * 8
    }
});

const MenuContext = React.createContext({dense: false, level: 0});

export const Menu = props => {
    return (
        <MenuContext.Provider value={{dense: props.dense, level: 0}}>
            <List component="nav" dense={props.dense} key={0}>
                {props.children}
            </List>
        </MenuContext.Provider>
    );
};
Menu.propTypes = {
    dense: PropTypes.bool
};

export const MenuLink = withRouter(withStyles(styles)(
    ({classes, primary, secondary, children, to, history, location, additionalClass}) => {

    const menuContext = React.useContext(MenuContext);

    const onClick = () => {
        history.push(to);
    };

    return (
        <ListItem
            button
            selected={to === location.pathname}
            onClick={onClick}
            dense={menuContext.dense}
            className={
                clsx(additionalClass, classes["nested" + menuContext.level.toString()])
            }>
            {children || <ListItemText primary={primary} secondary={secondary}/>}
        </ListItem>
    );
}));
MenuLink.propTypes = {
    to: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    additionalClass: PropTypes.string
};

export const MenuDropdown = withStyles(styles)(props => {

    const {classes, primary, secondary, children, content} = props;

    const [open, setOpen] = React.useState(props.open);
    const menuContext = React.useContext(MenuContext);

    const onClick = () => {
        setOpen(!open);
    };


    //TODO solve fontWeight Differently

    return [
        <ListItem
            button
            onClick={onClick}
            key={0}
            dense={menuContext.dense}
            className={classes["nested" + menuContext.level.toString()]}>
            {content || (
                <ListItemText
                    className={classes.dropdownLabel}
                    primaryTypographyProps={{
                        variant: "h6",
                        style: {fontWeight: "bold"}
                    }}
                    primary={primary}
                    secondary={secondary}
                />
            )}
            {open ? (
                <ExpandLess color="secondary"/>
            ) : (
                <ExpandMore color="secondary"/>
            )}
        </ListItem>,
        <MenuContext.Provider value={{dense: menuContext.dense, level: menuContext.level + 1}} key={1}>
            <Collapse in={open} timeout="auto">
                <List component="div" disablePadding dense={menuContext.dense}>
                    {children}
                </List>
            </Collapse>
        </MenuContext.Provider>
    ];
});
MenuDropdown.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    content: PropTypes.node
};
