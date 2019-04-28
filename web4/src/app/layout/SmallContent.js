import React from 'react';
import {Row, Col} from "react-bootstrap";

export const SmallContent = ({children}) => {

    return (
        <Row className="justify-content-center">
            <Col sm="9" lg="8">
                {children}
            </Col>
        </Row>
    );
}