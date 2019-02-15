import React, {useState} from "reactn";
import {withStyles} from "@material-ui/core/styles";
import {menuMaxWidth, menuWidth} from "../themes/themeVariables";
import AppMenu from "../appMenu/AppMenu";
import AppContent from "../appContent/AppContent";
import {Drawer, IconButton, Paper} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
    root: {
        display: "flex",
        height: "100%"
    },
    mobileDrawer: {
        width: menuWidth,
        maxWidth: menuMaxWidth
    },
    drawer: {
        width: menuWidth,
        maxWidth: menuMaxWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden"
    },
    openMenuButton: {
        position: "fixed",
        margin: theme.spacing.unit
    },
    drawerPaper: {
        width: menuWidth
    },
    content: {
        height: "100%",
        padding: theme.spacing.unit,
        paddingTop: theme.spacing.unit * 2,
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing.unit * 7,
            paddingLeft: theme.spacing.unit * 3
        }
    }
});

const Layout2 = withStyles(styles)(props => {
    const {classes} = props;

    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>

            <Hidden smUp implementation="css">
                <IconButton className={classes.openMenuButton} onClick={onOpen}>
                    {<MenuIcon color="secondary"/>}
                </IconButton>

                <Drawer
                    ModalProps={{ keepMounted: true }}
                    className={classes.mobileDrawer}
                    classes={{
                        paper: classes.mobileDrawer
                    }}
                    anchor="left"
                    variant="temporary"
                    open={open}
                    onClose={onClose}>
                    <AppMenu dense/>
                </Drawer>
            </Hidden>

            <Hidden only={'xs'} implementation="css">>
                <Drawer
                    open={true}
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="persistent">
                    <AppMenu dense/>
                </Drawer>
            </Hidden>

            <Paper className={classes.content}>
                <AppContent/>
            </Paper>
        </div>
    );
});
export default Layout2;
