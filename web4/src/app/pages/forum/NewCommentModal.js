import React from 'react';
import {Modal, Form, Button} from "react-bootstrap";
import {ManagedForm} from "../../components/form/ManagedForm";
import {FormButtons} from "../../components/form/FormButtons";

export const NewCommentModal = ({handleSubmit, open, setOpen, title}) => {

    const onHide = () => {
        setOpen(false);
    }

    return (
        <Modal show={open} onHide={onHide} size="lg">

            <Modal.Header closeButton className="border-bottom-0">
                <Modal.Title className="text-muted">{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="py-0">

                <ManagedForm id="newCommentForm" handleSubmit={handleSubmit}>
                    <Form.Control name="text" as="textarea" rows="5" required />
                </ManagedForm>

            </Modal.Body>

            <Modal.Footer className="border-top-0">
                <FormButtons>
                    <Button type="submit" form="newCommentForm">
                        Vložit
                    </Button>
                    <Button variant="outline-secondary" type="reset" form="newCommentForm"
                            onClick={onHide}>
                        Zrušit
                    </Button>
                </FormButtons>
            </Modal.Footer>

        </Modal>
    );
}
