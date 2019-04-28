import React from 'react';
import {Button, Form} from "react-bootstrap";
import {SmallContent} from "../../layout/SmallContent";
import {Header} from "../../layout/Header";
import {ManagedForm} from "../../components/form/ManagedForm";
import {FormButtons} from "../../components/form/FormButtons";

export const LoginPage = () => {

    const handleSubmit = (values, valid) => {
        if (valid)
            alert("It does nothing!");
    }

    return (
        <React.Fragment>
            <Header title="Please log in" />

            <SmallContent>
                <ManagedForm handleSubmit={handleSubmit}>
                    <Form.Group controlId="username" className="input-pair-first">
                        {/*{mdUp ? <Form.Label className="text-muted">*/}
                        {/*<small>Username</small>*/}
                        {/*</Form.Label> : null}*/}
                        <Form.Control size="lg" type="text" placeholder="Username"
                                      required />
                    </Form.Group>

                    <Form.Group controlId="password" className="input-pair-second">
                        {/*{mdUp ? <Form.Label className="text-muted">*/}
                        {/*<small>Password</small>*/}
                        {/*</Form.Label> : null}*/}
                        <Form.Control size="lg" type="password" placeholder="Password" required />
                    </Form.Group>

                    <FormButtons>
                        <Button type="submit">
                            Login
                        </Button>
                        <Button variant="outline-secondary" type="reset">
                            Clear
                        </Button>
                    </FormButtons>
                </ManagedForm>
            </SmallContent>
        </React.Fragment>
    );
};