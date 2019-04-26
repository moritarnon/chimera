import React, {useContext} from 'react';
import clsx from 'clsx';
import {commentData} from "./commentData";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {ForumComment} from "./ForumComment";
import {Button, ButtonGroup, ButtonToolbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //TODO use library
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from "../../components/tooltip/Tooltip";
import {Header} from "../../layout/Header";

export const Forum = ({forumId}) => {

    const breakpoints = useContext(BreakpointsContext);
    const smUp = breakpoints.up('sm');
    const mdUp = breakpoints.up('md');

    const onNewComment = () => {
        alert("No, nothing works...");
    }

    return (
        <React.Fragment>

            <Header noMargin title="My Forum" between>
                <ButtonGroup>
                    {
                        mdUp ?
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

               {/* <ButtonToolbar className={clsx("w-100", smUp ? "justify-content-end" : "justify-content-center")}>
                    <ButtonGroup>
                        {
                            smUp || true ?
                                <Button onClick={onNewComment}>
                                    <span className="pr-2"><FontAwesomeIcon icon={faPlus}/></span>
                                    Nový příspěvek
                                </Button> :
                                <Tooltip text="Nový příspěvek">
                                    <Button onClick={onNewComment}>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </Button>
                                </Tooltip>
                        }
                    </ButtonGroup>
                </ButtonToolbar>*/}
            </Row>

            <Row noGutters>
                <div>
                    {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}
                </div>
            </Row>
        </React.Fragment>
    );

};
