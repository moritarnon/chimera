import React, {useContext, useState} from 'react';
import {commentData} from "./commentData";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {ForumComment} from "./ForumComment";
import {Button, ButtonGroup, Collapse, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Header} from "../../layout/Header";
import {NewCommentForm} from "./NewCommentForm";

export const Forum = ({name}) => {

    const [open, setOpen] = useState(false);

    const breakpoints = useContext(BreakpointsContext);
    const xs = breakpoints.eq('xs');

    const onNewComment = () => {
        setOpen(!open);
    }

    return (
        <React.Fragment>

            <Header title={name}>
                <ButtonGroup vertical={xs} size={xs && 'sm'}>
                    <Button onClick={onNewComment}>
                        <span className="pr-2"><FontAwesomeIcon icon="plus" /></span>
                        Nový příspěvek
                    </Button>
                </ButtonGroup>
            </Header>


            <Collapse in={open}>
                <div>
                    <NewCommentForm />
                </div>
            </Collapse>

            <Row noGutters>
                {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}
            </Row>

        </React.Fragment>
    );
};