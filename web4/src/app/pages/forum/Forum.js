import React, {useContext} from 'react';
import {commentData} from "./commentData";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {ForumComment} from "./ForumComment";
import {Button, ButtonGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //TODO use library
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from "../../components/tooltip/Tooltip";
import {Header} from "../../layout/Header";
import {LayoutContainer} from "../../layout/LayoutContainer";

export const Forum = ({forumId}) => {

    const breakpoints = useContext(BreakpointsContext);
    const xs = breakpoints.eq('xs');
    const mdUp = breakpoints.up('md');

    const onNewComment = () => {
        alert("No, nothing works...");
    }

    return (
        <LayoutContainer>

            <Header noMargin title="My Forum">
                <ButtonGroup vertical={xs} size={xs && 'sm'}>
                    {
                        mdUp || true ?
                            <Button onClick={onNewComment}>
                                Nový příspěvek
                                <span className="pl-2"><FontAwesomeIcon icon={faPlus} /></span>
                            </Button> :
                            <Tooltip text="Nový příspěvek">
                                <Button onClick={onNewComment}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </Tooltip>
                    }
                </ButtonGroup>
            </Header>

            <Row noGutters>
                {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}
            </Row>

        </LayoutContainer>
    );
};