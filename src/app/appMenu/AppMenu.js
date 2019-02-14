import React, {useState} from 'reactn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles/index";
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = theme => ({
    menuItem: {
    },
    nested0: {
    },
    nested1: {
        paddingLeft: theme.spacing.unit * 4,
    },
    nested2: {
        paddingLeft: theme.spacing.unit * 6,
    },
    nested3: {
        paddingLeft: theme.spacing.unit * 8,
    },
});

export const AppMenu = (props) => {

    return (
        <List component="nav">
            <MenuLink to="/" primary="Home" />

            <Divider />

            <MenuDropdown primary="Pages" secondary="All of them">
                <MenuLink to="/page1" primary="Page 1" secondary="Testing material UI List" />
                <MenuLink to="/page2" primary="Page 2"  secondary="Testing custom made menu" />

                <MenuDropdown primary="Other pages">
                    <MenuLink to="/page3" primary="Page 3" />
                    <MenuLink to="/page4" primary="Page 4" />
                </MenuDropdown>

            </MenuDropdown>
        </List>
    );
};
export default AppMenu;

export const MenuLink = withStyles(styles)((props) => {
    const itemLink = props => <Link {...props} />;
    const {classes, level, primary, secondary, children, to} = props;
    return (
        <ListItem button className={ classes['nested' + level.toString()] + ' ' + classes['menuItem']}
                  component={itemLink} to={to}>
            {children || <ListItemText primary={primary} secondary={secondary} />}
        </ListItem>
    );
});
MenuLink.propTypes = {
    to: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    level: PropTypes.number
};
MenuLink.defaultProps = {
    level: 0
};

export const MenuDropdown = withStyles(styles)((props) => {

    const [open, setOpen] = useState(props.open);

    const onClick = () => {
        setOpen(!open)
    };

    const {classes, level, primary, secondary, children, content} = props;

    const adjustedLevel = (children) => {
        return children.map(
            (ch, i) => React.cloneElement(ch, {...ch.props, level: level +1, key: i})
        );
    };

    return (
        [
            <ListItem button onClick={onClick} key={1}
                      className={classes['nested' + level.toString()] + ' ' + classes['menuItem']}>
                {content || <ListItemText primary={primary} secondary={secondary} />}
                {open ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
            </ListItem>,
            <Collapse in={open} timeout="auto" key={2}>
                <List component="div" disablePadding>
                    {adjustedLevel(children)}
                </List>
            </Collapse>
        ]
    );
});
MenuDropdown.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    content: PropTypes.node,
    level: PropTypes.number
};
MenuDropdown.defaultProps = {
    level: 0
};