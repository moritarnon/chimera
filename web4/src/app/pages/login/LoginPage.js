import React, {useContext} from 'react';
import {Button, ButtonToolbar, Card, Form} from "react-bootstrap";
import {SmallContent} from "../../components/layout/SmallContent";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {useForm} from "../../components/form/useForm";

export const LoginPage = () => {

    const handleSubmit = (values, valid) => {
        if (valid)
            alert("It does nothing!");
    }

    const {onSubmit, onReset, onChange, validated} = useForm({handleSubmit});

    const breakpoints = useContext(BreakpointsContext);
    const isSm = breakpoints.down('md');

    return (
        <SmallContent>
            <Card border="primary">
                <Card.Header>Log In</Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmit} onReset={onReset} onChange={onChange}
                          validated={validated} noValidate>
                        <Form.Group controlId="username">
                            {!isSm ? <Form.Label className="text-muted">
                                <small>Username</small>
                            </Form.Label> : null}
                            <Form.Control type="text" placeholder="Username" required/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            {!isSm ? <Form.Label className="text-muted">
                                <small>Password</small>
                            </Form.Label> : null}
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>

                        <ButtonToolbar className="justify-content-center">
                            <Button variant="primary" type="submit" className="mr-md-3" block={isSm}>
                                Login
                            </Button>
                            <Button variant="secondary" type="reset" block={isSm}>
                                Reset
                            </Button>
                        </ButtonToolbar>
                    </Form>
                </Card.Body>
            </Card>
        </SmallContent>
    );
};