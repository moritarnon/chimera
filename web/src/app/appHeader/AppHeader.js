import React from "reactn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const AppHeader = (props) => {
    return (
        <AppBar {...props}>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Chimera
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;
