import React from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

export const HomePage = () => {
    return (
        <div>
            <h4>Home</h4>
            <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
            </ButtonToolbar>
        </div>
    );
}
