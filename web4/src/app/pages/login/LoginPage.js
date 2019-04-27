import React, {useContext} from 'react';
import clsx from 'clsx';
import {Button, ButtonGroup, ButtonToolbar, Form} from "react-bootstrap";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {useForm} from "../../components/form/useForm";
import {SmallContent} from "../../layout/SmallContent";
import {Header} from "../../layout/Header";

export const LoginPage = () => {

    const handleSubmit = (values, valid) => {
        if (valid)
            alert("It does nothing!");
    }

    const {actions, validated} = useForm({handleSubmit});
    const {onSubmit, onReset, onChange} = actions;

    const breakpoints = useContext(BreakpointsContext);
    const smDown = breakpoints.down('sm');

    return (
        <React.Fragment>
            <Header title="Please log in" />

            <SmallContent>
                <Form onSubmit={onSubmit} onReset={onReset} onChange={onChange}
                      validated={validated} noValidate>
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

                    <ButtonToolbar className="justify-content-end">
                        <ButtonGroup className={clsx(smDown && "w-100")}>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <Button variant="outline-secondary" type="reset">
                                Clear
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Form>
            </SmallContent>
        </React.Fragment>
    );
};