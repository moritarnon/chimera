import React from 'react';
import {Col, Row} from "react-bootstrap";
//import Row from 'react-bootstrap/Row'

export const LargeContent = ({children}) => {
    return (
        <Row className="justify-content-center" noGutters>
            <Col>
                {children}
            </Col>
        </Row>
    );
}