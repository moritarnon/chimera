import React from "react";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/styles/withStyles";
import ForumComment from "./ForumComment";
//import {forumMock} from "./forumMock";


const styles = theme => ({
    root: {}
});

const Forum = withStyles(styles)(({classes}) => {


    return (
        <Paper className={classes.root}>
            <ForumComment />
        </Paper>
    );
});
export default Forum;