import React, {useContext} from 'react';
import emptyAvatar from '../../../assets/round_person_black_48dp.png';
import {commentData} from "./commentData";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import clsx from "clsx";
import {LargeContent} from "../../layout/LargeContent";
import {Button, ButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //TODO use library
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from "../../components/tooltip/Tooltip";
import {Header} from "../../layout/Header";

export const ForumPage = () => {

    const breakpoints = useContext(BreakpointsContext);
    const mdUp = breakpoints.up('md');

    const onNewComment = () => {
        alert("No, nothing works...");
    }

    return (
        <React.Fragment>

            <Header noMargin title="Donec ipsum">
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

            <LargeContent>
                <div>
                    {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}
                </div>
            </LargeContent>

        </React.Fragment>
    );
};

const ForumComment = ({author, text, time, avatar, children = [], isChild = false}) => {

    const breakpoints = useContext(BreakpointsContext);
    const smDown = breakpoints.down('sm');

    return (
        <div className={clsx("d-flex mt-3", smDown && "flex-column")}>

            {/*image*/}
            <div className="pt-1">
                <img width={smDown ? 45 : 55} height={smDown ? 45 : 55} src={avatar || emptyAvatar} alt="Avatar"
                     className="rounded-circle"/>
            </div>

            {/*text with title*/}
            <div className="pl-md-3 w-100">

                <h6 className="mb-2">
                    {author}
                    <small className="pl-2">{time}</small>
                </h6>

                <div style={{whiteSpace: 'pre-wrap'}} className="w-100">
                    {text}
                </div>

                {/*children*/}
                <div>
                    {children.map(
                        (comment, i) => <ForumComment key={i} {...comment} isChild/>
                    )}
                </div>

            </div>


        </div>
    );
}
