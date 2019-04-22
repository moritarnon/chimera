import React, {useContext} from 'react';
import {Button, ButtonToolbar, Form} from "react-bootstrap";
import {SmallContent} from "../../components/layout/SmallContent";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {useForm} from "../../components/form/useForm";
import {SmallHeader} from "../../components/layout/SmallHeader";

const tempStyle = {
    paper: {
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    }
}

export const LoginPage = () => {

    const handleSubmit = (values, valid) => {
        if (valid)
            alert("It does nothing!");
    }

    const {actions, validated} = useForm({handleSubmit});
    const {onSubmit, onReset, onChange} = actions;

    const breakpoints = useContext(BreakpointsContext);
    const large = breakpoints.up('md');

    return (
        <SmallContent withPaper={large}>
            <SmallHeader titleDesc="Log In"/>
            <Form className="p-3" onSubmit={onSubmit} onReset={onReset} onChange={onChange}
                  validated={validated} noValidate>
                <Form.Group controlId="username">
                    {large ? <Form.Label className="text-muted">
                        <small>Username</small>
                    </Form.Label> : null}
                    <Form.Control type="text" placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="password">
                    {large ? <Form.Label className="text-muted">
                        <small>Password</small>
                    </Form.Label> : null}
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <ButtonToolbar className="justify-content-center">
                    <Button variant="secondary" type="reset" block={!large} className="mr-md-2">
                        Reset
                    </Button>
                    <Button variant="primary" type="submit" block={!large}>
                        Login
                    </Button>
                </ButtonToolbar>
            </Form>
        </SmallContent>
    );
};