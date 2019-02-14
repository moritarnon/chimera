import React, { useState } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import * as ReactDOM from "react-dom";

const addKeys = (children) => {
    return children.map((child, i) => React.cloneElement(child, {...child.props, key: i}))
}

const OldMenu = () => {

    return (
        <div className="OldMenu">
            <ul>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/page1">Page 1</MenuItem>
                <MenuItem to="/page2">Page 2</MenuItem>
                <MenuDropdown  title="Pages">
                    <MenuItem to="/page1">Page 1</MenuItem>
                    <MenuItem to="/page2">Page 2</MenuItem>
                    <MenuDropdown  title="Pages">
                        <MenuItem to="/page1">Page 1</MenuItem>
                        <MenuItem to="/page2">Page 2</MenuItem>
                    </MenuDropdown>
                </MenuDropdown>
            </ul>
        </div>
    );
}
export default OldMenu;

const MenuItem = (props) => {
    return (
        <li>
            <Link to={props.to}>{props.children}</Link>
        </li>
    );
}
MenuItem.propTypes = {
    to: PropTypes.string
}

const MenuDropdown = (props, ) => {

    const [open, setOpen] = useState(false);
    const [contentHeight, setContentheight] = useState(0);


    let collapsible;
    let dropdown;


    const onClick = () => {
        calculateCollapsibleHeight();
        const lastOpen = open;
        setOpen(!open);
        const lastDropdown = dropdown;

        setTimeout(
            () => {
                if (!lastOpen) {
                    lastDropdown.style = {height: 'auto'};
                }
            },
            300
        );
    }

    const calculateCollapsibleHeight = () => {
        const node = ReactDOM.findDOMNode(collapsible);

        if (node) {
            setContentheight(node.clientHeight);
            console.log(props.title, node.clientHeight, node);
        }
    }

    return (
        [
            <li className="MenuDropdown-toggle" key={0}>
                <div className="toggleDropdown" onClick={onClick}>
                    <span>{props.title}</span>
                    &lt;openclose&gt;
                    {/*<i className={open ? "fa fa-chevron-up" : "fa fa-chevron-down"} />*/}
                </div>
            </li>,
            <div className="MenuDropdown-content" key={1}
                 ref={el => dropdown = el}
                 style={ open ? {height: contentHeight }: {height: 0} }>
                <ul ref={el => collapsible = el}>
                    {addKeys(props.children)}
                </ul>
            </div>
        ]
    );
};
MenuDropdown.propTypes = {
    title: PropTypes.string
}