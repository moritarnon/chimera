import React from 'react';
import {Forum} from "./Forum";

export const ForumPage = ({match}) => {

    return (
        <React.Fragment>
            <Forum name={match.params.name} />
        </React.Fragment>
    );
};
