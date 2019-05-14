import React, {useContext, useState} from 'react';
import {commentData} from "./commentData";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {ForumComment} from "./ForumComment";
import {Button, ButtonGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Header} from "../../layout/Header";
import {NewCommentModal} from "./NewCommentModal";

export const Forum = ({name}) => {

    const [open, setOpen] = useState(false);
    const [parentComment, setParentComment] = useState(false);

    const breakpoints = useContext(BreakpointsContext);
    const xs = breakpoints.eq('xs');

    const onNewComment = () => {
        setParentComment(null);
        setOpen(true);
    }

    const onRequestAnswer = (comment) => {
        setParentComment(comment);
        setOpen(true);
    }

    return (
        <React.Fragment>

            <NewCommentModal handleSubmit={(vals) => {console.log(vals)}} open={open} setOpen={setOpen}
                             parentComment={parentComment}
                             title={parentComment ? 'Odpověď': 'Nový příspěvek'} />

            <Header title={name}>
                <ButtonGroup vertical={xs} size={xs && 'sm'}>
                    <Button onClick={onNewComment}>
                        <span className="pr-2"><FontAwesomeIcon icon="plus" /></span>
                        Nový příspěvek
                    </Button>
                </ButtonGroup>
            </Header>

            <Row noGutters>
                {commentData.map((comment, i) => <ForumComment key={i}
                                                               onRequestAnswer={onRequestAnswer}
                                                               commentData={comment} />)}
            </Row>

        </React.Fragment>
    );
};