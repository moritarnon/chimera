import React from 'react';
import clsx from 'clsx';
import {Row} from "react-bootstrap";

export const Header = ({children, title, noMargin = false, between = false}) => {

    return (
        <Row noGutters className={
            clsx(
                "w-100 py-2 px-1",
                !noMargin && "mb-3",
                between ? "justify-content-between" : "justify-content-center"
            )}>
            <h4 className="mb-0 text-muted">{title}</h4>
            {children}
        </Row>
    );
}
