import React  from 'react';
import {SmallContent} from "../../layout/SmallContent";
import {ManagedForm} from "../../components/form/ManagedForm";
import {Form, Button} from "react-bootstrap";
import {FormButtons} from "../../components/form/FormButtons";

export const NewCommentForm = () => {

    const handleCommentSubmit = (values, valid) => {
        if (valid)
            alert("Ha Ha! You thought that it does something...");
    }

    return (
        <SmallContent>
            <ManagedForm handleSubmit={handleCommentSubmit}>

                <Form.Group controlId="text">
                    <Form.Label>Nový příspěvek</Form.Label>
                    <Form.Control as="textarea" rows="5" required />
                </Form.Group>

                <FormButtons>
                    <Button type="submit">
                        Odeslat
                    </Button>
                    <Button variant="outline-secondary">
                        Cancel
                    </Button>
                </FormButtons>

            </ManagedForm>
        </SmallContent>
    );

}