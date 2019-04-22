import React, {useContext} from 'react';
import emptyAvatar from '../../../assets/round_person_black_48dp.png';
import {commentData} from "./commentData";
import {Button, ButtonGroup} from "react-bootstrap";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import clsx from "clsx";
import {SmallHeader} from "../../components/layout/SmallHeader";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const tempStyle = {
    paper: {
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },
    bar: {
        marginLeft: '-15px',
        marginRight: '-15px'
    }
}

export const ForumPage = () => {

    const breakpoints = useContext(BreakpointsContext);
    const large = breakpoints.up('md');

    return (
        <div style={large ? tempStyle.paper : null } className="h-auto pb-3">

            <SmallHeader titleDesc="Forum Topic" title="Donec Ipsum">
                <ButtonGroup>
                    {
                        large ?
                            <Button>Nový příspěvek</Button> :
                            <Button><FontAwesomeIcon icon={faPlus} /></Button>
                    }
                </ButtonGroup>
            </SmallHeader>

            <div className="px-3">
                {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}
            </div>

        </div>
    );
};

const ForumComment = ({author, text, time, avatar, children = [], isChild = false}) => {

    const breakpoints = useContext(BreakpointsContext);
    const isSm = breakpoints.down('sm');

    return (
        <div className={clsx("d-flex mt-3", isSm && "flex-column")}>

            {/*image*/}
            <div className="pt-1">
                <img width={isSm ? 45 : 55} height={isSm ? 45 : 55} src={avatar || emptyAvatar} alt="Avatar"
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
