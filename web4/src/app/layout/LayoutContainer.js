import React from 'react';
import {Container} from "react-bootstrap";

export const LayoutContainer = ({children}) => {
    return (
        <Container className="py-sm-3 py-2">
            {children}
        </Container>
    );
}