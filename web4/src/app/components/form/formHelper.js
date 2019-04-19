
export const formHelper = ({handleSubmit, initialValues = {}}) => {

    let values = initialValues;

    const onChange = (event) => {
        const input = event.target;
        values = {...values, [input.id]: input.value};
    }

    const onReset = (event) => {
        values = initialValues;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(values, event.currentTarget);
    }

    return {
        onChange,
        onReset,
        onSubmit
    }
}