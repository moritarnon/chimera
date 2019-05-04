import React, {useContext} from 'react';
import clsx from "clsx";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import emptyAvatar from '../../../assets/round_person_black_48dp.png';
import {Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

export const ForumComment = ({commentData, isChild = false, onRequestAnswer}) => {

    const {author, text, time, avatar, children} = commentData;

    const breakpoints = useContext(BreakpointsContext);
    const smDown = breakpoints.down('sm');

    const onAnswer = () => {
        onRequestAnswer(commentData);
    }

    return (
        <div className={clsx("d-flex mt-3", smDown && "flex-column")}>

            {/*image*/}
            <div className="pt-1">
                <img width={smDown ? 45 : 55} height={smDown ? 45 : 55} src={avatar || emptyAvatar} alt="Avatar"
                     className="rounded-circle"/>
            </div>

            {/*text with title; children*/}
            <div className="pl-md-3 w-100">

                <h6 className="mb-2">
                    {author}
                    <small className="pl-2">{time}</small>
                </h6>

                <div style={{whiteSpace: 'pre-wrap'}} className="w-100">
                    {text}
                </div>

                <ButtonToolbar className="justify-content-end">
                    <ButtonGroup>
                        <Button size="sm" variant="link" onClick={onAnswer}>
                            <small>Odpovědět</small>
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>

                {/*children*/}
                <div>
                    {children && children.map(
                        (comment, i) =>
                            <ForumComment key={i} commentData={comment} isChild
                                          onRequestAnswer={onRequestAnswer} />
                    )}
                </div>

            </div>


        </div>
    );
}
