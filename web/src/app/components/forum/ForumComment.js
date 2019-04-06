import React, {Fragment} from "react";
//import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
//import {forumMock} from "./forumMock";


const styles = theme => ({
    root: {}
});

/*
post: {

}
*/

const dummyPost = {
    author: "Mister Author",
    created: "12.12.2016 16:12:34"
}

const ForumComment = withStyles(styles)(({ classes, post = dummyPost }) => {


    return (
        <ListItem className={classes.root} alignItems="flex-start">
            <InfoBar post={post} />
        </ListItem>
    );
});
export default ForumComment;

const InfoBar = ({classes, post}) => {
    return (
        <Fragment>
            <Typography>{post.author}</Typography>
            <Typography>{post.created}</Typography>
        </Fragment>
    );
}