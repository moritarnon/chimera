import React, {useState} from "reactn";
import {withStyles} from "@material-ui/core/styles";
import {menuMaxWidth, menuWidth} from "../themes/themeVariables";
import AppMenu from "../appMenu/AppMenu";
import AppContent from "../appContent/AppContent";
import {Drawer, SwipeableDrawer, IconButton, Paper} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import {Fragment} from "react";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    logo: {
        width: menuWidth,
        alignSelf: 'stretch',
        borderRadius: 0,
        ...theme.mixins.gutters()
    },
    logoLabel: {
        justifyContent: 'flex-start',
        textTransform: 'none'
    },
    drawer: {
        width: menuWidth,
        maxWidth: menuMaxWidth,
    },
    drawerPaper: {
        width: menuWidth,
    },
    mobileDrawer: {},
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1  //takes up remaining width
    },
    contentArea: {
        flexGrow: 1, //takes up remaining height
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            width: '90%',
            margin: 'auto',
        },
        [theme.breakpoints.down('xs')]: {}
    },
    toolbar: theme.mixins.toolbar
});

const appMenu = <AppMenu dense/>;

const Layout3 = withRouter(withStyles(styles/*, {withTheme: true}*/)(props => {
    const {classes, history} = props;

//    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const navigateHome = () => {
        history.push("/");
    }

    return (
        <Fragment>
            <AppBar position="fixed" className={classes.appBar} color="default">
                <Toolbar disableGutters>
                    <Hidden smUp implementation="css">
                        <IconButton className={classes.openMenuButton} onClick={onOpen}>
                            {<MenuIcon color="secondary"/>}
                        </IconButton>
                    </Hidden>
                    <Button className={classes.logo} classes={{label: classes.logoLabel}}
                            onClick={navigateHome}>
                        <Typography variant="h6">
                            Chimera
                        </Typography>
                    </Button>
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
                        <div className={classes.toolbar}/>
                        {appMenu}
                    </Drawer>
                </Hidden>

                <Hidden smUp implementation="css">
                    <SwipeableDrawer
                        ModalProps={{keepMounted: true}}
                        className={clsx(classes.drawer, classes.mobileDrawer)}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        anchor="left"
                        variant="temporary"
                        open={open}
                        onClose={onClose}>
                        {appMenu}
                    </SwipeableDrawer>
                </Hidden>

                <div className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Paper square className={classes.contentArea}>
                        <AppContent/>
                    </Paper>
                </div>
            </div>

        </Fragment>
    );
}));
export default Layout3;