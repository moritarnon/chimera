import React from 'react';
import {Row, Col} from "react-bootstrap";

export const SmallContent = ({children}) => {
    return (
        <Row>
            <Col sm={{offset: 1, span: 10}} md={{offset: 2, span: 8}}>
                {children}
            </Col>
        </Row>
    );
}