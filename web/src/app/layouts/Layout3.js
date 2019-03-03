import React, {useState} from "reactn";
import {withStyles} from "@material-ui/core/styles";
import {menuMaxWidth, menuWidth} from "../themes/themeVariables";
import AppMenu from "../appMenu/AppMenu";
import AppContent from "../appContent/AppContent";
import {Drawer, IconButton, Paper} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import {Fragment} from "react";

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: menuWidth,
        maxWidth: menuMaxWidth,
    },
    drawerPaper: {
        width: menuWidth,
    },
    mobileDrawer: {
    },
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1  //takes up remaining width
    },
    contentPaper: {
        flexGrow: 1, //takes up remaining height
        padding: theme.spacing.unit,
        paddingTop: theme.spacing.unit * 2,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing.unit * 3,
            paddingRight: theme.spacing.unit * 3
        }
    },
    toolbar: theme.mixins.toolbar
});

const appMenu = <AppMenu dense />;

const Layout3 = withStyles(styles)(props => {
    const {classes} = props;

    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <AppBar position="fixed" className={classes.appBar} color="default">
                <Toolbar>
                    <Hidden smUp implementation="css">
                        <IconButton className={classes.openMenuButton} onClick={onOpen}>
                            {<MenuIcon color="secondary"/>}
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" color="inherit">
                        Chimera
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className={classes.root}>

                <Hidden only={'xs'} implementation="css">
                    <Drawer
                        open={true}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="persistent">
                        <div className={classes.toolbar} />
                        {appMenu}
                    </Drawer>
                </Hidden>

                <Hidden smUp implementation="css">
                    <Drawer
                        ModalProps={{ keepMounted: true }}
                        className={clsx(classes.drawer, classes.mobileDrawer)}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        anchor="left"
                        variant="temporary"
                        open={open}
                        onClose={onClose}>
                        {appMenu}
                    </Drawer>
                </Hidden>

                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    <Paper className={classes.contentPaper}>
                        <AppContent/>
                    </Paper>
                </div>
            </div>

        </Fragment>
    );
});
export default Layout3;