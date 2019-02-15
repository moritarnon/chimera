import React, {useState} from 'reactn';
import {withStyles} from "@material-ui/core/styles/index";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AppMenu from "../appMenu/AppMenu";
import clsx from "clsx";
import AppContent from "../appContent/AppContent";

const drawerWidth = 300;
const drawerPanelWidth = 20;
const drawerContentWidth = 280;

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    drawer: {
    },
    drawerPaper: {
        display: 'flex',
        flexDirection: 'row'
        //backgroundColor: theme.palette.primary.main
    },
    drawerContentOpen: {
        width: drawerContentWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden'
    },
    drawerContentClosed: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 0
    },
    drawerPanel: {
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    },
    closeIconWrapper: {
        //padding: theme.spacing.unit * 0.5
    },
    closeIcon: {
        fontSize: drawerPanelWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerContentWrapper: {
        width: drawerContentWidth
    },
    content: {
        flexGrow: 1,
        whiteSpace: 'nowrap',
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing.unit * 4,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerPanelWidth,
    },
    contentShift: {
        whiteSpace: 'normal',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    }
});

const Layout = withStyles(styles)((props) => {

        const [open, setOpen] = useState(true);
        const {classes} = props;

        const onOpenClose = () => {
            setOpen(!open);
        }

        return (
            <div className={classes.root}>
                <Drawer variant="permanent"
                        anchor="left"
                        open={open}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper
                            }}>
                    <div className={clsx(
                        open && classes.drawerContentOpen,
                        !open && classes.drawerContentClosed)
                    }>
                        <div className={classes.drawerContentWrapper}>
                            <AppMenu/>
                        </div>
                    </div>
                    <div className={classes.drawerPanel}
                         onClick={onOpenClose}>
                        <div className={classes.closeIconWrapper}>
                            {open ? <ChevronLeftIcon color="secondary" className={classes.closeIcon} />
                                : <ChevronRightIcon color="secondary" className={classes.closeIcon} />}
                        </div>
                    </div>
                </Drawer>
                <main className={clsx(classes.content, open && classes.contentShift)}>
                    <AppContent/>
                </main>
            </div>
        );
});
export default Layout;