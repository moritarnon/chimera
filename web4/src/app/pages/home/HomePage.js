import React from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

export const HomePage = () => {
    return (
        <ButtonToolbar>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
        </ButtonToolbar>
    );
}
