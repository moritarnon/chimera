import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const tempStyle = {
    paper: {
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    }
}

export const SmallContent = ({children, withPaper = false}) => {
    return (
        <Container className="px-0">
            <Row noGutters>
                <Col sm={{offset: 1, span: 10}} md={{offset: 2, span: 8}} style={withPaper ? tempStyle.paper : null}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}