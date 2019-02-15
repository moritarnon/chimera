import React, {useState} from "reactn";
import {withStyles} from "@material-ui/core/styles";
import {menuWidth, menuMaxWidth} from "../themes/themeVariables";
import AppMenu from "../appMenu/AppMenu";
import AppContent from "../appContent/AppContent";
import {Drawer, Paper, IconButton} from "@material-ui/core";
import {unstable_useMediaQuery as useMediaQuery} from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

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
        flexGrow: 1
    },
    contentSmall: {
        paddingTop: theme.spacing.unit * 7,
        paddingLeft: theme.spacing.unit * 3
    }
});

const Layout2 = withStyles(styles, {withTheme: true})(props => {
    const {classes} = props;

    const small = useMediaQuery(props.theme.breakpoints.down("xs"));
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //TODO use
    // <Hidden smUp implementation="css">

    return (
        <div className={classes.root}>
            {/*TODO on Button only*/}
            {small && !open && (
                <IconButton className={classes.openMenuButton} onClick={onOpen}>
                    {<MenuIcon color="secondary"/>}
                </IconButton>
            )}
            {small ? (
                <Drawer
                    className={classes.mobileDrawer}
                    classes={{
                        paper: classes.mobileDrawer
                    }}
                    anchor="left"
                    variant="temporary"
                    open={open}
                    onClose={onClose}
                    onOpen={onOpen}
                >
                    <AppMenu dense/>
                </Drawer>
            ) : (
                <Drawer
                    open={true}
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="persistent"
                >
                    <AppMenu dense/>
                </Drawer>
            )}
            <Paper className={clsx(classes.content, small && classes.contentSmall)}>
                <AppContent/>
            </Paper>
        </div>
    );
});
export default Layout2;
