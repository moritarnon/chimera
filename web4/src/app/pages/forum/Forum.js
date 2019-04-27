import React, {useContext} from 'react';
import {commentData} from "./commentData";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {ForumComment} from "./ForumComment";
import {Button, ButtonGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Header} from "../../layout/Header";

export const Forum = ({name}) => {

    const breakpoints = useContext(BreakpointsContext);
    const xs = breakpoints.eq('xs');

    const onNewComment = () => {
        alert("No, nothing works...");
    }

    return (
        <React.Fragment>

            <Header noMargin title={name}>
                <ButtonGroup vertical={xs} size={xs && 'sm'}>
                    <Button onClick={onNewComment}>
                        <span className="pr-2"><FontAwesomeIcon icon="plus" /></span>
                        Nový příspěvek
                    </Button>
                </ButtonGroup>
            </Header>

            <Row noGutters>
                {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}
            </Row>

        </React.Fragment>
    );
};