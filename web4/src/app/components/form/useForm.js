import {useState} from 'react';

export const useForm = ({handleSubmit, initialValues = {}}) => {

    let values = initialValues;
    const [validated, setValidated] = useState(false);

    const onChange = (event) => {
        const input = event.target;
        values = {...values, [input.id]: input.value};
    }

    const onReset = (event) => {
        values = initialValues;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(values, event.currentTarget.checkValidity());
        setValidated(true);
    }

    return {
        onChange,
        onReset,
        onSubmit,
        validated
    };
}