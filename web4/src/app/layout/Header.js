import React from 'react';
import clsx from 'clsx';
import {Col, Row} from "react-bootstrap";

export const Header = ({children, title, noMargin = false}) => {

    return (
        <Row noGutters className={
            clsx(
                "w-100 px-1",
                !noMargin && "mb-3"
            )}>
            <Col xs={12} sm={{span: true}}>
                <h4 className={
                    clsx(
                        "mb-0 text-muted text-center",
                        children && "text-sm-left"
                    )}>
                    {title}
                </h4>
            </Col>
            {
                children ?
                    <Col xs={12} sm="auto" className="pt-2 pt-sm-0 text-center">
                        {children}
                    </Col> : null
            }
        </Row>
    );
}
