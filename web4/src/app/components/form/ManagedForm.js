import React from 'react';
import {useForm} from "./useForm";
import {Form} from "react-bootstrap";

export const ManagedForm = ({children, handleSubmit}) => {

    const {actions, validated} = useForm({handleSubmit});
    const {onSubmit, onReset, onChange} = actions;

    return (
        <Form onSubmit={onSubmit} onReset={onReset} onChange={onChange}
              validated={validated} noValidate>
            {children}
        </Form>
    );

}