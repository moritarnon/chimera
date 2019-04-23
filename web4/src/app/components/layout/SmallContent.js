import React from 'react';
import clsx from 'clsx';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const SmallContent = ({children, withPaper = false}) => {

    return (
        <Row noGutters>
            <Col sm={{offset: 1, span: 10}} md={{offset: 2, span: 8}} className={clsx(withPaper && "paper")}>
                {children}
            </Col>
        </Row>
    );
}