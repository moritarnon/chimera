import React from 'react';
import avatar from '../../../assets/BHAAL03S_sq.png';
import {commentData} from "./commentData";
import clsx from "clsx";
import {Card} from "react-bootstrap";

export const ForumPage = () => {

    return (
        <React.Fragment>

                <Card.Header>Forum</Card.Header>
                <div>

                    <h5 className="mt-3">Donec ipsum.</h5>

                    {commentData.map((comment, i) => <ForumComment key={i} {...comment} />)}

                </div>

        </React.Fragment>
    );
};

const ForumComment = ({author, text, time, children = [], isChild = false}) => {
    return (
        <div className={clsx('d-flex p-1  mt-3', isChild && 'border-left border-light')}>
            <div className="pt-1">
                <img width="55" height="55" src={avatar} alt="Arnold Smrtka avatar"
                     className="rounded-circle"/>
            </div>
            <div style={{whiteSpace: 'pre-wrap'}} className="pl-3 w-100">
                <h6 style={{whiteSpace: 'nowrap'}} className="text-nowrap mb-2">
                    {author}
                    <small className="pl-2">{time}</small>
                </h6>
                {text}

                <div>
                    {children.map(
                        (comment, i) => <ForumComment key={i} {...comment} isChild/>
                    )}
                </div>
            </div>
        </div>


    );
}
