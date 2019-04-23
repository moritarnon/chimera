import React, {useContext} from 'react';
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import {SmallContent} from "../../components/layout/SmallContent";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {useForm} from "../../components/form/useForm";
import {SmallHeader} from "../../components/layout/SmallHeader";

export const LoginPage = () => {

    const handleSubmit = (values, valid) => {
        if (valid)
            alert("It does nothing!");
    }

    const {actions, validated} = useForm({handleSubmit});
    const {onSubmit, onReset, onChange} = actions;

    const breakpoints = useContext(BreakpointsContext);
    const mdUp = breakpoints.up('md');
    const smUp = breakpoints.up('sm');

    return (
        <SmallContent withPaper={smUp}>
            <SmallHeader titleDesc="Log In"/>
            <Form className="p-3" onSubmit={onSubmit} onReset={onReset} onChange={onChange}
                  validated={validated} noValidate>
                <Form.Group controlId="username">
                    {mdUp ? <Form.Label className="text-muted">
                        <small>Username</small>
                    </Form.Label> : null}
                    <Form.Control type="text" placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="password">
                    {mdUp ? <Form.Label className="text-muted">
                        <small>Password</small>
                    </Form.Label> : null}
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <ButtonToolbar className="justify-content-center">
                    <Button variant="secondary" type="reset" block={!mdUp} className="mr-md-2">
                        Reset
                    </Button>
                    <Button variant="primary" type="submit" block={!mdUp}>
                        Login
                    </Button>
                </ButtonToolbar>
            </Form>
        </SmallContent>
    );
};