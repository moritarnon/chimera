import React, {useContext} from 'react';
import clsx from "clsx";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import emptyAvatar from '../../../assets/round_person_black_48dp.png';

export const ForumComment = ({author, text, time, avatar, children = [], isChild = false}) => {

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
