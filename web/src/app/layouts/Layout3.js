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
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import clsx from "clsx";
import {Fragment} from "react";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    appBar: {
//        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up('sm')]: { //only mobile
            width: `calc(100% - ${menuWidth}px)`,
            marginLeft: menuWidth,
        }
    },
    toolbarMain: {
        display: 'flex',
        flexGrow: 1,  //takes up remaining width
        alignSelf: 'stretch',
        alignItems: 'center',
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'center',
        }
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
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            width: '90%',
            margin: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
        }
    },
    toolbar: theme.mixins.toolbar
});



const Layout3 = withRouter(withStyles(styles, {withTheme: true})(props => {
    const {classes, theme, history} = props;

    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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

    const appMenu = <AppMenu dense firstItemClass={classes.toolbar} />;

    return (
        <Fragment>
            <div className={classes.root}>

                <AppBar position="fixed" className={classes.appBar} color="default">
                    <Toolbar disableGutters>
                        <Hidden smUp implementation="css">
                            <IconButton className={classes.openMenuButton} onClick={onOpen}>
                                {<MenuIcon color="secondary"/>}
                            </IconButton>
                        </Hidden>
                        <div className={classes.toolbarMain} onClick={navigateHome}>
                            <Typography variant="h6" align={isMobile ? 'inherit' : 'center'}>
                                Chimera
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>

                <Hidden only={'xs'} implementation="css">
                    <Drawer
                        open={true}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="persistent">
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
}));
export default Layout3;