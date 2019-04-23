import React from 'react';
import Card from "react-bootstrap/Card";

export const ForumComment = ({
    author, text
}) => {

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{author}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">11.11.2011</Card.Subtitle>
                    <Card.Text as="div" style={{whiteSpace: 'pre-wrap'}}>
                        {text}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}
