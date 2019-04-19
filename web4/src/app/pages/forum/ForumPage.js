import React from 'react';
import {Jumbotron, Button} from "react-bootstrap";

export const ForumPage = () => {
    return (
        <Jumbotron>
            <h1>There will be forum!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Yes</Button>
            </p>
        </Jumbotron>
    );
}
