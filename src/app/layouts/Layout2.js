import React, {useState} from 'reactn';
import {withStyles} from "@material-ui/core/styles/index";
import MenuIcon from '@material-ui/icons/Menu';
import {maxZIndex, menuWidth} from "../themes/themeVariables";
import AppMenu from "../appMenu/AppMenu";
import AppContent from "../appContent/AppContent";
import {Paper, Drawer, IconButton} from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    drawer: {
        width: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden'
    },
    drawerOpen: {
        width: menuWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerPaper: {
        paddingTop: theme.spacing.unit * 4,
        width: menuWidth
    },
    menuButton: {
        position: 'fixed',
        zIndex: maxZIndex,
        opacity: 0.5,
        margin: theme.spacing.unit * 0.5,
        left: 0,
        transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButtonOpen: {
        left: menuWidth - theme.spacing.unit * 7,
        transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        height: '100%',
        //paddingLeft: theme.spacing.unit * 4,
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 5,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});

//TODO transparent button in left top
//optional anchor


const Layout2 = withStyles(styles)((props) => {

        const [open, setOpen] = useState(true);
        const {classes} = props;

        const onOpenClose = () => {
            setOpen(!open);
        }


        return (
            <div className={classes.root}>
                <IconButton aria-label="Menu" className={clsx(classes.menuButton, open && classes.menuButtonOpen)}
                     onClick={onOpenClose}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={open}
                        className={clsx(classes.drawer, open && classes.drawerOpen)}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="persistent"
                        onClose={onOpenClose}>
                    <AppMenu/>
                </Drawer>
                <Paper className={clsx(classes.content, open && classes.contentShift)}>
                    <AppContent/>
                </Paper>
            </div>
        );
});
export default Layout2;