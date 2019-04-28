import React, {useContext} from 'react';
import clsx from "clsx";
import {ButtonGroup, ButtonToolbar} from "react-bootstrap";
import {BreakpointsContext} from "../layout/BreakpointsProvider";

export const FormButtons = ({children}) => {

    const breakpoints = useContext(BreakpointsContext);
    const smDown = breakpoints.down('sm');

    return (
        <ButtonToolbar className="justify-content-end">
            <ButtonGroup className={clsx(smDown && "w-100")}>
                {children}
            </ButtonGroup>
        </ButtonToolbar>
    );

}