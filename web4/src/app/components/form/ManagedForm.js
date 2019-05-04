import React from 'react';
import {useForm} from "./useForm";
import {Form} from "react-bootstrap";

export const ManagedForm = ({children, handleSubmit, usedForm, id}) => {

    const {actions, validated} = usedForm || useForm({handleSubmit});
    const {onSubmit, onReset, onChange} = actions;

    return (
        <Form onSubmit={onSubmit} onReset={onReset} onChange={onChange}
              validated={validated} id={id} noValidate>
            {children}
        </Form>
    );

}