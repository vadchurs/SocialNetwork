export let required = (value) => {
    if (value) {
        return undefined
    }
    return "Field is required"
};

export let maxLength = (maxLength) => {
    return (value) => {
        if (value.length > maxLength) {
            return `Max length is ${maxLength} symbols`
        }
        return undefined
    }
};
