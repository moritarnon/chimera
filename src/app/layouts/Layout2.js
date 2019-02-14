import React, { useState } from "reactn";
import { withStyles } from "@material-ui/core/styles";
import { menuWidth, menuMaxWidth } from "../themes/themeVariables";
import AppMenu from "../appMenu/AppMenu";
import AppContent from "../appContent/AppContent";
import { Drawer, Paper } from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    display: "flex",
    height: "100%"
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
    height: "100%",
    textAlign: "center"
  },
  drawerPaper: {
    width: menuWidth
  },
  content: {
    height: "100%",
    padding: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 2,
    flexGrow: 1
  }
});

const Layout2 = withStyles(styles, { withTheme: true })(props => {
  const { classes } = props;

  const small = useMediaQuery(props.theme.breakpoints.down("xs"));
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/*TODO on Button only*/}
      {small && !open && (
        <div className={classes.openMenuButton} onClick={onOpen}>
          {<ExpandMoreIcon color="secondary" />}
        </div>
      )}
      {small ? (
        <Drawer
          anchor="top"
          variant="temporary"
          open={open}
          onClose={onClose}
          onOpen={onOpen}
        >
          <AppMenu />
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
          <AppMenu dense />
        </Drawer>
      )}
      <Paper className={classes.content}>
        <AppContent />
      </Paper>
    </div>
  );
});
export default Layout2;
