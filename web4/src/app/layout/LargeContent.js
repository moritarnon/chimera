import React from 'react';
import {Row, Col} from "react-bootstrap";

export const LargeContent = ({children}) => {
    return (
        <Row className="justify-content-center">
            <Col>
                {children}
            </Col>
        </Row>
    );
}