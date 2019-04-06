import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import ForumComment from "../../components/forum/ForumComment";
import Forum from "../../components/forum/Forum";


const styles = theme => ({
    root: {}
});

const ForumPage = withStyles(styles)(({classes}) => {

    //TODO fetch data, store them and so on

    return (
        <div className={classes.root}>
            <Forum />
        </div>
    );
});
export default ForumPage;