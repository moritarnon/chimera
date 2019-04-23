let id = 1;

export const generateId = () => {
    return (Math.random() + id++).toString();
}