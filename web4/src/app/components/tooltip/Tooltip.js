import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import * as TooltipRB from 'react-bootstrap/Tooltip'
import {generateId} from "../generateId/generateId";

export const Tooltip = ({text, children}) => {

    const id = generateId();

    return (
        <OverlayTrigger placement="auto"
                        overlay={
                            <TooltipRB id={id}>
                                {text}
                            </TooltipRB>
                        }>
            {children}
        </OverlayTrigger>
    );
};